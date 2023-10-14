import React from 'react'
import { CustomTable } from 'src/components'
import CIcon from '@coreui/icons-react'
import { cilCheckAlt, cilX } from '@coreui/icons'
import CustomButton from 'src/components/custombutton'
import EditSubscription from 'src/views/pages/subcription-management/components/edit-subscription'
import TrashIcon from 'src/assets/icons/trash.svg'
import EditIcon from 'src/assets/icons/edit.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'

const SubscriptionManagement = () => {
  const SubscriptionHeader = React.lazy(() => import('./components/header'))

  const tableData = {
    columns: [
      {
        name: 'Subscription Name',
        selector: 'subscription-name',
        sortable: true,
      },
      {
        name: 'Monthly Price',
        selector: 'monthly-price',
        sortable: true,
      },
      {
        name: <div className="text-center">Annual Price</div>,
        selector: 'annual-price',
        sortable: true,
      },
      {
        name: <div className="text-center">No. of Campaigns</div>,
        selector: 'campaigns',
        sortable: true,
      },
      {
        name: <div className="text-center">Trial</div>,
        selector: 'trials',
        sortable: true,
        render: (col, obj) => {
          return obj.trials ? (
            <div className="text-center">
              <CustomButton color="main" onClick={() => {}}>
                <CIcon icon={cilCheckAlt} style={{ color: '#1B8512' }} size="lg" />
              </CustomButton>
            </div>
          ) : (
            <div className="text-center">
              <CustomButton color="main" onClick={() => {}}>
                <CIcon icon={cilX} style={{ color: '#FE1717' }} size="lg" />
              </CustomButton>
            </div>
          )
        },
      },
      {
        name: <div className="text-center">Special</div>,
        selector: 'special',
        sortable: true,
        render: (col, obj) => {
          return obj.special ? (
            <div className="text-center">
              <CustomButton color="main" onClick={() => {}}>
                <CIcon icon={cilCheckAlt} style={{ color: '#1B8512' }} size="lg" />
              </CustomButton>
            </div>
          ) : (
            <div className="text-center">
              <CustomButton color="main" onClick={() => {}}>
                <CIcon icon={cilX} style={{ color: '#FE1717' }} size="lg" />
              </CustomButton>
            </div>
          )
        },
      },
      {
        name: <div className="text-center">Status</div>,
        selector: 'status',
        sortable: true,
        render: (col, obj) => {
          return obj.status ? (
            <div className="text-center">Active</div>
          ) : (
            <div className="text-center">Expired</div>
          )
        },
      },
      {
        name: <div className="text-center w-100">Action</div>,
        selector: 'action',
        render: (col) => (
          <div className="d-flex flex-row justify-content-center">
            <CustomButton color="main" onClick={() => {}}>
              <FontAwesomeIcon icon={faBan} size="lg" className="mt-1" />
            </CustomButton>
            <CustomButton
              color="main"
              onClick={() =>
                EditSubscription({
                  show: true,
                })
              }
            >
              <img src={EditIcon} />
            </CustomButton>
            <CustomButton color="main">
              <img src={TrashIcon} onClick={() => {}} />
            </CustomButton>
          </div>
        ),
      },
    ],
    data: [
      {
        id: 1,
        'subscription-name': 'Covid-19 Special Offers',
        'monthly-price': <div className="text-end">$0.50</div>,
        'annual-price': <div className="text-end">$50.00</div>,
        campaigns: 'Unlimited',
        trials: true,
        special: true,
        status: true,
      },
      {
        id: 2,
        'subscription-name': 'A.D.I.Y (Do It Yourself)',
        'monthly-price': <div className="text-end">$0.00</div>,
        'annual-price': <div className="text-end">$0.50</div>,
        campaigns: 'Unlimited',
        trials: true,
        special: false,
        status: false,
      },
      {
        id: 3,
        'subscription-name': 'Free Trial',
        'monthly-price': <div className="text-end">$0.00</div>,
        'annual-price': <div className="text-end">$0.00</div>,
        campaigns: 'Unlimited',
        trials: true,
        special: false,
        status: true,
      },
      {
        id: 4,
        'subscription-name': 'Guidance',
        'monthly-price': <div className="text-end">$1.00</div>,
        'annual-price': <div className="text-end">$100.00</div>,
        campaigns: 'Unlimited',
        trials: true,
        special: false,
        status: false,
      },
      {
        id: 5,
        'subscription-name': 'Integration',
        'monthly-price': <div className="text-end">$0.10</div>,
        'annual-price': <div className="text-end">$1.00</div>,
        campaigns: '1',
        trials: false,
        special: true,
        status: true,
      },
      {
        id: 6,
        'subscription-name': 'Lite Package',
        'monthly-price': <div className="text-end">$0.00</div>,
        'annual-price': <div className="text-end">$0.00</div>,
        campaigns: '10',
        trials: false,
        special: true,
        status: true,
      },
      {
        id: 7,
        'subscription-name': 'Special Testers',
        'monthly-price': <div className="text-end">$10.00</div>,
        'annual-price': <div className="text-end">$100.00</div>,
        campaigns: 'Unlimited',
        trials: true,
        special: false,
        status: true,
      },
    ],
  }

  return (
    <CustomTable data={tableData.data} columns={tableData.columns} Header={SubscriptionHeader} />
  )
}

export default SubscriptionManagement
