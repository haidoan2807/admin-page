import React, { useState } from 'react'
import styled from 'styled-components'
import CustomButton from 'src/components/custombutton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollar, faPlug } from '@fortawesome/free-solid-svg-icons'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CButtonGroup,
  CNav,
  CNavItem,
  CNavLink,
} from '@coreui/react'
import Information from './information'
import CampaignResult from './campaign-result'
import CreateNewSales from '../components/add-sales-value'
import CreateNewCost from '../components/add-new-cost'

const CustomNav = styled(CNav)`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media only screen and (max-width: 576px) {
    flex-direction: column;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`

const DetailCampaign = () => {
  const [activeTab, setActiveTab] = useState('information')

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  return (
    <div className="d-flex flex-column w-100 bg-white">
      <div className="d-flex flex-row justify-content-between my-3" style={{ padding: '0 12px' }}>
        <div className="d-flex flex-row align-items-center gap-2">
          <div className="h5">HUPER</div>
          <CBadge color="success">Active</CBadge>
        </div>
        <ButtonGroup>
          <CustomButton color="primary">Update</CustomButton>
          <CustomButton color="primary" onClick={() => CreateNewSales({ show: true })}>
            <FontAwesomeIcon icon={faDollar} /> Add Sales Value
          </CustomButton>
          <CustomButton color="primary" onClick={() => CreateNewCost({ show: true })}>
            <FontAwesomeIcon icon={faDollar} /> Add New Cost
          </CustomButton>
          <CButtonGroup role="group" color="primary">
            <CustomButton color="primary">
              <FontAwesomeIcon icon={faPlug} /> Connect POS
            </CustomButton>
            <CDropdown variant="btn-group">
              <CDropdownToggle style={{ backgroundColor: '#1A428A' }}></CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem onClick={() => {}}>Download now</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CButtonGroup>
        </ButtonGroup>
      </div>

      <CustomNav variant="tabs" role="tablist" className="border-secondary my-2">
        <div className="d-flex flex-row align-items-center">
          <CNavItem>
            <CNavLink
              active={activeTab === 'information'}
              style={{ cursor: 'pointer' }}
              onClick={() => toggle('information')}
              className={`border-0 ${
                activeTab === 'information'
                  ? 'text-primary border-bottom border-primary'
                  : 'text-dark border-bottom border-secondary'
              }`}
            >
              Information
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              active={activeTab === 'campaignResult'}
              style={{ cursor: 'pointer' }}
              onClick={() => toggle('campaignResult')}
              className={`border-0 ${
                activeTab === 'campaignResult'
                  ? 'text-primary border-bottom border-primary'
                  : 'text-dark border-bottom border-secondary'
              }`}
            >
              Campaign Result
            </CNavLink>
          </CNavItem>
        </div>
      </CustomNav>

      {activeTab === 'information' ? <Information /> : <CampaignResult />}
    </div>
  )
}

export default DetailCampaign
