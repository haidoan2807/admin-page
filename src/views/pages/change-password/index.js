import React, { useState } from 'react'
import { CForm, CFormInput } from '@coreui/react'
import Logo from 'src/assets/images/Maralytics_Logo_Horizontal_REVERSED_COLORS.svg'
import CustomButton from 'src/components/custombutton'
import styled from 'styled-components'

const CustomForm = styled(CForm)`
  width: 50%;

  @media screen and (max-width: 576px) {
    width: 270px;
  }
`

const Image = styled.div`
  display: flex;
  width: 50%;
  margin-bottom: 16px;
  justify-content: center;

  @media only screen and (max-width: 576px) {
    width: 270px;
  }
`

const ChangePassword = () => {
  const [form, setForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChangePassword = (e) => {
    e.preventDefault()
    setLoading(true)
    if (form.newPassword !== form.confirmNewPassword) {
      // Alert error
      return
    }
    setLoading(false)
  }

  return (
    <div className="d-flex flex-column align-items-center w-100 justify-content-center bg-white">
      <Image>
        <img
          src={Logo}
          alt="Maralytics Logo Horizontal transparent BG"
          className="w-100"
          style={{ cursor: 'pointer' }}
          onClick={(e) => {
            window.open('https://maralytics.com/', '__blank')
          }}
        />
      </Image>

      <CustomForm onSubmit={handleChangePassword}>
        <div className="w-100">
          <p className="fs-4 fw-bold" style={{ color: '#03365C' }}>
            Change Password
          </p>
        </div>
        <div className="mb-3">
          <CFormInput
            type="password"
            placeholder="Current Password"
            size="sm"
            onChange={(e) => {
              setForm({ ...form, currentPassword: e.target.value })
            }}
          />
        </div>
        <div className="mb-3">
          <CFormInput
            type="password"
            placeholder="New Password"
            size="sm"
            onChange={(e) => {
              setForm({ ...form, newPassword: e.target.value })
            }}
          />
        </div>
        <div className="mb-3">
          <CFormInput
            type="password"
            placeholder="Confirm New Password"
            size="sm"
            onChange={(e) => {
              setForm({ ...form, confirmNewPassword: e.target.value })
            }}
          />
        </div>
        <div className="d-flex flex-row-reverse mb-4">
          <CustomButton color="primary" type="submit">
            Change Password
          </CustomButton>
          <CustomButton color="secondary" onClick={() => {}} style={{ marginRight: '10px' }}>
            Cancel
          </CustomButton>
        </div>
      </CustomForm>
    </div>
  )
}

export default ChangePassword
