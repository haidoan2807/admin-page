import React, { useState } from 'react'
import {
  CFormLabel,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from '@coreui/react'
import { render, unmountComponentAtNode } from 'react-dom'
import CustomButton from 'src/components/custombutton'
import CustomSelectInput from 'src/components/customselectinput'
import makeAnimated from 'react-select/animated'

const animatedComponents = makeAnimated()

const CreatePOS = (props) => {
  return new Promise((resolve) => {
    let el = document.createElement('div')

    const handleResolve = (result) => {
      unmountComponentAtNode(el)
      el = null
      resolve(result)
    }

    render(<DialogContent {...props} onExit={handleResolve} />, el)
  })
}

const DialogContent = (props) => {
  const { show } = { ...props }
  const [visible, setVisible] = useState(show)
  const [options, setOptions] = useState([
    {
      value: 0,
      label: 'Vend',
    },
    {
      value: 1,
      label: 'Kounta',
    },
  ])

  return (
    <CModal visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader onClose={() => setVisible(false)}>
        <CModalTitle style={{ color: '#000000', fontSize: '18px' }}>Create New POS</CModalTitle>
      </CModalHeader>
      <CModalBody style={{ fontSize: '14px' }}>
        <CFormLabel>Required Information</CFormLabel>
        <div className="mb-3">
          <CFormLabel>Type of POS</CFormLabel>
          <CustomSelectInput
            closeMenuOnSelect={true}
            components={animatedComponents}
            options={options}
            placeholder="Type of POS"
          />
        </div>

        <div className="mb-3">
          <CFormLabel>Campaign Name</CFormLabel>
          <CustomSelectInput
            closeMenuOnSelect={true}
            components={animatedComponents}
            options={options}
            placeholder="Select campaign name"
          />
        </div>
      </CModalBody>
      <CModalFooter>
        <CustomButton color="secondary" onClick={() => setVisible(false)}>
          Cancel
        </CustomButton>
        <CustomButton color="primary">Create</CustomButton>
      </CModalFooter>
    </CModal>
  )
}

export default CreatePOS
