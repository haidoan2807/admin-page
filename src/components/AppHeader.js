import React from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { cilBell, cilEnvelopeOpen, cilList, cilMenu, cilPlus, cibWechat } from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import routes from '../routes'
import styled from 'styled-components'
import Logo from '../assets/images/maralytics_Logo_full.svg'

const Title = styled.span`
  display: flex;
  font-weight: 400;
  font-size: 20px;
  padding-left: 8px;
  color: #282828;
`

const AppHeader = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  const currentLocation = useLocation().pathname
  const currentRoute = routes.find((obj, index) => obj.path === currentLocation)

  const showSideBar = () => {
    if (window.innerWidth < 768) {
      dispatch({ type: 'set', sidebarShow: !sidebarShow })
    } else {
      dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })
    }
  }

  return (
    <CHeader position="sticky" className="mb-4" style={{ padding: '0' }}>
      <CContainer
        fluid
        style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', padding: '12px 0.5rem' }}
      >
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <img src={Logo} style={{ height: '40px' }} />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto"></CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <CNavLink href="#/chat">
              <CIcon icon={cibWechat} size="lg" />
            </CNavLink>
          </CNavItem>
          {/* <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem> */}
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      {/* <CHeaderDivider /> */}
      <CContainer
        fluid
        style={{ background: '#fff', justifyContent: 'start' }}
        className="d-flex flex-column align-items-start"
      >
        <div className="d-flex flex-row align-items-center">
          <CHeaderToggler style={{ color: '#595959' }} className="ps-1" onClick={showSideBar}>
            <CIcon icon={cilMenu} size="lg" />
          </CHeaderToggler>
          <AppBreadcrumb />
        </div>
        <div className="d-flex flex-row justify-content-between w-100 pb-3">
          <Title>{currentRoute.name}</Title>
          {currentRoute.extraHeader && <currentRoute.extraHeader />}
        </div>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
