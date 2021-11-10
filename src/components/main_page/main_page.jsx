import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import CardEditor from '../card_editor/card_editor'
import CardList from '../card_list/card_list'
import CardMaker from '../card_maker/card_maker'
import Footer from '../footer/footer'
import Header from '../header/header'
import styles from './main_page.module.css'

const MainPage = ({ FileInput, authLogin }) => {
  const cardData = {
    '1': {
      id: '1',
      name: '박창조',
      department: '정보통신공학과 & 컴퓨터공학과',
      theme: 'ligth',
      age: '24',
      email: 'ckdwh1202@gmail.com',
      message: '나는 창조다',
      fileName: 'seoheyon',
      fileURL:
        'https://res.cloudinary.com/dbbyjo/image/upload/v1636536297/card_maker/fbuteaalsk9x1cymsnhc.jpg'
    }
  }
  const [cards, setCards] = useState(cardData)

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

  const onDelete = key => {
    setCards(() => {
      const deleteCard = { ...cards }
      delete deleteCard[key]
      return deleteCard
    })
  }

  const createAndChange = card => {
    setCards(() => {
      const updateCard = { ...cards }
      updateCard[card.id] = card
      return updateCard
    })
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
