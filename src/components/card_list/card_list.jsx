import React from 'react'
import CardPreview from '../card_preview/card_preview'
import styles from './card_list.module.css'
const CardList = props => {
  return (
    <ul className={styles.card_list}>
      <CardPreview />
    </ul>
  )
}

export default CardList
