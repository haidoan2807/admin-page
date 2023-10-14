import React, { useState, useEffect } from 'react'
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

const CreateNewCost = (props) => {
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
  const { show, callback } = { ...props }
  const [visible, setVisible] = useState(show)
  const [addNew, setAddNew] = useState(false)
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

  useEffect(() => {
    if (!visible) {
      setAddNew(true)
    }
  }, [visible])

  return (
    <>
      <CModal visible={addNew} onClose={() => setAddNew(false)}>
        <CModalHeader onClose={() => setAddNew(false)}>
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
          <CustomButton color="secondary" onClick={() => setAddNew(false)}>
            Cancel
          </CustomButton>
          <CustomButton color="primary">Create</CustomButton>
        </CModalFooter>
      </CModal>

      <CModal visible={visible} onClose={() => setVisible(false)} size="lg">
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle style={{ color: '#000000', fontSize: '18px' }}>Add New Cost</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormLabel style={{ color: '#000000' }}>Required Information</CFormLabel>
          <CRow>
            <CCol md={6}>
              <CFormLabel>Campaign Name</CFormLabel>
              <div className="mb-3">
                <CustomSelectInput
                  InputcloseMenuOnSelect={true}
                  components={animatedComponents}
                  // defaultValue={options}
                  options={options}
                  placeholder="Campaign Name"
                />
              </div>
              <CRow>
                <CCol md={6}>
                  <CFormLabel>Start Date</CFormLabel>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      type="date"
                      id="start-date"
                      onChange={() => {}}
                      placeholder="Start date"
                    />
                  </CInputGroup>
                </CCol>
                <CCol md={6}>
                  <CFormLabel>End Date</CFormLabel>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      type="date"
                      id="end-date"
                      onChange={() => {}}
                      placeholder="End date"
                    />
                  </CInputGroup>
                </CCol>
              </CRow>
            </CCol>

            <CCol md={6}>
              <CFormLabel>Cost Type</CFormLabel>
              <div className="mb-3">
                <CustomSelectInput
                  InputcloseMenuOnSelect={true}
                  components={animatedComponents}
                  // defaultValue={options}
                  options={options}
                  placeholder="Select cost type"
                />
              </div>
              <CFormLabel>Cost Value</CFormLabel>
              <CInputGroup className="mb-3">
                <CInputGroupText>$</CInputGroupText>
                <CFormInput
                  type="number"
                  min="0"
                  id="cost-value"
                  onChange={() => {}}
                  placeholder="Cost value"
                />
              </CInputGroup>
            </CCol>
          </CRow>
          <CRow>
            <CCol md={12}>
              <CFormLabel>Notes</CFormLabel>
              <CInputGroup className="mb-3">
                <CFormTextarea id="note" rows="4" onChange={() => {}}></CFormTextarea>
              </CInputGroup>
            </CCol>
          </CRow>
        </CModalBody>
        <CModalFooter>
          <CustomButton color="secondary" onClick={() => setVisible(false)}>
            Skip
          </CustomButton>
          <CustomButton color="light">Add & Continue</CustomButton>
          <CustomButton color="primary">Add & Close</CustomButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default CreateNewCost
