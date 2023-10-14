import React from 'react'
import { CustomTable } from 'src/components'
import CustomButton from 'src/components/custombutton'
import ConfirmDialog from 'src/components/popup'
import TrashIcon from 'src/assets/icons/trash.svg'
import EditIcon from 'src/assets/icons/edit.svg'
import DetailIcon from 'src/assets/icons/detail.svg'
import {
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CInputGroup,
  CRow,
} from '@coreui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarcode, faQrcode } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import UpdateCost from '../../components/view-or-update-cost'

const BarCodeBox = styled.div`
  display: flex;
  height: 118px;
  border: 1px solid ${'#e5e7eb'};
  justify-content: center;
  align-items: center;
  position: relative;
`

const Information = () => {
  const viewCost = () => {
    UpdateCost({ show: true, disable: true })
  }

  const editCost = () => {
    UpdateCost({ show: true })
  }

  const tableData = {
    columns: [
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
            <CustomButton color="main" onClick={() => viewCost(obj.id)}>
              <img src={DetailIcon} />
            </CustomButton>
            <CustomButton color="main" onClick={() => editCost(obj.id)}>
              <img src={EditIcon} />
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
              <img src={TrashIcon} />
            </CustomButton>
          </div>
        ),
      },
    ],
    data: [
      {
        id: 2,
        costType: 'One Time',
        name: 'HUPER',
        startOn: 'Mar 19 2022',
        startEnd: 'Mar 20 2022',
        costValue: '$100.00',
        totalCostValue: '$100.00',
      },
    ],
  }

  return (
    <div className="d-flex flex-column w-100">
      <div className="d-flex flex-column w-100 my-3" style={{ padding: '0 12px' }}>
        <CRow>
          <CCol md={5}>
            <CForm>
              <div className="mb-3">
                <CFormLabel>Campaign Name</CFormLabel>
                <CFormInput type="text" id="campaignName" value="HUPER 8.3" />
              </div>
              <div className="mb-3">
                <CFormLabel>Campaign Type</CFormLabel>
                <CFormInput type="text" id="campaignType" value="10% discount" />
              </div>
              <CRow>
                <CCol md={6}>
                  <div className="mb-3">
                    <CFormLabel>Start Date</CFormLabel>
                    <CFormInput type="date" id="startDate" />
                  </div>
                </CCol>
                <CCol md={6}>
                  <div className="mb-3">
                    <CFormLabel>End Date</CFormLabel>
                    <CFormInput type="date" id="endDate" />
                  </div>
                </CCol>
              </CRow>
              <div className="mb-3">
                <CFormLabel>Duration of Campaign</CFormLabel>
                <CFormInput type="text" id="campaignType" value="47 weeks 6 days" />
              </div>
            </CForm>
          </CCol>
          <CCol md={7}>
            <CRow className="mb-2">
              <CCol md={4}>
                <CFormLabel>Campaign ID</CFormLabel>
                <BarCodeBox>CAMPAIGN ID</BarCodeBox>
              </CCol>
              <CCol md={4}>
                <CFormLabel>
                  <FontAwesomeIcon icon={faQrcode} /> QR Code
                </CFormLabel>
                <BarCodeBox>QR CODE</BarCodeBox>
              </CCol>
              <CCol md={4}>
                <CFormLabel>
                  <FontAwesomeIcon icon={faBarcode} /> Bar Code
                </CFormLabel>
                <BarCodeBox>BAR CODE</BarCodeBox>
              </CCol>
            </CRow>
            <CCol md={12}>
              <CFormLabel>Notes</CFormLabel>
              <CInputGroup>
                <CFormTextarea id="note" rows="5" onChange={() => {}}></CFormTextarea>
              </CInputGroup>
            </CCol>
          </CCol>
        </CRow>
      </div>

      <p className="fw-bold mb-0" style={{ paddingLeft: '12px' }}>
        List of Cost
      </p>
      <CustomTable data={tableData.data} columns={tableData.columns} />
    </div>
  )
}

export default Information
