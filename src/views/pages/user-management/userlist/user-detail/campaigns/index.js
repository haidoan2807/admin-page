import React from 'react'
import { CCard, CCardBody, CCardText, CCardTitle } from '@coreui/react'
import { CustomTable } from 'src/components'

const Campaigns = () => {
  const tableData = {
    columns: [
      { name: 'Name', selector: 'name', sortable: true },
      { name: 'Start Date', selector: 'start-date', sortable: true },
      { name: 'End Date', selector: 'end-date', sortable: true },
      {
        name: <div className="text-center">Total Customers</div>,
        selector: 'total-customers',
        sortable: true,
      },
      {
        name: <div className="text-end">Total Sales</div>,
        selector: 'total-sales',
        sortable: true,
      },
      { name: <div className="text-end">Total Cost</div>, selector: 'total-cost', sortable: true },
      {
        name: <div className="text-center">Avg Sales per Customer</div>,
        selector: 'avg-sales-per-customer',
        sortable: true,
      },
      {
        name: <div className="text-center">Profit per Customer</div>,
        selector: 'profit-per-customer',
        sortable: true,
      },
    ],
    data: [
      {
        name: 'Whatapps',
        'start-date': '04-Dec-2020',
        'end-date': '30-Dec-2020',
        'total-customers': <div className="text-end">120</div>,
        'total-sales': <div className="text-end">{`$${143.97}`}</div>,
        'total-cost': <div className="text-end">{`$${50.0}`}</div>,
        'avg-sales-per-customer': <div className="text-end">{`$${10.28}`}</div>,
        'profit-per-customer': <div className="text-end">{`$${6.71}`}</div>,
      },
      {
        name: 'Whatapps',
        'start-date': '04-Dec-2020',
        'end-date': '30-Dec-2020',
        'total-customers': <div className="text-end">120</div>,
        'total-sales': <div className="text-end">{`$${143.97}`}</div>,
        'total-cost': <div className="text-end">{`$${50.0}`}</div>,
        'avg-sales-per-customer': <div className="text-end">{`$${10.28}`}</div>,
        'profit-per-customer': <div className="text-end">{`$${6.71}`}</div>,
      },
      {
        name: 'Whatapps',
        'start-date': '04-Dec-2020',
        'end-date': '30-Dec-2020',
        'total-customers': <div className="text-end">120</div>,
        'total-sales': <div className="text-end">{`$${143.97}`}</div>,
        'total-cost': <div className="text-end">{`$${50.0}`}</div>,
        'avg-sales-per-customer': <div className="text-end">{`$${10.28}`}</div>,
        'profit-per-customer': <div className="text-end">{`$${6.71}`}</div>,
      },
    ],
  }

  return (
    <>
      <div className="mt-2">
        <CCard className="d-flex flex-row">
          <CCardBody className="d-flex flex-column align-items-center">
            <CCardTitle style={{ color: '#03365C', fontSize: '18px' }}>10,647</CCardTitle>
            <CCardText className="d-flex" style={{ color: '#03365C', fontSize: '13px' }}>
              TOTAL CAMPAIGNS
            </CCardText>
          </CCardBody>
          <CCardBody className="d-flex flex-column align-items-center">
            <CCardTitle style={{ color: '#03365C', fontSize: '18px' }}>105</CCardTitle>
            <CCardText className="d-flex" style={{ color: '#03365C', fontSize: '13px' }}>
              ACTIVE CAMPAIGNS
            </CCardText>
          </CCardBody>
          <CCardBody className="d-flex flex-column align-items-center">
            <CCardTitle style={{ color: '#03365C', fontSize: '18px' }}>$ 10,647.57</CCardTitle>
            <CCardText className="d-flex" style={{ color: '#03365C', fontSize: '13px' }}>
              TOTAL SALES
            </CCardText>
          </CCardBody>
          <CCardBody className="d-flex flex-column align-items-center">
            <CCardTitle style={{ color: '#03365C', fontSize: '18px' }}>10,647</CCardTitle>
            <CCardText className="d-flex" style={{ color: '#03365C', fontSize: '13px' }}>
              TOTAL CUSTOMERS
            </CCardText>
          </CCardBody>
          <CCardBody className="d-flex flex-column align-items-center">
            <CCardTitle style={{ color: '#CC0D0D', fontSize: '18px' }}>$ 1,647.57</CCardTitle>
            <CCardText className="d-flex" style={{ color: '#CC0D0D', fontSize: '13px' }}>
              TOTAL COST
            </CCardText>
          </CCardBody>
        </CCard>
      </div>

      <div className="mt-2">
        <CustomTable data={tableData.data} columns={tableData.columns} />
      </div>
    </>
  )
}

export default Campaigns
