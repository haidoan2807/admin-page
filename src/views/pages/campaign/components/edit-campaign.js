import React, { useState } from 'react'
import {
  CCol,
  CFormCheck,
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
import CustomButton from '../../../../components/custombutton'
import makeAnimated from 'react-select/animated'
import CustomSelectInput from 'src/components/customselectinput'

const animatedComponents = makeAnimated()

const EditCampaign = (props) => {
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
      label: 'Vietnam',
    },
    {
      value: 1,
      label: 'Thailand',
    },
  ])
  const [form, setForm] = useState({
    campaign_name: 'HUPER',
    campaign_type: '10% discount',
    start_date: 'Feb 01 2022',
    end_date: 'Jan 07 2023',
  })

  return (
    <CModal visible={visible} onClose={() => setVisible(false)} size="lg">
      <CModalHeader onClose={() => setVisible(false)}>
        <CModalTitle style={{ color: '#000000', fontSize: '18px' }}>Edit Campaign</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CFormLabel style={{ color: '#000000' }}>Required Information</CFormLabel>
        <CRow>
          <CCol md={6}>
            <CFormLabel>Campaign Name</CFormLabel>
            <CInputGroup className="mb-3">
              <CFormInput
                type="text"
                id="campaign-name"
                placeholder="Campaign Name"
                onChange={() => {}}
                value={form.campaign_name}
              />
            </CInputGroup>

            <CFormLabel>Campaign Type</CFormLabel>
            <div style={{ marginBottom: '15px' }}>
              <CustomSelectInput
                InputcloseMenuOnSelect={true}
                components={animatedComponents}
                options={options}
                placeholder="Campaign Type"
                defaultValue={options[0]}
              />
            </div>

            <CRow className="mb-3">
              <CCol md={6}>
                <CFormLabel>Start Date</CFormLabel>
                <CInputGroup>
                  <CFormInput
                    type="date"
                    id="start-date"
                    onChange={() => {}}
                    value={form.start_date}
                  />
                </CInputGroup>
              </CCol>
              <CCol md={6}>
                <CFormLabel>End Date</CFormLabel>
                <CInputGroup>
                  <CFormInput type="date" id="end-date" onChange={() => {}} value={form.end_date} />
                </CInputGroup>
              </CCol>
            </CRow>

            <div className="d-flex flex-row mb-3">
              <CFormCheck
                type="radio"
                name="checkRadio"
                id="checkActive"
                label="Active"
                defaultChecked
                className="me-5"
                onChange={() => {}}
              />
              <CFormCheck
                type="radio"
                name="checkRadio"
                id="checkInactive"
                label="Inactive"
                onChange={() => {}}
              />
            </div>
            <CFormCheck
              id="enable"
              className="mb-3"
              label="Enable change campaign status manually"
              onChange={() => {}}
            />
          </CCol>

          <CCol md={6}>
            <CFormLabel className="mb-0">Notes</CFormLabel>
            <p className="fst-italic">
              You can add some notes for your campaign to retain a history of the details or special
              requirements.
            </p>
            <CInputGroup className="mb-3">
              <CFormTextarea id="note" rows="7" onChange={() => {}}></CFormTextarea>
            </CInputGroup>
          </CCol>
        </CRow>

        <CRow>
          <CCol md={12}>
            <span className="fw-bold">Tip:</span>
            <br />
            <span>
              If you check &apos;Enable change campaign status manually&apos;, you must change the
              status of the
              <br /> campaign manually.
            </span>
            <br />
            <span>
              If you do not check, the system shall change the status of the campaign automatically
            </span>
            <br />
            <span>(base on the campaign&apos;s start date and end date)</span>
          </CCol>
        </CRow>
      </CModalBody>
      <CModalFooter>
        <CustomButton color="secondary" onClick={() => setVisible(false)}>
          Close
        </CustomButton>
        <CustomButton color="primary">Create</CustomButton>
      </CModalFooter>
    </CModal>
  )
}

export default EditCampaign
