import React, { useState } from 'react'
import { CAvatar, CCol, CForm, CFormInput, CFormLabel, CRow } from '@coreui/react'
import CustomSelectInput from 'src/components/customselectinput'
import makeAnimated from 'react-select/animated'
import CustomButton from 'src/components/custombutton'
import styled from 'styled-components'

const CustomForm = styled(CForm)`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const InputGroup = styled.div`
  width: 50%;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

const BussinessNameField = styled.div`
  margin-bottom: 16px;

  @media screen and (max-width: 576px) {
    margin-bottom: 0;
  }
`

const animatedComponents = makeAnimated()

const Profile = () => {
  const [form, setForm] = useState({
    firstName: 'Thai',
    lastName: 'Danh',
    email: 'abc@xyz',
  })

  return (
    <div className="d-flex flex-column w-100 bg-white p-3">
      <div className="d-flex flex-column justify-content-center align-items-center mb-3">
        <CAvatar
          src="https://qfs-frontend.vercel.app/static/media/avatar-1.7dcc001246e297064555.jpg"
          className="mb-3"
          style={{ width: '150px', height: '150px' }}
        />
        <span className="fs-4 fw-bold" style={{ color: '#495057' }}>
          {form.firstName} {form.lastName}
        </span>
      </div>
      <CustomForm>
        <InputGroup>
          <div className="mb-3">
            <CFormLabel htmlFor="firstName">First Name</CFormLabel>
            <CFormInput
              type="text"
              id="firstName"
              placeholder="First Name"
              value={form?.firstName}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="lastName">Last Name</CFormLabel>
            <CFormInput type="text" id="lastName" placeholder="Last Name" value={form?.lastName} />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="emailAdress">Email Address</CFormLabel>
            <CFormInput
              type="email"
              id="emailAdress"
              placeholder="Email Address"
              value={form?.email}
            />
          </div>
          <BussinessNameField>
            <CFormLabel htmlFor="bussinessName">Bussiness Name</CFormLabel>
            <CFormInput type="text" id="bussinessName" placeholder="Bussiness Name" />
          </BussinessNameField>
        </InputGroup>
        <InputGroup>
          <div className="mb-3">
            <CFormLabel htmlFor="bussinessWebsite">Bussiness Website</CFormLabel>
            <CFormInput type="text" id="bussinessWebsite" placeholder="Bussiness Website" />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="bussinessLocation">Bussiness Location</CFormLabel>
            <CustomSelectInput
              closeMenuOnSelect={true}
              components={animatedComponents}
              // defaultValue={options}
              // options={options}
              placeholder="Select Bussiness Location"
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="typeofPOS">Type of POS</CFormLabel>
            <CustomSelectInput
              closeMenuOnSelect={true}
              components={animatedComponents}
              // defaultValue={options}
              // options={options}
              placeholder="Select Type of POS"
            />
          </div>
        </InputGroup>
      </CustomForm>
      <div className="d-flex flex-row-reverse">
        <CustomButton color="primary" type="submit">
          Update
        </CustomButton>
        <CustomButton color="secondary" onClick={() => {}} style={{ marginRight: '10px' }}>
          Cancel
        </CustomButton>
      </div>
    </div>
  )
}

export default Profile
