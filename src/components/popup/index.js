import React, { useState } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import CustomButton from '../custombutton'

export default function ConfirmDialog(props) {
  return new Promise((resolve) => {
    let el = document.createElement('div')

    const handleResolve = (result) => {
      unmountComponentAtNode(el)
      el = null
      resolve(result)
    }

    render(<ActionDialog {...props} onExit={handleResolve} />, el)
  })
}

const ActionDialog = (props) => {
  const { message, show, title, confirmText } = { ...props }
  const [visible, setVisible] = useState(show)

  return (
    <>
      <CModal
        visible={visible}
        onClose={() => setVisible(false)}
        className="d-flex justify-content-center"
        size="lg"
      >
        {title && (
          <CModalHeader onClose={() => setVisible(false)}>
            <CModalTitle style={{ color: '#000000', fontSize: '18px' }}>{title}</CModalTitle>
          </CModalHeader>
        )}

        <CModalBody className="d-flex flex-row align-items-center" style={{ fontSize: '14px' }}>
          <i className="far fa-question-circle fa-lg me-2" style={{ color: '#fd7e14' }}></i>
          {message}
        </CModalBody>

        {title ? (
          <CModalFooter>
            <CustomButton
              color="secondary"
              onClick={() => setVisible(false)}
              style={{ marginRight: '10px' }}
            >
              Cancel
            </CustomButton>
            <CustomButton color="primary">{confirmText}</CustomButton>
          </CModalFooter>
        ) : (
          <div className="d-flex flex-row-reverse pb-2 pe-3 mt-2">
            <CustomButton color="primary">OK</CustomButton>
            <CustomButton
              color="secondary"
              onClick={() => setVisible(false)}
              style={{ marginRight: '10px' }}
            >
              Cancel
            </CustomButton>
          </div>
        )}
      </CModal>
    </>
  )
}
