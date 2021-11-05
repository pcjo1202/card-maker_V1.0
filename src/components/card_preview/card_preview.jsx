import React from 'react'
import styles from './card_preview.module.css'

const CardPreview = ({ card }) => {
  const DEAFAULT_IMGAGE = 'image/seoheyon.jpg'
  const imgURL = card.fileURL || DEAFAULT_IMGAGE
  const { name, department, email, produce } = card
  return (
    <li className={styles.card_preview}>
      <img src={imgURL} alt='카드사진' className={styles.card_image} />
      <div className={styles.text_info}>
        <h2 className={styles.name}>
          {name}
        </h2>
        <span className={styles.department}>
          {department}
        </span>
        <span className={styles.email}>
          {email}
        </span>
        <hr />
        <h3 className={styles.produce}>
          {produce}
        </h3>
      </div>
    </li>
  )
}

export default CardPreview
