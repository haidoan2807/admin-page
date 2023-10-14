import { CFormInput, CInputGroup } from '@coreui/react'
import React from 'react'
import styled, { css } from 'styled-components'

const FormInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.user &&
    css`
      width: 100%;
    `}

  @media only screen and (max-width: 576px) {
    flex-direction: column;
  }
`

const FormDateInput = ({ ...props }) => {
  return (
    <FormInputContainer {...props}>
      <CInputGroup>
        <CFormInput type="date" id="start-date" onChange={() => {}} />
      </CInputGroup>
      <span className="mx-2" style={{ fontSize: '14px', color: '#CAC2C2' }}>
        to
      </span>
      <CInputGroup>
        <CFormInput type="date" id="end-date" onChange={() => {}} />
      </CInputGroup>
    </FormInputContainer>
  )
}

export default FormDateInput
