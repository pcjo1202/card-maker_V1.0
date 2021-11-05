import React from 'react'
import CardPreview from '../card_preview/card_preview'
import styles from './card_list.module.css'
const CardList = ({ cards }) => {
  return (
    <section className={styles.card_preview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.card_list}>
        {cards.map(card => <CardPreview card={card} key={card.id} />)}
      </ul>
    </section>
  )
}

export default CardList
