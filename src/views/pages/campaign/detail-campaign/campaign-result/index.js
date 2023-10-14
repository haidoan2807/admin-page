import React from 'react'
import { CustomTable } from 'src/components'
import { CCol, CRow, CFormLabel } from '@coreui/react'
import styled from 'styled-components'

const SummaryList = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 2px solid ${'#2B5A92'};
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 600;
  margin: 20px 0;
  color: ${(props) => (props.danger ? '#DC3545' : '#2B5A92')};
`

const CampaignResult = () => {
  const tableData = {
    columns: [
      {
        name: 'Date',
        selector: 'date',
        sortable: true,
      },
      {
        name: 'Customers',
        selector: 'customers',
        sortable: true,
      },
      {
        name: 'Total Sales',
        selector: 'totalSales',
        sortable: true,
      },
      {
        name: 'Average Spend',
        selector: 'averageSpend',
        sortable: true,
      },
      {
        name: 'Cost of Campaign',
        selector: 'costOfCampaign',
        sortable: true,
      },
      {
        name: 'Cost per customer',
        selector: 'costPerCustomer',
        sortable: true,
      },
      {
        name: 'Profit per customer',
        selector: 'profitPerCustomer',
        sortable: true,
      },
    ],
    data: [
      {
        date: 'Mar 19 2022',
        customers: 2,
        totalSales: '$4.5',
        averageSpend: '$2.25',
        costOfCampaign: '$0.00',
        costPerCustomer: '$0.00',
        profitPerCustomer: '$2.25',
      },
      {
        date: 'Mar 19 2022',
        customers: 2,
        totalSales: '$4.5',
        averageSpend: '$2.25',
        costOfCampaign: '$0.00',
        costPerCustomer: '$0.00',
        profitPerCustomer: '$2.25',
      },
    ],
  }

  return (
    <div className="d-flex flex-column w-100">
      <SummaryList className="container my-3">
        <CRow>
          <CCol md={2}>
            <Card>
              <CFormLabel>TOTAL SALES</CFormLabel>
              <p>$44.55</p>
            </Card>
            <Card danger>
              <CFormLabel>TOTAL COST</CFormLabel>
              <p>$100.00</p>
            </Card>
          </CCol>
          <CCol md={2}>
            <Card>
              <CFormLabel>PROFIT</CFormLabel>
              <p>-$55.45</p>
            </Card>
            <Card>
              <CFormLabel>% ROI</CFormLabel>
              <p>-$55.45</p>
            </Card>
          </CCol>
          <CCol md={4}>
            <Card>
              <CFormLabel>TOTAL CUSTOMERS</CFormLabel>
              <p>8</p>
            </Card>
            <Card danger>
              <CFormLabel>AVERAGE COST per CUSTOMER</CFormLabel>
              <p>$12.50</p>
            </Card>
          </CCol>
          <CCol md={4}>
            <Card>
              <CFormLabel>AVERAGE PROFIT per CUSTOMER</CFormLabel>
              <p>-$6.93</p>
            </Card>
            <Card>
              <CFormLabel>AVERAGE SPEND per CUSTOMER</CFormLabel>
              <p>$5.57</p>
            </Card>
          </CCol>
        </CRow>
      </SummaryList>

      <p className="fw-bold mb-0" style={{ paddingLeft: '12px' }}>
        Campaign Result Details
      </p>
      <CustomTable data={tableData.data} columns={tableData.columns} />
    </div>
  )
}

export default CampaignResult
