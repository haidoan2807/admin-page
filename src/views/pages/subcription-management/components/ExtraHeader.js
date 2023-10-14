import React from 'react'
import CustomButton from 'src/components/custombutton'
import CreateNewSubscription from 'src/views/pages/subcription-management/components/create-subscription'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const ExtraHeader = () => {
  return (
    <CustomButton
      color="primary"
      className=""
      onClick={() => CreateNewSubscription({ show: true })}
    >
      <FontAwesomeIcon icon={faPlus} className="me-1" />
      Create subscription
    </CustomButton>
  )
}

export default ExtraHeader
