import React, { Component } from 'react'
import { HashRouter, Route, Switch ,BrowserRouter} from 'react-router-dom'
import './scss/style.scss'
import ForgotPassword from './views/pages/forgot-password'
import 'antd/dist/antd.css'
import { ToastContainer } from 'react-toastify'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const DetailUser = React.lazy(() => import('./views/pages/user-management/userlist/user-detail'))
const DetailCampaign = React.lazy(() => import('./views/pages/campaign/detail-campaign/index'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
            <Route
              exact
              path="/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />
            <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
            <Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} />
            <Route
              exact
              path="/forgot-password"
              name="Page Forgot Password"
              render={(props) => <ForgotPassword {...props} />}
            />

            <Route path="/" name="Home" render={(props) => <DefaultLayout {...props} />} />
            {/* <Route path="/user-management/user-detail" name="User Detail" render={(props) => <DetailUser {...props} />} /> */}
          </Switch>
        </React.Suspense>
        <ToastContainer />
      </HashRouter>
    )
  }
}

export default App
