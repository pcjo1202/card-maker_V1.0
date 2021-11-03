import React, { useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './login_box.module.css'

const LoginBox = ({ authLogin }) => {
  const history = useHistory()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const goToMain = useCallback(userId => {
    history.push({
      pathname: '/main',
      state: { id: userId } // 로그인 한 user의 정보를 전달해준다
    })
  })

  function onLogin () {
    authLogin //
      .googleAuthTest()
      .then(data => goToMain(data.user.uid))
  }

  useEffect(
    () => {
      authLogin //
        .onAuthChange(user => {
          user && goToMain(user.uid)
        })
    },
    [authLogin, goToMain]
  )
  return (
    <section className={styles.loginBox_wrapper}>
      <h1 className={styles.title}>Login</h1>
      <div className={styles.loginBtn}>
        <button className={styles.googleAuth} onClick={onLogin}>
          Google
        </button>
        <button className={styles.emailAuth}>Email</button>
      </div>
    </section>
  )
}

export default LoginBox
