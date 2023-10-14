import React, { useState } from 'react'
import {
  CCol,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from '@coreui/react'
import { render, unmountComponentAtNode } from 'react-dom'
import makeAnimated from 'react-select/animated'
import CustomButton from 'src/components/custombutton'

const animatedComponents = makeAnimated()

const EditIndvidualTrackSale = (props) => {
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
  const [options, setOptions] = useState([
    {
      value: 0,
      label: 'Vietnam',
    },
    {
      value: 1,
      label: 'Thailand',
    },
  ])
  return (
    <CModal visible={visible} onClose={() => setVisible(false)} size="lg">
      <CModalHeader onClose={() => setVisible(false)}>
        <CModalTitle style={{ color: '#000000', fontSize: '18px' }}>
          Edit individual track sale
        </CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CFormLabel style={{ color: '#000000' }}><span style={{ color: 'red' }}>*</span> Required Information</CFormLabel>
        <CRow>
          <CCol md={6}>
            <CFormLabel>Campaign Name</CFormLabel>
            <div className="mb-3">
              <CFormInput
                type="number"
                id="number"
                min="0"
                onChange={() => { }}
                disabled
              />
            </div>

            <CFormLabel>Sales Date</CFormLabel>
            <div className="mb-3">
              <CFormInput
                type="number"
                id="number"
                min="0"
                onChange={() => { }}
                disabled
              />
            </div>

            <CFormLabel className='required'>Payment Description</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput
                type="number"
                id="number"
                min="0"
                onChange={() => { }}
                placeholder="Input payment description..."
              />
            </CInputGroup>
          </CCol>

          <CCol md={6}>
            <CFormLabel>Sales ID (From POS)</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput type="date" id="sale-date"
                disabled
                onChange={() => { }} />
            </CInputGroup>
            <CFormLabel>Sales Value</CFormLabel>
            <CInputGroup className="mb-3">
              <CInputGroupText>$</CInputGroupText>
              <CFormInput
                type="number"
                min="0"
                onChange={() => { }}
                disabled
              />
            </CInputGroup>
            <CFormLabel>Number of customers</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormTextarea
                rows="1"
                disabled
                onChange={() => { }}
              ></CFormTextarea>
            </CInputGroup>
          </CCol>
        </CRow>
      </CModalBody>
      <CModalFooter>
        <CustomButton color="secondary" onClick={() => setVisible(false)}>
          Cancel
        </CustomButton>
        <CustomButton color="primary">Update</CustomButton>
      </CModalFooter>
    </CModal>
  )
}

export default EditIndvidualTrackSale
