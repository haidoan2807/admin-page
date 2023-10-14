import React, { useState } from 'react'
import { CButton, CFormInput, CFormLabel, CInputGroup } from '@coreui/react'
import CustomButton from 'src/components/custombutton'
import makeAnimated from 'react-select/animated'
import CustomSelectInput from 'src/components/customselectinput'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const animatedComponents = makeAnimated()

const SubscriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 11px;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 13px;

  @media only screen and (max-width: 992px) {
    margin-top: 0px;
    margin-bottom: 10px;
  }
`

const SubscriptionHeader = () => {
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

  return (
    <SubscriptionContainer>
      <InputSection>
        <CFormLabel style={{ fontSize: '14px' }}>Search</CFormLabel>
        <CInputGroup className="mb-3">
          <CFormInput
            type="text"
            placeholder="Search by subscription name"
            style={{ fontSize: '14px' }}
          />
          <CButton type="button" color="secondary" variant="outline" id="search">
            <FontAwesomeIcon icon={faSearch} />
          </CButton>
        </CInputGroup>
      </InputSection>
      <InputSection>
        <CFormLabel style={{ fontSize: '14px' }}>Status</CFormLabel>
        <div className="mb-3">
          <CustomSelectInput
            closeMenuOnSelect={true}
            components={animatedComponents}
            // defaultValue={options}
            isMulti
            options={options}
            placeholder="All Status"
          />
        </div>
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
    </SubscriptionContainer>
  )
}

export default SubscriptionHeader
