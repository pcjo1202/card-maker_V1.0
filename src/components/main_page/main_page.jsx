import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import CardEditor from '../card_editor/card_editor'
import CardList from '../card_list/card_list'
import CardMaker from '../card_maker/card_maker'
import Footer from '../footer/footer'
import Header from '../header/header'
import styles from './main_page.module.css'

const MainPage = ({ FileInput, authLogin, cardRepository }) => {
  const history = useHistory()
  const historyState = history.location.state

  const [cards, setCards] = useState({})
  const [userId, setUserId] = useState(historyState && historyState.id)

  const goToLoginPage = () => {
    history.push('/')
  }
  const logOut = () => {
    authLogin.logOut()
    goToLoginPage()
  }

  useEffect(() => {
    // 로그인 상태에 따라 로그인이 되어있으면...userI를 state에 저장을 하고, 로그인 X이면 로그인 화면으로 간다.
    authLogin //
      .onAuthChange(user => {
        if (user) {
          setUserId(user.uid)
          cardRepository
            .getCards(userId) // firebase에서 저장되어있는 cards data를 가져와 cards 보여준다.
            .then(cards => {
              if (cards) {
                setCards(cards)
              }
            })
        } else {
          goToLoginPage()
        }
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onDelete = key => {
    setCards(() => {
      const deleteCard = { ...cards }
      delete deleteCard[key]
      cardRepository.saveCard(userId, deleteCard)
      return deleteCard
    })
  }

  const createAndChange = card => {
    setCards(() => {
      const updateCard = { ...cards }
      updateCard[card.id] = card
      return updateCard
    })
    cardRepository.saveCard(userId, cards)
    // cardRepository.updateCard(cards, userId)
  }

  return (
    <div className={styles.mainPage}>
      <Header logOut={logOut} />
      <section className={styles.container}>
        <div className={styles.CardMaker}>
          {Object.keys(cards).map(key =>
            <CardEditor
              FileInput={FileInput}
              key={key}
              cards={cards[key]}
              onDelete={onDelete}
              createAndChange={createAndChange}
            />
          )}
          <CardMaker
            FileInput={FileInput}
            cards={cards}
            createAndChange={createAndChange}
          />
        </div>
        <CardList cards={cards} />
      </section>
      <Footer />
    </div>
  )
}
export default MainPage
