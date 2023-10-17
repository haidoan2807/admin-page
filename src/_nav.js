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
    name: <div style={{ marginLeft: '19px' }}>Agency Subscription</div>,
    to: '/agency-subscription',
    icon: <img src={IconPackagemanagement} style={{ marginLeft: '5px' }} />,
  },
]

export default _nav
