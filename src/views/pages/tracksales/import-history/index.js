import React, { useState } from 'react'
import { CustomTable } from 'src/components'
import CustomButton from 'src/components/custombutton'
import { EyeOutlined } from '@ant-design/icons'
import { CFormCheck } from '@coreui/react'
import ImportHistoryHeader from './components/header'
import { useHistory } from 'react-router-dom'
import ViewOrEditSaleValue from '../components/view-or-edit-track-sale'
import DeletingMultiple from 'src/components/deleting-multiple'

const ImportHistory = () => {
  const history = useHistory();
  const TrackSaleHeader = React.lazy(() => import('./components/header'))
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
        let temp = prevState.map((dt) => (dt.id.toString() === id ? { ...dt, isChecked: checked } : dt))
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
      id: 1,
      campaignId: 642,
      CampaignName: 'HUPER 2022',
      salesDate: <div className="text-center">Nov 14, 2021</div>,
      campaignType: <div className="text-center">Campaign only</div>,
      saleValue: <div className="text-end">$0.05</div>,
      status: 'Actived',
    },
    {
      id: 2,
      campaignId: 643,
      CampaignName: 'HUPER 2022',
      salesDate: <div className="text-center">Nov 14, 2021</div>,
      campaignType: <div className="text-center">Campaign only</div>,
      saleValue: <div className="text-end">$0.05</div>,
      status: 'Actived',
    },
    {
      id: 3,
      campaignId: 644,
      CampaignName: 'HUPER 2022',
      salesDate: <div className="text-center">Nov 14, 2021</div>,
      campaignType: <div className="text-center">Campaign only</div>,
      saleValue: <div className="text-end">$0.05</div>,
      status: 'Actived',
    },
    {
      id: 4,
      campaignId: 643,
      CampaignName: 'HUPER 2022',
      salesDate: <div className="text-center">Nov 14, 2021</div>,
      campaignType: <div className="text-center">Campaign only</div>,
      saleValue: <div className="text-end">$0.05</div>,
      status: 'Actived',
    },
    {
      id: 5,
      campaignId: 642,
      CampaignName: 'HUPER 2022',
      salesDate: <div className="text-center">Nov 14, 2021</div>,
      campaignType: <div className="text-center">Campaign only</div>,
      saleValue: <div className="text-end">$0.05</div>,
      status: 'Actived',
    },
  ])

  const tableData = {
    columns: [
      {
        name: (
          <div className="text-center">
            <CFormCheck
              type="checkbox"
              id="all-selected"
              checked={data.filter((dt) => dt?.isChecked !== true).length < 1}
              onChange={handleChange}
            />
          </div>
        ),
        className:' align-center-col-name',
        selector: 'checkbox',
        render: (col, obj) => {
          return (
            <div className="text-center">
              <CFormCheck
                type="checkbox"
                id={`${obj.id}`}
                checked={obj?.isChecked || false}
                onChange={handleChange}
              />
            </div>
          )
        },
      },
      {
        name: 'Campaign ID',
        selector: 'campaignId',
        sortable: true,
      },
      {
        name: 'Campaign Name',
        selector: 'CampaignName',
        sortable: true,
      },
      {
        name: <div className="text-center">Sales Date</div>,
        selector: 'salesDate',
        sortable: true,
      },
      {
        name: <div className="text-center">Campaign Type</div>,
        selector: 'campaignType',
        sortable: true,
      },
      {
        name: <div className="text-center">Sales Value</div>,
        selector: 'saleValue',
        sortable: true,
      },
      {
        name: <div className="text-center">Status</div>,
        selector: 'status',
        sortable: true,
        render: (col, obj) => {
          return obj.status ? (
            <div className="text-center">Active</div>
          ) : (
            <div className="text-center">Expired</div>
          )
        },
      },
      {
        name: <div className="text-center">Action</div>,
        selector: 'action',
        render: (col, obj) => (
          <div className="d-flex flex-row justify-content-center" key={obj.campaignId}>
            <CustomButton color="main"
              onClick={() => {
                history.push(`/track-sales/show-imported-history?id=${6456}`);
              }}
            >
              <EyeOutlined style={{ fontSize: '23px' }} />
            </CustomButton>
          </div>
        ),
      },
    ],
  }
  console.log('xxxx', data);
  return (
    <CustomTable id="track-sale-table" columns={tableData.columns} data={data}
      Header={() => (
        <>
          <ImportHistoryHeader />
          <DeletingMultiple selectedRows={selectedRows.length} />

        </>
      )}
    />
  )
}

export default ImportHistory
