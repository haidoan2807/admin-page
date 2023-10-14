import React from 'react'
import { CFormCheck } from '@coreui/react'
import { CustomTable } from 'src/components'

const AccessControlManagement = () => {
  const AccessControlFooter = React.lazy(() => import('./components/footer'))

  const tableData = {
    columns: [
      { name: 'Package', selector: 'package' },
      {
        name: <div className="text-center w-100">Access Dashboard</div>,
        selector: 'access-dashboard',
        render: (col, obj) => (
          <div className="text-center">
            <CFormCheck type="checkbox" checked={obj[col.selector]} onChange={() => {}} />
          </div>
        ),
      },
      {
        name: <div className="text-center w-100">Access Campaign</div>,
        selector: 'access-campaign',
        render: (col, obj) => (
          <div className="text-center">
            <CFormCheck type="checkbox" checked={obj[col.selector]} onChange={() => {}} />
          </div>
        ),
      },
      {
        name: <div className="text-center w-100">Access Track Sales</div>,
        selector: 'access-track-sales',
        render: (col, obj) => (
          <div className="text-center">
            <CFormCheck type="checkbox" checked={obj[col.selector]} onChange={() => {}} />
          </div>
        ),
      },
    ],
    data: [
      {
        id: 1,
        package: 'Covid-19 Special Offers',
        'access-dashboard': true,
        'access-campaign': true,
        'access-track-sales': true,
      },
      {
        id: 2,
        package: 'D.I.Y (Do It Yourself)',
        'access-dashboard': true,
        'access-campaign': true,
        'access-track-sales': true,
      },
      {
        id: 3,
        package: 'Free Trial',
        'access-dashboard': true,
        'access-campaign': true,
        'access-track-sales': true,
      },
      {
        id: 4,
        package: 'Guidance',
        'access-dashboard': true,
        'access-campaign': true,
        'access-track-sales': true,
      },
      {
        id: 5,
        package: 'Integration',
        'access-dashboard': false,
        'access-campaign': false,
        'access-track-sales': false,
      },
      {
        id: 6,
        package: 'Lite Package',
        'access-dashboard': false,
        'access-campaign': false,
        'access-track-sales': false,
      },
      {
        id: 7,
        package: 'Special Testers',
        'access-dashboard': false,
        'access-campaign': false,
        'access-track-sales': false,
      },
    ],
  }

  return (
    <div className="bg-light d-flex flex-row align-items-center">
      <CustomTable
        data={tableData.data}
        columns={tableData.columns}
        Footer={AccessControlFooter}
        pagination={false}
      />
    </div>
  )
}

export default AccessControlManagement
