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
import CustomButton from '../../../../components/custombutton'
import makeAnimated from 'react-select/animated'
import CustomSelectInput from 'src/components/customselectinput'

const animatedComponents = makeAnimated()

const UpdateCost = (props) => {
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
  const { show, disable, callback } = { ...props }
  const [visible, setVisible] = useState(show)
  const [options, setOptions] = useState([
    {
      label: 'One Time',
      value: 'One Time',
    },
  ])

  return (
    <>
      <CModal visible={visible} onClose={() => setVisible(false)} size="lg">
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle style={{ color: '#000000', fontSize: '18px' }}>
            {disable ? 'View Cost' : 'Update Cost'}
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          {!disable && <CFormLabel style={{ color: '#000000' }}>Required Information</CFormLabel>}
          <CRow>
            <CCol md={6}>
              <CFormLabel>Campaign Name</CFormLabel>
              <CInputGroup className="mb-3">
                <CFormInput type="text" id="campaign-name" value="HUPER" disabled={true} />
              </CInputGroup>
              <CFormLabel>Date</CFormLabel>
              <CInputGroup className="mb-3">
                <CFormInput type="date" id="date" disabled={!!disable} onChange={() => {}} />
              </CInputGroup>
            </CCol>

            <CCol md={6}>
              <CFormLabel>Cost Type</CFormLabel>
              <div className="mb-3">
                <CustomSelectInput
                  InputcloseMenuOnSelect={true}
                  components={animatedComponents}
                  defaultValue={options}
                  value={options}
                  isDisabled={!!disable}
                />
              </div>
              <CFormLabel>Cost Value</CFormLabel>
              <CInputGroup className="mb-3">
                <CInputGroupText>$</CInputGroupText>
                <CFormInput
                  type="number"
                  id="cost-value"
                  min="0"
                  value="100"
                  disabled={!!disable}
                  onChange={() => {}}
                />
              </CInputGroup>
            </CCol>
          </CRow>
          <CRow>
            <CCol md={12}>
              <CFormLabel>Notes</CFormLabel>
              <CInputGroup className="mb-3">
                <CFormTextarea
                  id="note"
                  rows="4"
                  disabled={!!disable}
                  onChange={() => {}}
                ></CFormTextarea>
              </CInputGroup>
            </CCol>
          </CRow>
        </CModalBody>
        {!disable && (
          <CModalFooter>
            <CustomButton color="secondary" onClick={() => setVisible(false)}>
              Cancel
            </CustomButton>
            <CustomButton color="light">Update & Continue</CustomButton>
            <CustomButton color="primary">Update & Close</CustomButton>
          </CModalFooter>
        )}
      </CModal>
    </>
  )
}

export default UpdateCost
