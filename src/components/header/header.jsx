import React from 'react'
import styles from './header.module.css'

const Header = ({ logOut }) =>
  <header className={styles.header}>
    <div className={styles.title}>Card Maker</div>
    <button onClick={logOut} className={styles.logOutBtn}>
      Logout
    </button>
  </header>

export default Header
