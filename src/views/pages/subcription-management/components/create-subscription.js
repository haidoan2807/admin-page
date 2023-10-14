import React, { useState } from 'react'
import {
  CCol,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from '@coreui/react'
import { render, unmountComponentAtNode } from 'react-dom'
import CustomButton from '../../../../components/custombutton'

const CreateNewSubscription = (props) => {
  return new Promise((resolve) => {
    let el = document.createElement('div')

    const handleResolve = (result) => {
      unmountComponentAtNode(el)
      el = null
      resolve(result)
    }

    render(<DialogContent {...props} onExit={handleResolve} />, el)
  })
}

const DialogContent = (props) => {
  const { show } = { ...props }
  const [visible, setVisible] = useState(show)

  return (
    <CModal visible={visible} onClose={() => setVisible(false)} size="lg">
      <CModalHeader onClose={() => setVisible(false)}>
        <CModalTitle style={{ color: '#000000', fontSize: '18px' }}>
          Create New Subscription
        </CModalTitle>
      </CModalHeader>
      <CModalBody style={{ fontSize: '14px' }}>
        <CFormLabel>Required Information</CFormLabel>
        <CRow>
          <CCol>
            <CFormLabel>Subscription Name</CFormLabel>
            <CInputGroup style={{ marginBottom: '32px' }} size="sm">
              <CFormInput
                type="text"
                id="name"
                placeholder="Input subscription name"
                onChange={() => {}}
              />
            </CInputGroup>

            <CFormLabel>Monthly Price</CFormLabel>
            <CInputGroup className="mb-3" size="sm">
              <CFormInput
                type="number"
                id="monthly-price"
                min="0"
                placeholder="Input monthly price"
                onChange={() => {}}
              />
            </CInputGroup>

            <CFormCheck
              id="checkMonthly"
              className="mb-3"
              label="Disable Monthly"
              onChange={() => {}}
            />

            <CFormCheck
              id="checkAnnually"
              className="mb-3"
              label="Disable Annually"
              onChange={() => {}}
            />
          </CCol>
          <CCol>
            <CFormLabel>No. of Campaigns</CFormLabel>
            <CInputGroup className="mb-1" size="sm">
              <CFormInput
                type="number"
                id="no-of-campaigns"
                min="0"
                placeholder="Input number of campaigns"
                onChange={() => {}}
              />
            </CInputGroup>
            <CFormCheck
              id="checkUnlimited"
              className="mb-1"
              label="Unlimited"
              onChange={() => {}}
            />

            <CFormLabel>Annual Price</CFormLabel>
            <CInputGroup className="mb-3" size="sm">
              <CFormInput
                type="number"
                id="annual-price"
                min="0"
                placeholder="Input annual price"
                onChange={() => {}}
              />
            </CInputGroup>

            <CFormCheck id="checkTrial" className="mb-3" label="Allow Trial" onChange={() => {}} />

            <CFormCheck
              id="checkPackage"
              className="mb-3"
              label="Allow Special Package"
              onChange={() => {}}
            />
          </CCol>
        </CRow>
        <CRow>
          <div className="d-flex flex-row">
            <span className="me-4">Status</span>
            <CFormCheck
              type="radio"
              name="checkRadio"
              id="checkActive"
              label="Active"
              defaultChecked
              className="me-3"
              onChange={() => {}}
            />
            <CFormCheck
              type="radio"
              name="checkRadio"
              id="checkInactive"
              label="Inactive"
              onChange={() => {}}
            />
          </div>
        </CRow>
      </CModalBody>
      <CModalFooter>
        <CustomButton color="secondary" onClick={() => setVisible(false)}>
          Close
        </CustomButton>
        <CustomButton color="primary">Create</CustomButton>
      </CModalFooter>
    </CModal>
  )
}

export default CreateNewSubscription
