import React from 'react'
import { CFormInput, CInputGroup } from '@coreui/react'
import styled from 'styled-components'
import CustomButton from 'src/components/custombutton'
import { CustomTable } from 'src/components'

const FormDate = styled.div`
  display: flex;
  flex-direction: row;
  gap: 11px;
  align-items: center;
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media only screen and (max-width: 768px) {
    margin-top: 0px;
    margin-bottom: 10px;
  }
`

const FormInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  margin: 12px;
  width: 100%;
  gap: 11px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: start;
  }
`

const Transaction = () => {
  const tableData = {
    columns: [
      {
        name: 'ID',
        selector: 'Id',
        sortable: true,
      },
      {
        name: 'POS ID',
        selector: 'pos-id',
        sortable: true,
      },
      {
        name: 'Campain ID',
        selector: 'campain-id',
        sortable: true,
      },
      {
        name: 'Campain Name',
        selector: 'campain-name',
        sortable: true,
      },
      {
        name: 'Transaction ID',
        selector: 'transaction-id',
        sortable: true,
      },
      {
        name: 'Status',
        selector: 'status',
        sortable: true,
      },
      {
        name: 'Created Date',
        selector: 'created-date',
        sortable: true,
      },
    ],
    data: [
      {
        id: 1,
        Id: '22507',
        'pos-id': '499',
        'campain-id':'ABC123',
        'campain-name':'Campaint A',
        'transaction-id':'trans A',
        status: 'Updated',
        'created-date': 'Jan 23, 2022 17:19:19 +0700',
      },
      {
        id: 2,
        Id: '22505',
        'pos-id': '499',
        'campain-id':'ABC123',
        'campain-name':'Campaint A',
        'transaction-id':'trans A',
        status: 'track sale created',
        'created-date': 'Jan 24, 2022 17:19:19 +0700',
      },
    ],
  }

  return (
    <>
      <FormInput>
        <FormDate>
          <span className="text-nowrap" style={{ fontSize: '14px' }}>
            Created Date
          </span>
          <CInputGroup>
            <CFormInput type="date" id="created-date" onChange={() => {}} />
          </CInputGroup>
        </FormDate>
        <ButtonGroup>
          <CustomButton color="primary">Apply</CustomButton>
          <CustomButton
            color="link"
            style={{ marginLeft: '5px', textDecoration: 'none' }}
            onClick={() => {}}
          >
            Reset
          </CustomButton>
        </ButtonGroup>
      </FormInput>

      {tableData.data.length > 0 ? (
        <CustomTable data={tableData.data} columns={tableData.columns} pagination={false} />
      ) : (
        <p className="text-center my-4">There are no records to display</p>
      )}
    </>
  )
}

export default Transaction
