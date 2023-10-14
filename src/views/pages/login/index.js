import React, { useEffect, useState } from 'react'
import { CForm, CFormCheck, CFormInput } from '@coreui/react'
import CustomButton from 'src/components/custombutton'
import Logo from 'src/assets/images/Maralytics_Logo_Horizontal_REVERSED_COLORS.svg'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useAuth } from 'src/utils/auth-provider'

const Image = styled.div`
  display: flex;
  width: 25%;
  margin-bottom: 16px;
  justify-content: center;

  @media only screen and (max-width: 992px) {
    width: 270px;
  }
`

const LoginForm = styled(CForm)`
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

const Login = () => {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({
    code: null,
    message: null,
  })
  const [form, setForm] = useState({
    email: '',
    password: '',
    keep: false,
  })
  const history = useHistory()
  const { signIn, user } = useAuth()

  useEffect(() => {
    if (user) {
      history.push('/dashboard')
    }
  }, [])

  const handleSignin = async (e) => {
    e.preventDefault()
    setLoading(true)
    const resp = await signIn(form.email, form.password, form.keep)
    history.push('/dashboard')

    if (resp.email === '' || resp.password === '') {
      setMessage({
        code: 500,
        message: 'Signed in Failure',
      })
    } else {
      setMessage({
        code: 200,
        message: 'Signed in Successfully! Please wait for redirection...',
      })
    }
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
      <LoginForm onSubmit={handleSignin}>
        <div className="text-center" style={{ fontSize: '14px' }}>
          {
            <p className={`${message?.code === 200 ? 'text-primary' : 'text-danger'}`}>
              {message.message}
            </p>
          }
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
          <CFormInput
            type="password"
            id="password"
            placeholder="Password"
            size="sm"
            value={form?.password}
            onChange={(e) => {
              setForm({ ...form, password: e.target.value })
            }}
          />
        </div>
        <div className="mb-3" style={{ fontSize: '14px' }}>
          <CFormCheck
            id="check"
            label="Keep me signed in"
            onChange={(e) => {
              setForm({ ...form, keep: e.target.checked })
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
            SIGN IN
          </CustomButton>
        </div>
        <div className="text-center">
          <ATag target="__blank" href="/forgot-password" flag>
            Forgot Password?
          </ATag>
        </div>
      </LoginForm>

      <div className="w-100 text-center py-4">
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

export default Login
