import React from 'react'
import Select from 'react-select'

const customStyles = {
  control: (base) => ({
    ...base,
    fontSize: '14px',
  }),
}

const CustomSelectInput = ({ ...props }) => {
  return <Select {...props} styles={customStyles} />
}

export default CustomSelectInput
