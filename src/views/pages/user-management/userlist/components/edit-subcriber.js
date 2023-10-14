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

const EditSubscriber = (props) => {
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
  const { show, user } = { ...props }
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

  const [subscriptionOptions, setSubscriptionOptions] = useState([
    {
      value: 0,
      label: 'Free Trial',
    },
    {
      value: 1,
      label: 'Integration',
    },
  ])

  const [months, setmonths] = useState([
    {
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 3,
      label: '3',
    },
  ])

  return (
    <CModal visible={visible} onClose={() => setVisible(false)} size="lg">
      <CModalHeader onClose={() => setVisible(false)}>
        <CModalTitle style={{ color: '#000000', fontSize: '18px' }}>Edit Subscriber</CModalTitle>
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
                value={user.firstName}
                onChange={() => {}}
              />
            </CInputGroup>

            <CFormLabel>Email</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput
                type="email"
                id="email"
                placeholder="Input email"
                value={user.email}
                onChange={() => {}}
              />
            </CInputGroup>

            <CFormLabel>Business Name</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput
                type="text"
                id="businessname"
                placeholder="Input business name"
                value={user.bussinessName}
                onChange={() => {}}
              />
            </CInputGroup>

            <CFormLabel>Business Website</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput
                type="text"
                id="businesswebsite"
                placeholder="Input business website"
                value={user.bussinessWebsite}
                onChange={() => {}}
              />
            </CInputGroup>

            <CFormLabel>Business Location</CFormLabel>
            <CustomSelectInput
              InputcloseMenuOnSelect={true}
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
                value={user.lastName}
                onChange={() => {}}
              />
            </CInputGroup>

            <CFormLabel>Type of POS</CFormLabel>
            <div className="mb-3">
              <CustomSelectInput
                InputcloseMenuOnSelect={true}
                closeMenuOnSelect={true}
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
                value={user.password}
                onChange={() => {}}
              />
            </CInputGroup>

            <CFormLabel>Confirmed Password</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput
                type="password"
                id="confirmedpassword"
                placeholder="Input confirmed password"
                value={user.confirmedPassword}
                onChange={() => {}}
              />
            </CInputGroup>

            <CFormLabel>Subscription</CFormLabel>
            <CustomSelectInput
              closeMenuOnSelect={true}
              components={animatedComponents}
              // defaultValue={options}
              options={subscriptionOptions}
              placeholder="Select subscription"
              className="mb-3"
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol className="d-flex flex-row align-items-center mt-3">
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
          </CCol>
          <CCol>
            <CFormLabel>Trial Month</CFormLabel>
            <CustomSelectInput
              closeMenuOnSelect={true}
              components={animatedComponents}
              defaultValue={months[0]}
              options={months}
              placeholder="Select subscription"
              className="mb-3"
            />
          </CCol>
        </CRow>
      </CModalBody>
      <CModalFooter>
        <CustomButton color="secondary" onClick={() => setVisible(false)}>
          Close
        </CustomButton>
        <CustomButton color="primary">Update</CustomButton>
      </CModalFooter>
    </CModal>
  )
}

export default EditSubscriber
