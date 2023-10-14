import React, { useState } from 'react'
import {
  CCol,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
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

const animatedComponents = makeAnimated()

const ViewOrEditSaleValue = (props) => {
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
  const { show, isViewed } = { ...props }
  const [visible, setVisible] = useState(show)
  const [options, setOptions] = useState([
    {
      value: 0,
      label: 'Vietnam',
    },
    {
      value: 1,
      label: 'Thailand',
    },
  ])
  const className = isViewed ? '' : 'required';
  return (
    <CModal visible={visible} onClose={() => setVisible(false)} size="lg">
      <CModalHeader onClose={() => setVisible(false)}>
        <CModalTitle style={{ color: '#000000', fontSize: '18px' }}>
          {isViewed ? 'Sales Value' : ' Edit Sales Value'}
        </CModalTitle>
      </CModalHeader>
      <CModalBody>
        {
          !isViewed ? (
            <CFormLabel style={{ color: '#000000' }}><span style={{color:'red'}}>*</span> Required Information</CFormLabel>
          ) : null
        }
        <CRow>
          <CCol md={6}>
            <CFormLabel>Campaign Name</CFormLabel>
            <div className="mb-3">
              <CustomSelectInput
              className='disable-select'
                InputcloseMenuOnSelect={true}
                components={animatedComponents}
                // defaultValue={options}
                options={options}
                isDisabled
                placeholder="Campaign Name"
              />
            </div>

            <CFormLabel className={className}>Campaign Type</CFormLabel>
            <div className="mb-3">
              <CustomSelectInput
                            className='disable-select'
                InputcloseMenuOnSelect={true}
                components={animatedComponents}
                // defaultValue={options}
                isDisabled
                options={options}
                placeholder="Campaign Type"
              />
            </div>

            <CFormLabel className={className}>Number of customers</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput
                type="number"
                id="number"
                min="0"
                onChange={() => { }}
                disabled={isViewed}
                placeholder="Number of customers"
              />
            </CInputGroup>
          </CCol>

          <CCol md={6}>
            <CFormLabel className={className}>Sales Date</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput type="date" id="sale-date"
                disabled={isViewed}
                onChange={() => { }} placeholder="Sales date" />
            </CInputGroup>
            <CFormLabel className={className}>Sales Value</CFormLabel>
            <CInputGroup className="mb-3">
              <CInputGroupText>$</CInputGroupText>
              <CFormInput
                type="number"
                min="0"
                id="sale-date"
                onChange={() => { }}
                disabled={isViewed}
                placeholder="Sales value"
              />
            </CInputGroup>
            <CFormLabel>Notes</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormTextarea
                id="note"
                rows="1"
                disabled={isViewed}
                onChange={() => { }}
                placeholder="Notes"
              ></CFormTextarea>
            </CInputGroup>
          </CCol>
        </CRow>
      </CModalBody>
      <CModalFooter>
        <CustomButton color="secondary" onClick={() => setVisible(false)}>
          Cancel
        </CustomButton>
        {
          !isViewed ? (
            <>
              <CustomButton color="light">Update & Continue</CustomButton>
              <CustomButton color="primary">Update & Close</CustomButton>
            </>
          ) : null
        }
      </CModalFooter>
    </CModal>
  )
}

export default ViewOrEditSaleValue
