import React from 'react'
import CardPreview from '../card_preview/card_preview'
import styles from './card_list.module.css'
const CardList = ({ cards }) => {
  return (
    <section className={styles.card_preview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.card_list}>
        {Object.keys(cards).map(key =>
          <CardPreview card={cards[key]} key={key} />
        )}
      </ul>
    </section>
  )
}

export default CardList
