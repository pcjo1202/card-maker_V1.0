import React from 'react'
import CardList from '../card_list/card_list'
import styles from './main_page.module.css'

const MainPage = ({ logOut }) => {
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
