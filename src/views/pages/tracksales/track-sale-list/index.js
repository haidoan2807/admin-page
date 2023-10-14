import React, { useEffect, useState } from 'react'
import { CustomTable } from 'src/components'
import CustomButton from 'src/components/custombutton'
import TrashIcon from 'src/assets/icons/trash.svg'
import EditIcon from 'src/assets/icons/edit.svg'
import { EyeOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { CFormCheck } from '@coreui/react'
import ConfirmDialog from 'src/components/popup'
import ViewOrEditSaleValue from '../components/view-or-edit-track-sale'
import { useHistory } from 'react-router-dom'

const trackListColsData = {
  settingColumns: [
    {
      label: 'Campaign ID',
      value: 'campaignId',
    },
    {
      label: 'Campain Name',
      value: 'campaignName',
    },
    {
      label: 'Sale Date',
      value: 'salesDate',
    },
    {
      label: 'Campaign Type ',
      value: 'campaignType',
    },
    {
      label: 'Sales Value',
      value: 'saleValue',
    },
    {
      label: 'Status',
      value: 'status',
    },
  ],
  selectedShowColumns: [
    {
      label: 'Campaign ID',
      value: 'campaignId',
    },
    {
      label: 'Campain Name',
      value: 'campaignName',
    },
    {
      label: 'Sale Date',
      value: 'salesDate',
    },
    {
      label: 'Campaign Type ',
      value: 'campaignType',
    },
    {
      label: 'Sales Value',
      value: 'saleValue',
    },
    {
      label: 'Status',
      value: 'status',
    },
  ],
}

const TrackSalesList = () => {
  const tableData = {
    columns: [
      {
        name: 'Campaign ID',
        selector: 'campaignId',
        sortable: true,
      },
      {
        name: 'Campaign Name',
        selector: 'campaignName',
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
        name: <div className="text-center w-100">Action</div>,
        selector: 'action',
        ignoreHide: true,
        render: (col, obj) => (
          <div className="d-flex flex-row justify-content-center" key={obj.id}>
            <CustomButton
              color="main"
              onClick={() =>
                ViewOrEditSaleValue({
                  show: true,
                  isViewed: true,
                })
              }
            >
              <EyeOutlined style={{ fontSize: '23px' }} />
            </CustomButton>
            <CustomButton
              color="main"
              onClick={() => history.push(`/track-sales/track-sale-detail?id=${1000111}`)}
            >
              <InfoCircleOutlined style={{ fontSize: '19px' }} />
            </CustomButton>

            <CustomButton
              color="main"
              onClick={() =>
                ViewOrEditSaleValue({
                  show: true,
                  isViewed: false,
                })
              }
            >
              <img src={EditIcon} />
            </CustomButton>
            <CustomButton color="main">
              <img
                src={TrashIcon}
                onClick={() =>
                  ConfirmDialog({
                    show: true,
                    message: (
                      <span>
                        Are you sure you want to <b>delete</b> {obj.campaignName}?
                      </span>
                    ),
                  })
                }
              />
            </CustomButton>
          </div>
        ),
      },
    ],
    data: [
      {
        campaignId: 642,
        campaignName: 'HUPER 2022',
        salesDate: <div className="text-center">Nov 14, 2021</div>,
        campaignType: <div className="text-center">Campaign only</div>,
        saleValue: <div className="text-end">$0.05</div>,
        status: 'Actived',
      },
      {
        campaignId: 643,
        campaignName: 'HUPER 2022',
        salesDate: <div className="text-center">Nov 14, 2021</div>,
        campaignType: <div className="text-center">Campaign only</div>,
        saleValue: <div className="text-end">$0.05</div>,
        status: 'Actived',
      },
      {
        campaignId: 644,
        campaignName: 'HUPER 2022',
        salesDate: <div className="text-center">Nov 14, 2021</div>,
        campaignType: <div className="text-center">Campaign only</div>,
        saleValue: <div className="text-end">$0.05</div>,
        status: 'Actived',
      },
      {
        campaignId: 643,
        campaignName: 'HUPER 2022',
        salesDate: <div className="text-center">Nov 14, 2021</div>,
        campaignType: <div className="text-center">Campaign only</div>,
        saleValue: <div className="text-end">$0.05</div>,
        status: 'Actived',
      },
      {
        campaignId: 642,
        campaignName: 'HUPER 2022',
        salesDate: <div className="text-center">Nov 14, 2021</div>,
        campaignType: <div className="text-center">Campaign only</div>,
        saleValue: <div className="text-end">$0.05</div>,
        status: 'Actived',
      },
    ],
  }
  const history = useHistory()
  const TrackSaleHeader = React.lazy(() => import('./components/header'))
  const [trackSaleColumns, setTrackSaleColumns] = useState(tableData.columns)
  const [settingColumns, setSettingColumns] = useState(trackListColsData.settingColumns)
  const [selectedShowColumns, setSelectedShowColumns] = useState(
    trackListColsData.selectedShowColumns,
  )
  const [isShownFilterCols, setIsShownFilterCols] = useState(false)
  useEffect(() => {}, [])

  const filterColumnsTable = (selectedCols) => {
    const shownCols = tableData.columns.filter(
      (t) => selectedCols.findIndex((s) => t.ignoreHide == true || t.selector == s.value) > -1,
    )
    setTrackSaleColumns(shownCols)
    setSelectedShowColumns(selectedCols)
    setIsShownFilterCols(true)
  }

  return (
    <CustomTable
      data={tableData.data}
      columns={trackSaleColumns}
      Header={() => (
        <TrackSaleHeader
          filterColumnsTable={filterColumnsTable}
          settingColumns={settingColumns}
          selectedShowColumns={selectedShowColumns}
          isShownFilterCols={isShownFilterCols}
        />
      )}
    />
  )
}

export default TrackSalesList
