import React, { useState } from 'react'
import {
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CInputGroup,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from '@coreui/react'
import { render, unmountComponentAtNode } from 'react-dom'
import CustomButton from 'src/components/custombutton'

const AddNote = (props) => {
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

  return (
    <CModal visible={visible} onClose={() => setVisible(false)} size="md">
      <CModalHeader onClose={() => setVisible(false)}>
        <CModalTitle style={{ color: '#000000', fontSize: '18px' }}>Add Note</CModalTitle>
      </CModalHeader>
      <CModalBody style={{ fontSize: '14px' }}>
        <CFormLabel style={{ color: '#000000' }}>Required Information</CFormLabel>
        <CRow>
          <CFormLabel>Subject</CFormLabel>
          <CInputGroup className="mb-3" size="sm">
            <CFormInput type="text" id="subject" placeholder="Enter subject" onChange={() => {}} />
          </CInputGroup>
        </CRow>
        <CRow>
          <CFormLabel>Content</CFormLabel>
          <CInputGroup className="mb-3" size="sm">
            <CFormTextarea
              type="text"
              id="content"
              placeholder="Enter content"
              onChange={() => {}}
            />
          </CInputGroup>
        </CRow>
      </CModalBody>
      <CModalFooter>
        <CustomButton color="secondary" onClick={() => setVisible(false)}>
          Close
        </CustomButton>
        <CustomButton color="primary">Add</CustomButton>
      </CModalFooter>
    </CModal>
  )
}

export default AddNote
