import React, { useState } from 'react'
import {
  CAvatar,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CSpinner,
} from '@coreui/react'
import { cilUser, cilChevronCircleDownAlt, cilAccountLogout, cilPen } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import avatar8 from './../../assets/images/avatars/8.jpg'
import { useHistory } from 'react-router-dom'
import { useAuth } from 'src/utils/auth-provider'

const AppHeaderDropdown = () => {
  const history = useHistory()
  const { signOut } = useAuth()
  const [loading, setLoading] = useState(false)

  const handleSignout = (e) => {
    e.preventDefault()
    setLoading(true)
    signOut()
    history.push('/login')
    setLoading(false)
  }

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="md" /> Miriam <CIcon icon={cilChevronCircleDownAlt} />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem href="/profile">
          <CIcon icon={cilUser} className="me-2" />
          My Profile
        </CDropdownItem>
        <CDropdownItem href="/change-password">
          <CIcon icon={cilPen} className="me-2" />
          Change Password
        </CDropdownItem>
        <CDropdownItem href="#" onClick={handleSignout}>
          {loading ? (
            <CSpinner color="secondary" />
          ) : (
            <>
              <CIcon icon={cilAccountLogout} className="me-2" />
              Logout
            </>
          )}
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
