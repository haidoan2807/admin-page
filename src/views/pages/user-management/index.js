import React, { useState } from 'react'
import {
  CButton,
  CContainer,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
} from '@coreui/react'
import CustomButton from 'src/components/custombutton'
import makeAnimated from 'react-select/animated'
import Summary from './summary'
import UserList from './userlist'
import CreateSubscriber from './userlist/components/create-subcriber'
import styled, { css } from 'styled-components'
import CustomSelectInput from 'src/components/customselectinput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons'
import FormDateInput from 'src/components/formdateinput'

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
  margin-top: 30px;

  @media only screen and (max-width: 1420px) {
    margin-top: 5px;
  }
`

const UserManagement = () => {
  const [activeTab, setActiveTab] = useState('summary')
  const [options, setOptions] = useState([
    {
      value: 0,
      label: 'Expire',
    },
    {
      value: 1,
      label: 'Active',
    },
  ])

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
                active={activeTab === 'summary'}
                style={{ cursor: 'pointer' }}
                onClick={() => toggle('summary')}
                className={`border-0 ${
                  activeTab === 'summary'
                    ? 'text-primary border-bottom border-primary'
                    : 'text-dark border-bottom border-secondary'
                }`}
              >
                Summary
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink
                active={activeTab === 'userlist'}
                style={{ cursor: 'pointer' }}
                onClick={() => toggle('userlist')}
                className={`border-0 ${
                  activeTab === 'userlist'
                    ? 'text-primary border-bottom border-primary'
                    : 'text-dark border-bottom border-secondary'
                }`}
              >
                User List
              </CNavLink>
            </CNavItem>
          </div>
          {activeTab === 'userlist' && (
            <AutoButton>
              <CustomButton
                color="primary"
                className="py-1"
                onClick={() => CreateSubscriber({ show: true })}
              >
                <FontAwesomeIcon icon={faPlus} className="me-1" />
                Create subscriber
              </CustomButton>
            </AutoButton>
          )}
        </CustomNav>

        <CContainer fluid>
          <CTabContent style={{ fontSize: '14px' }}>
            <CTabPane role="tabpanel" visible={activeTab === 'summary'}>
              <FormInputSummary>
                <FormDateInput />
                <CustomButton color="primary">Apply</CustomButton>
              </FormInputSummary>
            </CTabPane>

            <CTabPane role="tabpanel" visible={activeTab === 'userlist'}>
              <UserContainer>
                <InputSection>
                  <CFormLabel>Search</CFormLabel>
                  <CInputGroup>
                    <CFormInput
                      aria-label="Subscripton"
                      aria-describedby="search"
                      placeholder="Search by email or name"
                      style={{ fontSize: '14px' }}
                    />
                    <CButton type="button" color="secondary" variant="outline" id="search">
                      <FontAwesomeIcon icon={faSearch} />
                    </CButton>
                  </CInputGroup>
                </InputSection>
                <InputSection>
                  <CFormLabel>Subscription</CFormLabel>
                  <CustomSelectInput
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    isMulti
                    options={options}
                    placeholder="All subscriptions"
                  />
                </InputSection>
                <InputSection>
                  <CFormLabel>Status</CFormLabel>
                  <CustomSelectInput
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    isMulti
                    options={options}
                    placeholder="All Status"
                  />
                </InputSection>
                <InputSection>
                  <CFormLabel>Created date</CFormLabel>
                  <FormDateInput user />
                </InputSection>
                <ButtonGroup>
                  <CustomButton color="primary" onClick={() => {}}>
                    Apply
                  </CustomButton>
                  <CustomButton
                    color="link"
                    style={{ marginLeft: '10px', textDecoration: 'none' }}
                    onClick={() => {}}
                  >
                    Reset
                  </CustomButton>
                </ButtonGroup>
              </UserContainer>
            </CTabPane>
          </CTabContent>
        </CContainer>
      </div>

      {activeTab === 'summary' ? <Summary /> : <UserList />}
    </>
  )
}

export default UserManagement
