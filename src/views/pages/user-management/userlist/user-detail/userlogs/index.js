import React from 'react'
import { CContainer } from '@coreui/react'
import { CustomTable } from 'src/components'
import CustomButton from 'src/components/custombutton'
import AddNote from './components/add-note'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import EditIcon from 'src/assets/icons/edit.svg'

const UserLogs = () => {
  const dataUserActivity = {
    columns: [
      { name: 'Sign In Count', selector: 'sign-in-count' },
      { name: 'Current Sign In At', selector: 'current-sign-in-at' },
      { name: 'Last Sign In At', selector: 'last-sign-in-at' },
      { name: 'Current Sign In IP', selector: 'current-sign-in-ip' },
      { name: 'Last Sign In IP', selector: 'last-sign-in-ip' },
    ],
    data: [
      {
        'sign-in-count': 14,
        'current-sign-in-at': '2021-06-08 04:27:44 UTC',
        'last-sign-in-at': '2021-03-13 15:49:57 UTC',
        'current-sign-in-ip': '116.193.68.98',
        'last-sign-in-ip': '171.232.243.5',
      },
    ],
  }

  const dataTransactionLogs = {
    columns: [
      { name: 'Transaction ID', selector: 'transactionid' },
      { name: 'Date', selector: 'date' },
      { name: 'Price', selector: 'price' },
      { name: 'Subscription', selector: 'subscription' },
      { name: 'Status', selector: 'status' },
    ],
    data: [
      {
        transactionid: 'cs_test_jKf53b1GoSOIWrfxNOAIxuJvRuCAsAnyC194yLabYaXUMRd0rAcjH5Nk',
        date: '07/30/2020 10:48 AM',
        price: '$ 75',
        subscription: 'Integration',
        status: 'Purchased',
      },
      {
        transactionid: 'cs_test_jKf53b1GoSOIWrfxNOAIxuJvRuCAsAnyC194yLabYaXUMRd0rAcjH5Nk',
        date: '07/30/2020 10:48 AM',
        price: '$ 75',
        subscription: 'Integration',
        status: 'Purchased',
      },
    ],
  }

  const dataActivitiesLogs = {
    columns: [
      { name: 'Activity ID', selector: 'activityid' },
      { name: 'User Signed In At', selector: 'user-signed-in-at' },
      { name: 'User Sign Out At', selector: 'user-signed-out-at' },
      { name: 'Subscription', selector: 'subscription' },
      { name: 'Subscription', selector: 'subscription-1' },
      { name: 'Status', selector: 'status' },
    ],
    data: [
      {
        activityid: 34,
        'user-signed-in-at': '07/30/2020 10:48 AM',
        'user-signed-out-at': '$ 75',
        subscription: 'Integration',
        'subscription-1': 'Integration',
        status: 'Purchased',
      },
      {
        activityid: 35,
        'user-signed-in-at': '07/30/2020 10:48 AM',
        'user-signed-out-at': '$ 75',
        subscription: 'Integration',
        'subscription-1': 'Integration',
        status: 'Purchased',
      },
    ],
  }

  const dataNotes = {
    columns: [
      { name: 'User', selector: 'user' },
      { name: 'Subject', selector: 'subject' },
      { name: 'Content', selector: 'content' },
      { name: 'Created At', selector: 'created-at' },
      {
        name: <div className="text-center">Action</div>,
        selector: 'action',
        render: (col) => {
          return (
            <div className="text-center">
              <CustomButton color="main" onClick={() => {}}>
                <img src={EditIcon} />
              </CustomButton>
            </div>
          )
        },
      },
    ],
    data: [
      {
        user: 'danhth@dfk.com',
        subject: 'Hello',
        content: 'Testing for adding note',
        'created-at': '2021-11-19 12:28:37 UTC',
      },
      {
        user: 'danhth@dfk.com',
        subject: 'Hello',
        content: 'Testing for adding note',
        'created-at': '2021-11-19 12:28:37 UTC',
      },
    ],
  }

  return (
    <>
      <div className="mb-2 bg-white">
        <CContainer fluid className="mt-3">
          <span className="fw-bold">User Activity</span>
        </CContainer>
        <CustomTable data={dataUserActivity.data} columns={dataUserActivity.columns} />
      </div>

      <div className="mb-2 bg-white">
        <CContainer fluid className="mt-3">
          <span className="fw-bold">Transaction Logs</span>
        </CContainer>
        <CustomTable data={dataTransactionLogs.data} columns={dataTransactionLogs.columns} />
      </div>

      <div className="mb-2 bg-white">
        <CContainer fluid className="mt-3">
          <span className="fw-bold">Activities Logs</span>
        </CContainer>
        <CustomTable data={dataActivitiesLogs.data} columns={dataActivitiesLogs.columns} />
      </div>

      <div className="bg-white">
        <CContainer
          fluid
          className="d-flex flex-row w-100 justify-content-between align-items-center mt-3"
        >
          <span className="fw-bold">Notes</span>
          <div>
            <CustomButton color="primary" onClick={() => AddNote({ show: true })}>
              <FontAwesomeIcon icon={faPlus} className="me-1" />
              Add Note
            </CustomButton>
          </div>
        </CContainer>

        <CustomTable data={dataNotes.data} columns={dataNotes.columns} />
      </div>
    </>
  )
}

export default UserLogs
