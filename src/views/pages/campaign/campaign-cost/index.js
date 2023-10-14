import React, { useState } from 'react'
import { CBadge, CFormCheck } from '@coreui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CustomButton from 'src/components/custombutton'
import styled from 'styled-components'
import { faDollar, faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import { CustomTable } from 'src/components'
import ConfirmDialog from 'src/components/popup'
import TrashIcon from 'src/assets/icons/trash.svg'
import EditIcon from 'src/assets/icons/edit.svg'
import DetailIcon from 'src/assets/icons/detail.svg'
import DeletingMultiple from 'src/components/deleting-multiple'
import UpdateCost from '../components/view-or-update-cost'
import CreateNewCost from '../components/add-new-cost'

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`

const CampaignCost = () => {
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

  const [data, setData] = useState([
    {
      id: '1',
      costType: 'One Time',
      name: 'HUPER',
      startOn: 'Mar 19 2022',
      startEnd: 'Mar 20 2022',
      costValue: '$100.00',
      totalCostValue: '$100.00',
    },
    {
      id: '2',
      costType: 'One Time',
      name: 'HUPER',
      startOn: 'Mar 19 2022',
      startEnd: 'Mar 20 2022',
      costValue: '$100.00',
      totalCostValue: '$100.00',
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
      selector: 'check',
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
      name: 'Cost Type',
      selector: 'costType',
      sortable: true,
    },
    {
      name: 'Campaign Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Start On',
      selector: 'startOn',
      sortable: true,
    },
    {
      name: 'Start End',
      selector: 'startEnd',
      sortable: true,
    },
    {
      name: 'Cost Value',
      selector: 'costValue',
      sortable: true,
    },
    {
      name: 'Total Cost Value',
      selector: 'totalCostValue',
      sortable: true,
    },
    {
      name: <div className="text-center w-100">Action</div>,
      selector: 'action',
      render: (col, obj) => (
        <div className="d-flex flex-row justify-content-center">
          <CustomButton color="main" onClick={() => UpdateCost({ show: true, disable: true })}>
            <img src={DetailIcon} />
          </CustomButton>
          <CustomButton color="main" onClick={() => UpdateCost({ show: true })}>
            <img src={EditIcon} />
          </CustomButton>
          <CustomButton
            color="main"
            onClick={() =>
              ConfirmDialog({
                show: true,
                message: <span>Do you want to delete this cost?</span>,
                title: 'Confirm delete',
                confirmText: 'Delete',
              })
            }
          >
            <img src={TrashIcon} />
          </CustomButton>
        </div>
      ),
    },
  ]

  return (
    <div className="d-flex flex-column w-100 bg-white">
      <div className="d-flex flex-row justify-content-between my-3" style={{ padding: '0 12px' }}>
        <div className="d-flex flex-row align-items-center gap-2">
          <div className="h5">HUPER</div>
          <CBadge color="success">Active</CBadge>
        </div>
        <ButtonGroup>
          <CustomButton color="secondary">
            <FontAwesomeIcon icon={faSyncAlt} />
          </CustomButton>
          <CustomButton color="primary" onClick={() => CreateNewCost({ show: true })}>
            <FontAwesomeIcon icon={faDollar} /> Add New Cost
          </CustomButton>
        </ButtonGroup>
      </div>

      <p className="mb-0 h4" style={{ paddingLeft: '12px' }}>
        Total Cost: $100.00
      </p>
      <CustomTable
        data={data}
        columns={columns}
        Header={() => <DeletingMultiple selectedRows={selectedRows.length} />}
      />
    </div>
  )
}

export default CampaignCost
