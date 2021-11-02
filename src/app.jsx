import React, { useEffect, useState } from 'react'
import { Router } from 'react-router'
import styles from './app.module.css'
import LoginBox from './components/login_box/login_box'
import MainPage from './components/main_page/main_page'

function App ({ authLogin }) {
  const [signInCheck, setSignInCheck] = useState()

  const handleAuth = () => {
    authLogin.googleAuthTest()
  }

  const logOut = () => {
    authLogin.logOut()
  }

  useEffect(() => {}, [])

  return (
    <div className={styles.container}>
      {signInCheck
        ? <MainPage logOut={logOut} />
        : <LoginBox handleAuth={handleAuth} />}
    </div>
  )
}

export default App
