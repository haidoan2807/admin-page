import React, { useState } from 'react'
import { CButton, CFormCheck } from '@coreui/react'
import CustomButton from 'src/components/custombutton'
import { CustomTable } from 'src/components'
import ConfirmDialog from 'src/components/popup'
import { useHistory } from 'react-router-dom'
import TrashIcon from 'src/assets/icons/trash.svg'
import EditIcon from 'src/assets/icons/edit.svg'
import DollarIcon from 'src/assets/icons/dollar.svg'
import DetailIcon from 'src/assets/icons/detail.svg'
import Header from './components/header'
import EditCampaign from './components/edit-campaign'

const Campaign = () => {
  const DeletingMultiple = React.lazy(() => import('src/components/deleting-multiple'))
  const history = useHistory()

  const [selectedRows, setSelectedRows] = useState([])

  const handleChange = (e) => {
    const { id, checked } = e.target

    // display checkbox UI
    if (id === 'all-selected') {
      setData((prevState) => {
        let temp = prevState.map((dt) => {
          return { ...dt, isChecked: checked }
        })
        return temp
      })
    } else {
      setData((prevState) => {
        let temp = prevState.map((dt) => (dt.id === id ? { ...dt, isChecked: checked } : dt))
        return temp
      })
    }

    // save ids into selectedRows
    setSelectedRows((prevState) => {
      if (id === 'all-selected') {
        if (prevState.length !== data.length) {
          return data.map((i) => i.id)
        } else {
          return []
        }
      } else {
        let newArray = [...prevState, id]
        if (prevState.includes(id)) {
          newArray = newArray.filter((item) => item !== id)
        }
        return newArray
      }
    })
  }

  const viewDetail = (id) => {
    history.push({ pathname: '/campaign/detail', state: { id: id } })
  }

  const viewCampaignCost = (id) => {
    history.push({ pathname: '/campaign/campaign-cost', state: { id: id } })
  }

  const [data, setData] = useState([
    {
      id: '1',
      name: 'Miriam Van Heusden1',
      type: (
        <span className="d-inline-block text-truncate" style={{ maxWidth: '80px' }}>
          Buy one get one
        </span>
      ),
      'start-date': 'Mar  2022',
      'total-sales': '$0.00',
      'total-customers': 0,
      'total-cost': '$0.00',
      'campaigns': 9,
      'total-profit': '$0.00',
      roi: '0.00%',
      status: true,
    },
    {
      id: '2',
      name: 'Airiam Van Heusden2',
      type: (
        <span className="d-inline-block text-truncate" style={{ maxWidth: '80px' }}>
          Mid one get one
        </span>
      ),
      'start-date': 'Mar  2022',
      'total-sales': '$0.00',
      'total-customers': 0,
      'total-cost': '$0.00',
      'campaigns': 10,
      'total-profit': '$0.00',
      roi: '0.00%',
      status: false,
    },
  ])

  const columns = [
    {
      name: (
        <div className="text-center w-100">
          <CFormCheck
            type="checkbox"
            id="all-selected"
            checked={data.filter((dt) => dt?.isChecked !== true).length < 1}
            onChange={handleChange}
          />
        </div>
      ),
      selector: 'checkbox',
      className:' align-center-col-name',
      render: (col, obj) => {
        return (
          <div className="text-center">
            <CFormCheck
              type="checkbox"
              id={obj.id}
              checked={obj?.isChecked || false}
              onChange={handleChange}
            />
          </div>
        )
      },
    },
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Type',
      selector: 'type',
      sortable: true,
    },
    {
      name: 'Start Date',
      selector: 'start-date',
      sortable: true,
    },
    {
      name: 'Total Sales',
      selector: 'total-sales',
      sortable: true,
    },
    {
      name: 'Total Cost',
      selector: 'total-cost',
      sortable: true,
    },
    {
      name: 'Total Profit',
      selector: 'total-profit',
      sortable: true,
    },
    {
      name: 'ROI%',
      selector: 'roi',
      sortable: true,
    },
    {
      name: 'Campaigns',
      selector: 'campaigns',
      sortable: true,
    },
    {
      name: 'Status',
      selector: 'status',
      sortable: true,
      render: (col, obj) => {
        return obj.status ? (
          <CButton color="success" size="sm">
            Active
          </CButton>
        ) : (
          <CButton color="danger" size="sm">
            Expired
          </CButton>
        )
      },
    },
    {
      name: <div className="text-center w-100">Action</div>,
      selector: 'action',
      render: (col, obj) => (
        <div className="d-flex flex-row justify-content-center">
          <CustomButton color="main" onClick={() => viewDetail(obj.id)}>
            <img src={DetailIcon}></img>
          </CustomButton>
          <CustomButton color="main" onClick={() => EditCampaign({ show: true })}>
            <img src={EditIcon}></img>
          </CustomButton>
          <CustomButton color="main" onClick={() => viewCampaignCost(obj.id)}>
            <img src={DollarIcon}></img>
          </CustomButton>
          <CustomButton
            color="main"
            onClick={() =>
              ConfirmDialog({
                show: true,
                message: <span>Do you want to delete this campaign: {obj.name}?</span>,
                title: 'Confirm delete',
                confirmText: 'Delete',
              })
            }
          >
            <img src={TrashIcon}></img>
          </CustomButton>
        </div>
      ),
    },
  ]

  return (
    <CustomTable
      data={data}
      columns={columns}
      Header={() => (
        <>
          <Header />
          <DeletingMultiple selectedRows={selectedRows.length} />
        </>
      )}
    />
  )
}

export default Campaign
