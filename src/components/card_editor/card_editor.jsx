import React from 'react'
import styles from './card_editor.module.css'

const CardEditor = ({ cards, onAddCard }) => {
  function onAdd (event) {
    event.preventDefault()
  }

  const { name, department, age, theme, email, message } = cards

  return (
    <section className={styles.card_maker}>
      <form className={styles.editor} onSubmit={event => onAdd(event)}>
        <input
          type='text'
          name='name'
          placeholder='name'
          className={styles.name}
          value={name}
        />
        <input
          type='text'
          name='department'
          placeholder='department'
          className={styles.department}
          value={department}
        />

        <select name='theme' className={styles.themeColor} value={theme}>
          <option value='ligth'>light</option>
          <option value='dark'>dark</option>
        </select>
        <input
          type='text'
          name='age'
          placeholder='age'
          className={styles.age}
          value={age}
        />
        <input
          type='text'
          name='email'
          placeholder='email'
          className={styles.email}
          value={email}
        />

        <textarea
          placeholder='뭐라도 써'
          className={styles.message}
          name='message'
          cols='30'
          rows='5'
          value={message}
        />
        <div className={styles.Btn}>
          <button className={styles.selectImage}>이미지선택</button>
          <button className={styles.saveBtn} onClick={onAdd}>
            삭제
          </button>
        </div>
      </form>
    </section>
  )
}

export default CardEditor
