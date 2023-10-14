import React from 'react'
import { CButton, CSpinner } from '@coreui/react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const colorMapping = {
  primary: {
    background: '#1A428A',
    border: '#1A428A',
    text: '#fff',
    spinner: '#fff',
  },
  secondary: {
    background: '#fff',
    border: '#D9D9D9',
    text: '#817F7F',
    spinner: '#817F7F',
  },
  link: {
    background: 'transparent',
    border: 'transparent',
    text: '#0666AB',
    spinner: '#0666AB',
  },
  main: {
    background: 'transparent',
    border: 'transparent',
    text: '#0666AB',
    spinner: '#0666AB',
  },
  light: {
    background: 'transparent',
    border: '#0666AB',
    text: '#0666AB',
    spinner: '#0666AB',
  },
}

const CustomButtonStyled = styled(CButton)`
  color: ${(props) => (props.color ? colorMapping[props.color]['text'] : '#fff')};
  background: ${(props) => (props.color ? colorMapping[props.color]['background'] : '#2b5a92')};
  border: 1px solid ${(props) => (props.color ? colorMapping[props.color]['border'] : '#2b5a92')};
`

const CustomButton = ({
  children,
  color = 'primary',
  disabled = false,
  loading = false,
  ...props
}) => {
  return (
    <CustomButtonStyled
      color={color}
      // size="sm"
      disabled={loading || disabled}
      {...props}
    >
      <>
        {loading ? (
          <CSpinner size="sm" style={{ color: colorMapping[color]['spinner'] || '#2b5a92' }} />
        ) : (
          <span style={{ fontSize: '14px' }}>{children}</span>
        )}
      </>

    </CustomButtonStyled>
  )
}

CustomButton.propTypes = {
  color: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.element,
}

export default CustomButton
