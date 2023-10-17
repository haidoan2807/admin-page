import React from 'react'
import CampaignCost from './views/pages/campaign/campaign-cost'

const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const UserManagement = React.lazy(() => import('./views/pages/user-management'))
const AccessControlManagement = React.lazy(() => import('./views/pages/accesscontrol'))
const PackageManagement = React.lazy(() => import('./views/pages/package-management'))
const SubscriptionManagement = React.lazy(() => import('./views/pages/subcription-management'))
const AgencySubscription = React.lazy(() => import('./views/pages/agency-subscription'))
const Chat = React.lazy(() => import('./views/pages/chat'))
const Campaign = React.lazy(() => import('./views/pages/campaign'))
const TrackSales = React.lazy(() => import('./views/pages/tracksales'))
const ShowImportedHistory = React.lazy(() => import('./views/pages/tracksales/show-imported-history'))
const TrackSalesDetail = React.lazy(() => import('./views/pages/tracksales/track-sale-details'))
const  PreviewImportedHistory= React.lazy(() => import('./views/pages/tracksales/preview-imported-history'))


const POSManagement = React.lazy(() => import('./views/pages/pos-management'))
const Profile = React.lazy(() => import('./views/pages/profile'))
const ChangePassword = React.lazy(() => import('./views/pages/change-password'))
const SubscriptionManagementExtraHeader = React.lazy(() =>
  import('./views/pages/subcription-management/components/ExtraHeader'),
)
const DetailUser = React.lazy(() => import('./views/pages/user-management/userlist/user-detail'))
const DetailCampaign = React.lazy(() => import('./views/pages/campaign/detail-campaign/index'))

const routes = [
  { path: '/', exact: true, name: 'Agency Subscription', component: AgencySubscription },
  { path: '/agency-subscription', name: 'Agency Subscription', component: AgencySubscription },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', component: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress', name: 'Progress', component: Progress },
  { path: '/base/spinners', name: 'Spinners', component: Spinners },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/forms', name: 'Forms', component: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', component: FormControl },
  { path: '/forms/select', name: 'Select', component: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', component: ChecksRadios },
  { path: '/forms/range', name: 'Range', component: Range },
  { path: '/forms/input-group', name: 'Input Group', component: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', component: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', component: Layout },
  { path: '/forms/validation', name: 'Validation', component: Validation },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toasts', name: 'Toasts', component: Toasts },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/user-management/user-detail', name: 'User Detail', component: DetailUser },
  { path: '/user-management', name: 'User Management', component: UserManagement },
  { path: '/accesscontrol', name: 'Access Control', component: AccessControlManagement },
  { path: '/package-management', name: 'Package Management', component: PackageManagement },
  {
    path: '/subscription',
    name: 'Subscription Management',
    component: SubscriptionManagement,
    extraHeader: SubscriptionManagementExtraHeader,
  },
  { path: '/pos-management', name: 'POS Management', component: POSManagement },
  { path: '/campaign/campaign-cost', name: 'Campaign Cost', component: CampaignCost },
  { path: '/campaign/detail', name: 'View Campaign', component: DetailCampaign },
  { path: '/campaign', name: 'Campaign', component: Campaign },
  { path: '/track-sales/track-sale-detail', name: 'Track Sales Detail', component: TrackSalesDetail },
  { path: '/track-sales/preview-imported-history', name: 'Preview Import History', component: PreviewImportedHistory },
  { path: '/track-sales/show-imported-history', name: 'Import History', component: ShowImportedHistory },
  { path: '/track-sales', name: 'Track Sales', component: TrackSales },
  { path: '/chat', name: 'Chat', component: Chat },
  { path: '/change-password', name: 'Change Password', component: ChangePassword },
  { path: '/profile', name: 'Profile', component: Profile },
]

export default routes
