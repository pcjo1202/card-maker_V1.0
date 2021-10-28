import React, { useState } from 'react'
import styles from './app.module.css'
import LoginBox from './components/login_box/login_box'

function App ({ firebase }) {
  const [signInCheck, setSignInCheck] = useState(true)

  const handleAuth = () => {
    firebase.googleAuthTest()
  }

  const logOut = () => {
    firebase.logOut()
    if (firebase.currentUserState === null) {
      setSignInCheck(false)
    }
  }

  return (
    <div className={styles.container}>
      <LoginBox handleAuth={handleAuth} />
      <button onClick={logOut}>
        {signInCheck ? '로그 아웃' : '로그인'}
      </button>
      <button onClick={firebase.currentUserState}>로그인 상태확인</button>
    </div>
  )
}

export default App
