import React, { useState } from 'react'
import { CNav, CNavItem, CNavLink } from '@coreui/react'
import CustomButton from 'src/components/custombutton'
import styled from 'styled-components'
import POSList from './poslist'
import Transaction from './transaction'
import CreatePOS from './components/create-pos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const CustomNav = styled(CNav)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: 576px) {
    flex-direction: column;
  }
`

const ButtonGroup = styled.div`
  margin-right: 16px;

  @media only screen and (max-width: 576px) {
    margin: 16px 0px 16px 16px;
  }
`

const POSManagement = () => {
  const [activeTab, setActiveTab] = useState('poslist')

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
                active={activeTab === 'poslist'}
                style={{ cursor: 'pointer' }}
                onClick={() => toggle('poslist')}
                className={`border-0 ${
                  activeTab === 'poslist'
                    ? 'text-primary border-bottom border-primary'
                    : 'text-dark border-bottom border-secondary'
                }`}
              >
                POS List
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink
                active={activeTab === 'transaction'}
                style={{ cursor: 'pointer' }}
                onClick={() => toggle('transaction')}
                className={`border-0 ${
                  activeTab === 'transaction'
                    ? 'text-primary border-bottom border-primary'
                    : 'text-dark border-bottom border-secondary'
                }`}
              >
                Track Transaction
              </CNavLink>
            </CNavItem>
          </div>
          <ButtonGroup>
            <CustomButton
              color="primary"
              className="py-1"
              onClick={() => CreatePOS({ show: true })}
            >
              <FontAwesomeIcon icon={faPlus} className="me-1" />
              Create POS
            </CustomButton>
          </ButtonGroup>
        </CustomNav>

        {activeTab === 'poslist' ? <POSList /> : <Transaction />}
      </div>
    </>
  )
}

export default POSManagement
