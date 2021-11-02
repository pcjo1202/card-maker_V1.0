import React from 'react'
import styles from './card_preview.module.css'

const CardPreview = props => {
  return (
    <li className={styles.card_preview}>
      <img src='image/seoheyon.jpg' alt='카드사진' className={styles.card_image} />
      <div className={styles.text_info}>
        <h2 className={styles.name}>박창조</h2>
        <h3 className={styles.produce}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
          repellat esse nostrum maiores voluptas tenetur corrupti quibusdam
          accusantium placeat aliquid, eos culpa temporibus suscipit nulla
          veniam perspiciatis corporis accusamus eaque!
        </h3>
      </div>
    </li>
  )
}

export default CardPreview
