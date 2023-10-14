import React, { useState } from 'react'
import {
  CAvatar,
  CBadge,
  CContainer,
  CFormInput,
  CInputGroup,
  CNav,
  CNavItem,
  CNavLink,
} from '@coreui/react'
import UserLogs from './userlogs/index'
import Campaigns from './campaigns/index'
import { useLocation } from 'react-router-dom'

const DetailUser = () => {
  const location = useLocation()
  const getDetailUser = () => {
    if (location.state) {
      const { user } = location.state
      localStorage.setItem('detail-user', JSON.stringify(user))
      return user
    } else {
      const existingUser = JSON.parse(localStorage.getItem('detail-user'))
      return existingUser
    }
  }
  const user = getDetailUser()

  const [activeTab, setActiveTab] = useState('userlogs')

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  return (
    <>
      <div className="d-flex flex-column bg-white">
        <CContainer fluid className="mt-3">
          <div className="d-flex flex-row align-items-center">
            <CAvatar
              src="https://www.pinclipart.com/picdir/middle/148-1486972_mystery-man-avatar-circle-clipart.png"
              size="xl"
              className="me-3"
            />
            <div className="d-flex flex-column w-100">
              <div className="d-flex w-100 flex-row justify-content-between">
                <span>{user.email}</span>
                <span className="fw-bold">INTEGRATION</span>
              </div>
              <div className="d-flex w-100 flex-row justify-content-between">
                <div>
                  <CBadge color="success">Success</CBadge>
                </div>
                <span className="fw-bold" style={{ color: '#FE1717' }}>
                  Expired
                </span>
              </div>
            </div>
          </div>

          <div className="d-flex flex-row justify-content-between" style={{ fontSize: '14px' }}>
            <div className="d-flex flex-column">
              <CInputGroup className="my-3 d-flex flex-row align-items-center" size="sm">
                <span className="me-3">First Name</span>
                <CFormInput type="text" id="firstname" value={user.firstName} />
              </CInputGroup>
              <CInputGroup className="mb-3 d-flex flex-row align-items-center" size="sm">
                <span className="me-3">Last Name</span>
                <CFormInput type="text" id="lastname" value={user.lastName} />
              </CInputGroup>
            </div>
            <div className="d-flex flex-column">
              <CInputGroup className="my-3 d-flex flex-row align-items-center" size="sm">
                <span className="me-3">Bussiness Name</span>
                <CFormInput type="text" id="bussinessname" value={user.bussinessName} />
              </CInputGroup>
              <CInputGroup className="mb-3 d-flex flex-row align-items-center" size="sm">
                <span className="me-3">Bussiness Name</span>
                <CFormInput type="text" id="bussinesswebsite" value={user.bussinessWebsite} />
              </CInputGroup>
            </div>
          </div>
        </CContainer>
      </div>

      <div className="d-flex flex-column bg-white">
        <CNav
          variant="tabs"
          role="tablist"
          className="w-100 justify-content-between border-secondary my-2"
        >
          <div className="d-flex flex-row align-items-center">
            <CNavItem>
              <CNavLink
                active={activeTab === 'userlogs'}
                style={{ cursor: 'pointer' }}
                onClick={() => toggle('userlogs')}
                className={`border-0 ${
                  activeTab === 'userlogs'
                    ? 'text-primary border-bottom border-primary'
                    : 'text-dark border-bottom border-secondary'
                }`}
              >
                User Logs
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink
                active={activeTab === 'campaigns'}
                style={{ cursor: 'pointer' }}
                onClick={() => toggle('campaigns')}
                className={`border-0 ${
                  activeTab === 'campaigns'
                    ? 'text-primary border-bottom border-primary'
                    : 'text-dark border-bottom border-secondary'
                }`}
              >
                Campaigns
              </CNavLink>
            </CNavItem>
          </div>
        </CNav>
      </div>
      <div className="d-flex flex-column">
        {activeTab === 'userlogs' ? <UserLogs /> : <Campaigns />}
      </div>
    </>
  )
}

export default DetailUser
