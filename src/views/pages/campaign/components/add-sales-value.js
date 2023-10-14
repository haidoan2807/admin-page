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

const CreateNewSales = (props) => {
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
          Add New Sales Value
        </CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CFormLabel style={{ color: '#000000' }}>Required Information</CFormLabel>
        <CRow>
          <CCol md={6}>
            <CFormLabel>Campaign Name</CFormLabel>
            <div className="mb-3">
              <CustomSelectInput
                InputcloseMenuOnSelect={true}
                components={animatedComponents}
                // defaultValue={options}
                options={options}
                placeholder="Campaign Name"
              />
            </div>

            <CFormLabel>Campaign Type</CFormLabel>
            <div className="mb-3">
              <CustomSelectInput
                InputcloseMenuOnSelect={true}
                components={animatedComponents}
                // defaultValue={options}
                options={options}
                placeholder="Campaign Type"
              />
            </div>

            <CFormLabel>Number of customers</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput
                type="number"
                id="number"
                min="0"
                onChange={() => {}}
                placeholder="Number of customers"
              />
            </CInputGroup>
          </CCol>

          <CCol md={6}>
            <CFormLabel>Sales Date</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput type="date" id="sale-date" onChange={() => {}} placeholder="Sales date" />
            </CInputGroup>
            <CFormLabel>Sales Value</CFormLabel>
            <CInputGroup className="mb-3">
              <CInputGroupText>$</CInputGroupText>
              <CFormInput
                type="number"
                min="0"
                id="sale-date"
                onChange={() => {}}
                placeholder="Sales value"
              />
            </CInputGroup>
            <CFormLabel>Notes</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormTextarea
                id="note"
                rows="1"
                onChange={() => {}}
                placeholder="Notes"
              ></CFormTextarea>
            </CInputGroup>
          </CCol>
        </CRow>
      </CModalBody>
      <CModalFooter>
        <CustomButton color="secondary" onClick={() => setVisible(false)}>
          Cancel
        </CustomButton>
        <CustomButton color="light">Add & Continue</CustomButton>
        <CustomButton color="primary">Add & Close</CustomButton>
      </CModalFooter>
    </CModal>
  )
}

export default CreateNewSales
