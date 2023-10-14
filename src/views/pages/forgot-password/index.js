import React, { useState } from 'react'
import { CForm, CFormInput } from '@coreui/react'
import CustomButton from 'src/components/custombutton'
import Logo from 'src/assets/images/Maralytics_Logo_Horizontal_REVERSED_COLORS.svg'
import styled from 'styled-components'

const Image = styled.div`
  display: flex;
  width: 25%;
  margin-bottom: 16px;
  justify-content: center;

  @media only screen and (max-width: 992px) {
    width: 270px;
  }
`

const ChangePassForm = styled(CForm)`
  width: 25%;

  @media only screen and (max-width: 992px) {
    width: 270px;
  }
`

const ATag = styled.a`
  color: ${(props) => (props.flag ? '#1D8DD4' : '#212529')};
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: #0056b3;
  }
`

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({
    code: null,
    message: null,
  })
  const [form, setForm] = useState({
    email: '',
  })

  const handleResetPassword = async (e) => {
    e.preventDefault()
    setLoading(true)
    setLoading(false)
  }

  return (
    <div className="min-vh-100 d-flex flex-column align-items-center w-100 justify-content-center">
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
      <ChangePassForm onSubmit={handleResetPassword}>
        <div className="w-100">
          <p className="fs-4 fw-bold" style={{ color: '#03365C' }}>
            Reset Your Password!
          </p>
          <p style={{ fontSize: '12px' }}>We will email you instructions to reset your password.</p>
        </div>
        <div className="mb-3">
          <CFormInput
            type="email"
            id="email"
            placeholder="Email Address"
            size="sm"
            value={form?.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value })
            }}
          />
        </div>
        <div className="mb-3">
          <CustomButton
            color="primary"
            className="w-100"
            style={{ fontSize: '14px' }}
            type="submit"
          >
            {'reset password'.toUpperCase()}
          </CustomButton>
        </div>
        <div className="text-center">
          <ATag href="/login" flag>
            Return to login
          </ATag>
        </div>
        <div className="text-center" style={{ fontSize: '14px' }}>
          {
            <p className={`${message?.code === 200 ? 'text-primary' : 'text-danger'}`}>
              {message.message}
            </p>
          }
        </div>
      </ChangePassForm>

      <div className="w-100 text-center py-1">
        <ATag target="__blank" href="https://maralytics.com/terms-of-service/">
          Term of Service
        </ATag>
        {' | '}
        <ATag target="__blank" href="https://maralytics.com/privacy-policy/">
          Privacy Policy
        </ATag>
      </div>
    </div>
  )
}

export default ForgotPassword
