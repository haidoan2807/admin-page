import React from 'react'
import CustomButton from 'src/components/custombutton'
import ConfirmDialog from 'src/components/popup'

const AccessControlFooter = () => {
  const confirmUpdate = () => {
    ConfirmDialog({
      message: (
        <span>
          Are you sure you want to <b>save</b> these change?
        </span>
      ),
      show: true,
    })
  }

  const confirmReset = () => {
    ConfirmDialog({
      message: (
        <span>
          Are you sure you want to <b>discard</b> all changes?
        </span>
      ),
      show: true,
    })
  }

  return (
    <div className="d-flex ms-auto pb-3">
      <CustomButton
        color="secondary"
        style={{ marginRight: '10px' }}
        onClick={() => confirmReset()}
      >
        Reset
      </CustomButton>
      <CustomButton color="primary" onClick={() => confirmUpdate()}>
        Update
      </CustomButton>
    </div>
  )
}

export default AccessControlFooter
