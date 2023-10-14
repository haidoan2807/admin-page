import React, { useState, createContext, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(
    localStorage.getItem('user') || sessionStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user')) || sessionStorage.getItem('user')
      : null,
  )
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getUser()
  }, [])

  const getUser = () => {
    let localStore = localStorage.getItem('user') || sessionStorage.getItem('user')
    let userStore = JSON.parse(localStore)
    setUser(userStore)
    return userStore
  }

  const signIn = async (email, password, keep) => {
    let result = { email, password }

    if (keep) {
      localStorage.getItem('user', JSON.stringify(result))
    } else {
      sessionStorage.setItem('user', JSON.stringify(result))
    }
    setUser(result)
    return result
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem('user')
    sessionStorage.removeItem('user')
    localStorage.removeItem('detail-user')
  }

  return (
    <AuthContext.Provider
      value={{ user: user, getUser: getUser, signIn: signIn, signOut: signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
}
