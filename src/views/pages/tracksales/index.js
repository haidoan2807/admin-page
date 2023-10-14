import React, { useState } from 'react'
import {
  CNav,
  CNavItem,
  CNavLink,
} from '@coreui/react'
import makeAnimated from 'react-select/animated'
import styled, { css } from 'styled-components'
import TrackSalesList from './track-sale-list'
import ImportHistory from './import-history'
import './style.css'
import CreateNewSales from '../campaign/components/add-sales-value'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDollarToSlot, faPlus } from '@fortawesome/free-solid-svg-icons'
import CustomButton from 'src/components/custombutton'

const animatedComponents = makeAnimated()

const CustomNav = styled(CNav)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: 576px) {
    flex-direction: column;
  }
`

const AutoButton = styled.div`
  margin-right: 16px;

  @media only screen and (max-width: 576px) {
    margin: 16px 0px 16px 16px;
  }
`

const FormInputSummary = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 11px;
  margin: 4px 0 12px 0;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    align-items: start;
  }
`

const FormDate = styled.div`
  display: flex;
  flex-direction: row;
  gap: 11px;
  align-items: center;
  ${(props) =>
    props.user &&
    css`
      width: 100%;
    `}

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`

const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 11px;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 4px 0 12px 0;

  @media only screen and (max-width: 1420px) {
    flex-direction: column;
    align-items: start;
  }
`

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media only screen and (max-width: 1420px) {
    margin-bottom: 10px;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 25px;

  @media only screen and (max-width: 1420px) {
    margin-top: 5px;
  }
`

const UserManagement = () => {
  const [activeTab, setActiveTab] = useState('track-sales-list')
  console.log('UserManagement');
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  return (
    <>
      <div className="d-flex flex-column bg-white mb-2">
        <CustomNav variant="tabs" role="tablist" className="border-secondary my-2">
          <div className="d-flex flex-row align-items-center">
            <CNavItem>
              <CNavLink
                active={activeTab === 'track-sales-list'}
                style={{ cursor: 'pointer' }}
                onClick={() => toggle('track-sales-list')}
                className={`border-0 ${activeTab === 'track-sales-list'
                  ? 'text-primary border-bottom border-primary'
                  : 'text-dark border-bottom border-secondary'
                  }`}
              >
                Track Sale List
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink
                active={activeTab === 'import-history'}
                style={{ cursor: 'pointer' }}
                onClick={() => toggle('import-history')}
                className={`border-0 ${activeTab === 'import-history'
                  ? 'text-primary border-bottom border-primary'
                  : 'text-dark border-bottom border-secondary'
                  }`}
              >
                Import History
              </CNavLink>
            </CNavItem>
          </div>
          <ButtonGroup className='add-new-track-sale'>
            <CustomButton
              color="primary"
              className="py-1"
              onClick={() => CreateNewSales({ show: true })}
            >
              <FontAwesomeIcon icon={faCircleDollarToSlot} className="me-1" />
              Add sale value
            </CustomButton>
          </ButtonGroup>
        </CustomNav>
        {activeTab === 'track-sales-list' ? <TrackSalesList /> : <ImportHistory />}


      </div>

    </>
  )
}

export default UserManagement
