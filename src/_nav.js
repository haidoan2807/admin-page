import React from 'react'
import { CNavItem } from '@coreui/react'
import IconCampaign from './assets/images/icon_dashboard.svg'
import IconDashboard from './assets/images/icon_campaign.svg'
import IconTracksales from './assets/images/icon_tracksales.svg'
import IconUserManagement from './assets/images/icon_user_management.svg'
import IconSubscriptionManagement from './assets/images/icon_subscription_management.svg'
import IconAccessControl from './assets/images/icon_access_control.svg'
import IconPOSmanagement from './assets/images/icon_pos_management.svg'
import IconPackagemanagement from './assets/images/icon_package_management.svg'

const _nav = [
  {
    component: CNavItem,
    name: <div style={{ marginLeft: '18px' }}>Dashboard</div>,
    to: '/dashboard',
    icon: <img src={IconDashboard} style={{ marginLeft: '3px' }} />,
  },
  {
    component: CNavItem,
    name: <div style={{ marginLeft: '18px' }}>Campaign</div>,
    to: '/campaign',
    icon: <img src={IconCampaign} style={{ marginLeft: '5px' }} />,
  },
  {
    component: CNavItem,
    name: <div style={{ marginLeft: '18px' }}>Track Sales</div>,
    to: '/track-sales',
    icon: <img src={IconTracksales} style={{ marginLeft: '2px' }} />,
  },
  {
    component: CNavItem,
    name: <div style={{ marginLeft: '17px' }}>User Management</div>,
    to: '/user-management',
    icon: <img src={IconUserManagement} style={{ marginLeft: '3px' }} />,
  },
  {
    component: CNavItem,
    name: <div style={{ marginLeft: '20px' }}>Subscription Management</div>,
    to: '/subscription',
    icon: <img src={IconSubscriptionManagement} style={{ marginLeft: '5px' }} />,
  },
  {
    component: CNavItem,
    name: <div style={{ marginLeft: '20px' }}>Access Control</div>,
    to: '/accesscontrol',
    icon: <img src={IconAccessControl} style={{ marginLeft: '5px' }} />,
  },
  {
    component: CNavItem,
    name: <div style={{ marginLeft: '20px' }}>POS Management</div>,
    to: '/pos-management',
    icon: <img src={IconPOSmanagement} style={{ marginLeft: '5px' }} />,
  },
  {
    component: CNavItem,
    name: <div style={{ marginLeft: '19px' }}>Package Management</div>,
    to: '/package-management',
    icon: <img src={IconPackagemanagement} style={{ marginLeft: '5px' }} />,
  },
  {
    component: CNavItem,
    name: <div style={{ marginLeft: '19px' }}>Agency Subscription</div>,
    to: '/agency-subscription',
    icon: <img src={IconPackagemanagement} style={{ marginLeft: '5px' }} />,
  },
]

export default _nav
