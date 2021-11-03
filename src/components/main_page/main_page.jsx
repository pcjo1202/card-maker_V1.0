import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import CardList from '../card_list/card_list'
import styles from './main_page.module.css'

const MainPage = ({ authLogin }) => {
  const history = useHistory()
  const goToLoginPage = () => {
    history.push('/')
  }
  const logOut = () => {
    authLogin.logOut()
    goToLoginPage()
  }

  useEffect(() => {
    authLogin //
      .onAuthChange(user => {
        !user && goToLoginPage()
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.title}>Card Maker</div>
        <button onClick={logOut} className={styles.logOutBtn}>
          Logout
        </button>
      </header>
      <main className={styles.content}>
        <CardList />
        <section className={styles.card_maker}>
          {}
        </section>
      </main>
    </div>
  )
}
export default MainPage
