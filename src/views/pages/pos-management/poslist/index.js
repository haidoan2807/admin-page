import React, { useState } from 'react'
import { CButton, CFormInput, CInputGroup } from '@coreui/react'
import CustomButton from 'src/components/custombutton'
import makeAnimated from 'react-select/animated'
import CustomSelectInput from 'src/components/customselectinput'
import styled from 'styled-components'
import { CustomTable } from 'src/components'
import TrashIcon from 'src/assets/icons/trash.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faSearch } from '@fortawesome/free-solid-svg-icons'
import XIcon from 'src/assets/icons/x.svg'

const animatedComponents = makeAnimated()

const POSContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 11px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  margin: 12px;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media only screen and (max-width: 992px) {
    margin-top: 0px;
  }
`

const POSList = () => {
  const [options, setOptions] = useState([
    {
      value: 0,
      label: 'Expire',
    },
    {
      value: 1,
      label: 'Active',
    },
  ])

  const tableData = {
    columns: [
      {
        name: 'ID',
        selector: 'Id',
        sortable: true,
      },
      {
        name: 'Type',
        selector: 'type',
        sortable: true,
      },
      {
        name: 'Store',
        selector: 'store',
        sortable: true,
      },
      {
        name: 'Campaign ID',
        selector: 'campaign-id',
        sortable: true,
      },
      {
        name: 'Campaign',
        selector: 'campaign',
        sortable: true,
      },
      {
        name: 'Connection Status',
        selector: 'connection-status',
        sortable: true,
        render: (col, obj) => {
          return obj.status ? <div>True</div> : <div>False</div>
        },
      },
      {
        name: <div className="text-center">Status</div>,
        selector: 'status',
        sortable: true,
        render: (col, obj) => {
          return obj.status ? <div>True</div> : <div>False</div>
        },
      },
      {
        name: <div className="text-center w-100">Action</div>,
        selector: 'action',
        render: (col, obj) => {
          return (
            <div className="d-flex flex-row justify-content-center">
              <CustomButton color="main">
                {obj.active ? (
                  <FontAwesomeIcon icon={faCheck} onClick={() => {}} />
                ) : (
                  <img src={XIcon} />
                )}
              </CustomButton>
              <CustomButton color="main">
                <img src={TrashIcon} onClick={() => {}} />
              </CustomButton>
            </div>
          )
        },
      },
    ],
    data: [
      {
        id: 1,
        Id: '499',
        type: 'Xero',
        store: 'HUPER',
        'campaign-id': '629',
        campaign: 'HUPER 2022',
        'connection-status': true,
        status: true,
        active: true,
      },
      {
        id: 2,
        Id: '500',
        type: 'Way',
        store: 'HUPER1',
        'campaign-id': '630',
        campaign: 'HUPER 2023',
        'connection-status': false,
        status: false,
        active: false,
      },
    ],
  }

  return (
    <>
      <POSContainer>
        <CInputGroup>
          <CFormInput type="text" placeholder="Search POS" style={{ fontSize: '14px' }} />
          <CButton type="button" color="secondary" variant="outline" id="search">
            <FontAwesomeIcon icon={faSearch} />
          </CButton>
        </CInputGroup>

        <InputSection>
          <CustomSelectInput
            closeMenuOnSelect={true}
            components={animatedComponents}
            // defaultValue={options}
            options={options}
            placeholder="Select campaign"
          />
        </InputSection>

        <InputSection>
          <CustomSelectInput
            closeMenuOnSelect={true}
            components={animatedComponents}
            // defaultValue={options}
            options={options}
            placeholder="Select status"
          />
        </InputSection>

        <ButtonGroup>
          <CustomButton color="primary" onClick={() => {}}>
            Apply
          </CustomButton>
          <CustomButton
            color="link"
            style={{ marginLeft: '5px', textDecoration: 'none' }}
            onClick={() => {}}
          >
            Reset
          </CustomButton>
        </ButtonGroup>
      </POSContainer>

      <p style={{ color: '#959292', fontSize: '14px', margin: '6px 12px' }}>
        Summary: This list shows the Point-of-Sale connections which have an active status.
      </p>

      {tableData.data.length > 0 ? (
        <CustomTable data={tableData.data} columns={tableData.columns} pagination={false} />
      ) : (
        <p className="text-center my-4">There are no records to display</p>
      )}
    </>
  )
}

export default POSList
