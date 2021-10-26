import React from 'react'
import styles from './app.module.css'
import LoginBox from './components/login_box/login_box'

function App () {
  return (
    <div className={styles.container}>
      <LoginBox />
    </div>
  )
}

export default App
