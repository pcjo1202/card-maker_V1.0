import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import CardEditor from '../card_editor/card_editor'
import CardList from '../card_list/card_list'
import CardMaker from '../card_maker/card_maker'
import Footer from '../footer/footer'
import Header from '../header/header'
import styles from './main_page.module.css'

const MainPage = ({ authLogin }) => {
  const cardData = {
    id: '1',
    name: '박창조',
    department: '정보통신공학과 & 컴퓨터공학과',
    theme: 'white',
    age: '24',
    email: 'ckdwh1202@gmail.com',
    message: '나는 창조다',
    fileName: '',
    fileURL: null
  }
  const [cards, setCards] = useState([cardData])

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

  const onAddCard = card => {
    setCards([...cards, card])
    console.log(cards)
  }

  return (
    <div className={styles.mainPage}>
      <Header logOut={logOut} />
      <section className={styles.container}>
        <div className={styles.CardMaker}>
          {cards.map(cards => <CardEditor cards={cards} key={cards.id} />)}
          <CardMaker cards={cards} onAddCard={onAddCard} />
        </div>
        <CardList cards={cards} key={cards.id} />
      </section>
      <Footer />
    </div>
  )
}
export default MainPage
