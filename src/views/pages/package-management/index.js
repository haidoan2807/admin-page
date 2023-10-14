import React from 'react'
import { CustomTable } from 'src/components'
import { CFormInput, CInputGroup } from '@coreui/react'
import CustomButton from 'src/components/custombutton'
import Priority from './components/priority'
import Scheduler from './components/schedule'
import EditIcon from 'src/assets/icons/edit.svg'

const PackageManagement = () => {
  const tableData = {
    columns: [
      {
        name: <div>No.</div>,
        selector: 'no',
      },
      {
        name: 'Setting Name',
        selector: 'setting-name',
      },
      {
        name: <div className="text-center w-100">Action</div>,
        selector: 'action',
        render: (col, obj) => {
          if (obj['id'] === 1) {
            return (
              <div className="text-center">
                <CustomButton color="main" onClick={() => Scheduler({ show: true })}>
                  <img src={EditIcon} />
                </CustomButton>
              </div>
            )
          } else if (obj['id'] === 2) {
            return (
              <div className="text-center">
                <CustomButton
                  color="main"
                  onClick={() => Priority({ show: true, dataTest: dataTest })}
                >
                  <img src={EditIcon} />
                </CustomButton>
              </div>
            )
          } else {
            return (
              <div className="text-center">
                <CustomButton color="main" onClick={() => {}}>
                  <img src={EditIcon} />
                </CustomButton>
              </div>
            )
          }
        },
      },
    ],
    data: [
      {
        id: 1,
        no: <div>1</div>,
        'setting-name': 'Setting Schedule for Special Package',
      },
      {
        id: 2,
        no: <div>2</div>,
        'setting-name': 'Package Priority',
      },
      {
        id: 3,
        no: <div>3</div>,
        'setting-name': 'Package Access Control',
      },
    ],
  }

  const dataTest = {
    columns: [
      { name: 'No', selector: 'no' },
      { name: 'Package', selector: 'package' },
      {
        name: 'Priority',
        selector: 'priority',
        render: (col, obj) => (
          <CInputGroup size="sm">
            <CFormInput type="text" onChange={() => {}} />
          </CInputGroup>
        ),
      },
    ],
    data: [
      {
        id: 1,
        no: 1,
        package: 'Covid-19 Special Offers',
      },
      {
        id: 2,
        no: 2,
        package: 'D.I.Y (Do It Yourself)',
      },
      {
        id: 3,
        no: 3,
        package: 'Free Trial',
      },
      {
        id: 4,
        no: 4,
        package: 'Guidance',
      },
    ],
  }

  return <CustomTable columns={tableData.columns} data={tableData.data} pagination={false} />
}

export default PackageManagement
