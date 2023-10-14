import React, { useState } from 'react'
import {
  CCol,
  CFormCheck,
  CFormLabel,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from '@coreui/react'
import { render, unmountComponentAtNode } from 'react-dom'
import CustomButton from '../../../../components/custombutton'
import makeAnimated from 'react-select/animated'
import CustomSelectInput from 'src/components/customselectinput'
import FormDateInput from 'src/components/formdateinput'

const animatedComponents = makeAnimated()

const Scheduler = (props) => {
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
      label: 'Package 1',
    },
    {
      value: 1,
      label: 'Package 2',
    },
  ])

  return (
    <CModal visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader onClose={() => setVisible(false)}>
        <CModalTitle style={{ color: '#000000', fontSize: '18px' }}>
          Setting Schedule for Special Package
        </CModalTitle>
      </CModalHeader>
      <CModalBody style={{ fontSize: '14px' }}>
        <CRow>
          <CFormLabel>Special Package</CFormLabel>
          <CustomSelectInput
            closeMenuOnSelect={true}
            components={animatedComponents}
            // defaultValue={options}
            options={options}
            placeholder="Select special package"
            className="mb-3"
          />
        </CRow>
        <CRow>
          <CFormLabel>Schedule Valid</CFormLabel>
          <FormDateInput className="mb-3" />
        </CRow>
        <CRow>
          <CCol>
            <div style={{ fontSize: '14px' }}>
              <CFormCheck id="enable" label="Enable" onClick={() => {}} />
            </div>
          </CCol>
        </CRow>
      </CModalBody>
      <CModalFooter>
        <CustomButton color="secondary" onClick={() => setVisible(false)}>
          Close
        </CustomButton>
        <CustomButton color="primary">Update</CustomButton>
      </CModalFooter>
    </CModal>
  )
}

export default Scheduler
