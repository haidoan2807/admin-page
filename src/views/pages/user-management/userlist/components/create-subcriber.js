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
import CustomButton from '../../../../../components/custombutton'
import makeAnimated from 'react-select/animated'
import CustomSelectInput from 'src/components/customselectinput'

const animatedComponents = makeAnimated()

const CreateSubscriber = (props) => {
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
          Create New Subscriber
        </CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CFormLabel style={{ color: '#000000' }}>Required Information</CFormLabel>
        <CRow>
          <CCol>
            <CFormLabel>First Name</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput
                type="text"
                id="firstname"
                placeholder="Input first name"
                onChange={() => {}}
              />
            </CInputGroup>

            <CFormLabel>Email</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput type="email" id="email" placeholder="Input email" onChange={() => {}} />
            </CInputGroup>

            <CFormLabel>Business Name</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput
                type="text"
                id="businessname"
                placeholder="Input business name"
                onChange={() => {}}
              />
            </CInputGroup>

            <CFormLabel>Business Website</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput
                type="text"
                id="businesswebsite"
                placeholder="Input business website"
                onChange={() => {}}
              />
            </CInputGroup>

            <CFormLabel>Business Location</CFormLabel>
            <CustomSelectInput
              closeMenuOnSelect={true}
              components={animatedComponents}
              // defaultValue={options}
              options={options}
              placeholder="Select business location"
              className="mb-3"
            />
          </CCol>

          <CCol>
            <CFormLabel>Last Name</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput
                type="text"
                id="lastname"
                placeholder="Input last name"
                onChange={() => {}}
              />
            </CInputGroup>

            <CFormLabel>Type of POS</CFormLabel>
            <div className="mb-3">
              <CustomSelectInput
                InputcloseMenuOnSelect={true}
                components={animatedComponents}
                // defaultValue={options}
                options={options}
                placeholder="Select type of POS"
              />
            </div>

            <CFormLabel>Password</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput
                type="password"
                id="password"
                placeholder="Input password"
                onChange={() => {}}
              />
            </CInputGroup>

            <CFormLabel>Confirmed Password</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput
                type="password"
                id="confirmedpassword"
                placeholder="Input confirmed password"
                onChange={() => {}}
              />
            </CInputGroup>

            <CFormLabel>Subscription</CFormLabel>
            <CustomSelectInput
              closeMenuOnSelect={true}
              components={animatedComponents}
              // defaultValue={options}
              options={options}
              placeholder="Select subscription"
              className="mb-3"
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
              className="me-5"
            />
            <CFormCheck type="radio" name="checkRadio" id="checkInactive" label="Inactive" />
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

export default CreateSubscriber
