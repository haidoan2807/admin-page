import React, { useState } from 'react'
import { CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from '@coreui/react'
import { render, unmountComponentAtNode } from 'react-dom'
import { CustomTable } from 'src/components'
import CustomButton from '../../../../components/custombutton'

const Priority = (props) => {
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
  const { show, dataTest } = { ...props }
  const { data, columns } = dataTest
  const [visible, setVisible] = useState(show)

  return (
    <CModal visible={visible} onClose={() => setVisible(false)} size="lg">
      <CModalHeader onClose={() => setVisible(false)}>
        <CModalTitle style={{ color: '#000000', fontSize: '18px' }}>
          Setting Schedule Priority
        </CModalTitle>
      </CModalHeader>
      <CModalBody style={{ fontSize: '14px' }}>
        <CRow>
          <CustomTable data={data} columns={columns} pagination={false} />
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

export default Priority
