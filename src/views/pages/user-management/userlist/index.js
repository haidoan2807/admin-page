import React, { useState } from 'react'
import { CFormCheck } from '@coreui/react'
import CustomButton from 'src/components/custombutton'
import { CustomTable } from 'src/components'
import EditSubscriber from './components/edit-subcriber'
import ConfirmDialog from 'src/components/popup'
import { useHistory } from 'react-router-dom'
import TrashIcon from 'src/assets/icons/trash.svg'
import EditIcon from 'src/assets/icons/edit.svg'
import UserIcon from 'src/assets/icons/user.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'

const UserList = () => {
  const DeletingMultiple = React.lazy(() => import('src/components/deleting-multiple'))
  const history = useHistory()
  const [user, setUser] = useState({
    firstName: 'Thai',
    lastName: 'Hoang Danh',
    email: 'danhth@dfk-com.vn',
    bussinessName: 'Kevin',
    bussinessWebsite: 'www.danhthaihoang.com',
    bussinessLocation: 'Vietnam',
    typeOfPOS: 'Kounta',
    password: '123456',
    confirmedPassword: '123456',
  })

  const [selectedRows, setSelectedRows] = useState([])

  const handleChange = (e) => {
    const { id, checked } = e.target

    // display checkbox UI
    if (id === 'all-selected') {
      setData((prevState) => {
        let temp = prevState.map((dt) => {
          return { ...dt, isChecked: checked }
        })
        return temp
      })
    } else {
      setData((prevState) => {
        let temp = prevState.map((dt) => (dt.id === id ? { ...dt, isChecked: checked } : dt))
        return temp
      })
    }

    // save ids into selectedRows
    setSelectedRows((prevState) => {
      if (id === 'all-selected') {
        if (prevState.length !== data.length) {
          return data.map((i) => i.id)
        } else {
          return []
        }
      } else {
        let newArray = [...prevState, id]
        if (prevState.includes(id)) {
          newArray = newArray.filter((item) => item !== id)
        }
        return newArray
      }
    })
  }

  const [data, setData] = useState([
    {
      id: '1',
      email: 'abc@gmail.com',
      name: 'Miriam Van Heusden',
      subscription: 'Free trial',
      'accessible-packages': 'Guidance, Free Trial, Special Testers, Covid-19 Special Offers',
      'expired-date': 'Nov 11, 2021',
      status: true,
    },
    {
      id: '2',
      email: 'abc@gmail.com',
      name: 'Miriam Van Heusden',
      subscription: 'Free trial',
      'accessible-packages': 'Guidance, Free Tria',
      'expired-date': 'Nov 11, 2021',
      status: false,
    },
    {
      id: '3',
      email: 'abc@gmail.com',
      name: 'Miriam Van Heusden',
      subscription: 'Integration',
      'accessible-packages': 'Guidance, Free Tria',
      'expired-date': 'Nov 11, 2021',
      status: true,
    },
    {
      id: '4',
      email: 'abc@gmail.com',
      name: 'Miriam Van Heusden',
      subscription: 'Integration',
      'accessible-packages': 'Guidance, Free Tria',
      'expired-date': 'Nov 11, 2021',
      status: false,
    },
  ])

  const columns = [
    {
      name: (
        <div className="text-center w-100">
          <CFormCheck
            type="checkbox"
            id="all-selected"
            checked={data.filter((dt) => dt?.isChecked !== true).length < 1}
            onChange={handleChange}
          />
        </div>
      ),
      selector: 'check',
      className:' align-center-col-name',
      render: (col, obj) => {
        return (
          <div className="text-center">
            <CFormCheck
              type="checkbox"
              id={obj.id}
              checked={obj?.isChecked || false}
              onChange={handleChange}
            />
          </div>
        )
      },
    },
    {
      name: 'Email',
      selector: 'email',
      sortable: true,
    },
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Subscription',
      selector: 'subscription',
      sortable: true,
    },
    {
      name: 'Accessible Packages',
      selector: 'accessible-packages',
      sortable: true,
    },
    {
      name: <div className="text-center">Expired Date</div>,
      selector: 'expired-date',
      sortable: true,
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
          <CustomButton
            color="main"
            onClick={() =>
              ConfirmDialog({
                show: true,
                message: (
                  <span>
                    Are you sure you want to <b>disable</b> user {user.email}?
                  </span>
                ),
              })
            }
          >
            <FontAwesomeIcon icon={faBan} size="lg" className="mt-1" />
          </CustomButton>
          <CustomButton color="main" onClick={() => EditSubscriber({ show: true, user: user })}>
            <img src={EditIcon} />
          </CustomButton>
          <CustomButton
            color="main"
            onClick={() =>
              ConfirmDialog({
                show: true,
                message: (
                  <span>
                    Are you sure you want to <b>delete</b> user {user.email}?
                  </span>
                ),
              })
            }
          >
            <img src={TrashIcon} />
          </CustomButton>
          <CustomButton
            color="main"
            onClick={() =>
              history.push({ pathname: '/user-management/user-detail', state: { user: user } })
            }
          >
            <img src={UserIcon} />
          </CustomButton>
        </div>
      ),
    },
  ]

  // console.log('data: ', data)
  // console.log('selectedRows: ', selectedRows)

  return (
    <CustomTable
      data={data}
      columns={columns}
      Header={() => <DeletingMultiple selectedRows={selectedRows.length} />}
    />
  )
}

export default UserList
