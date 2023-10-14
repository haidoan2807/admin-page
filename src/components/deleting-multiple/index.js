import React from 'react'
import CIcon from '@coreui/icons-react'
import CustomButton from '../custombutton'
import { cilTrash } from '@coreui/icons'
import PropTypes from 'prop-types'
import ConfirmDialog from '../popup'

const DeletingMultiple = ({ selectedRows }) => {
  return (
    selectedRows > 0 && (
      <div
        className="d-flex flex-row w-100 justify-content-between align-items-center"
        style={{ backgroundColor: '#61A4BC' }}
      >
        <span className="p-2" style={{ fontSize: '14px' }}>
          {selectedRows} items selected
        </span>
        <div className="p-2">
          <CustomButton
            className="bg-danger"
            style={{ borderColor: '#dc3545' }}
            onClick={() =>
              ConfirmDialog({
                show: true,
                message: 'Are you sure you want to delete ?',
                title: 'Confirm Delete Multiple Record(s)',
                confirmText: 'Delete',
              })
            }
          >
            <CIcon icon={cilTrash} />
          </CustomButton>
        </div>
      </div>
    )
  )
}

DeletingMultiple.propTypes = {
  selectedRows: PropTypes.number,
}

export default DeletingMultiple
