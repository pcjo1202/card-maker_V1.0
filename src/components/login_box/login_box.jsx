import React from 'react'
import styles from './login_box.module.css'
const LoginBox = ({ handleAuth }) => {
  return (
    <section className={styles.loginBox_wrapper}>
      <h1 className={styles.title}>Login</h1>
      <div className={styles.loginBtn}>
        <button className={styles.googleAuth} onClick={handleAuth}>
          Google
        </button>
        <button className={styles.emailAuth}>Email</button>
      </div>
    </section>
  )
}

export default LoginBox
