import React from 'react'
import styles from './card_preview.module.css'

const CardPreview = ({ card }) => {
  const DEAFAULT_IMGAGE = 'image/seoheyon.jpg'
  const imgURL = card.fileURL || DEAFAULT_IMGAGE
  const { name, department, email, message } = card
  return (
    <li className={styles.card_preview}>
      <img src={imgURL} alt='카드사진' className={styles.card_image} />
      <div className={styles.text_info}>
        <h2 className={styles.name}>
          {name}
        </h2>
        <p className={styles.department}>
          {department}
        </p>
        <p className={styles.email}>
          {email}
        </p>
        <hr />
        <h3 className={styles.produce}>
          {message}
        </h3>
      </div>
    </li>
  )
}

export default CardPreview
