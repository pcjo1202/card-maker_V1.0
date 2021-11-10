import React from 'react'
import styles from './card_editor.module.css'

const CardEditor = ({ FileInput, cards, onDelete, createAndChange }) => {
  const { name, department, age, theme, email, message, fileName } = cards

  function onDeleteBtn (event) {
    event.preventDefault()
    onDelete(cards.id)
  }

  function onChange (event) {
    event.preventDefault()
    if (event.currentTarget.value === null) {
      return
    }

    createAndChange({
      ...cards,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const onFileChange = file => {
    createAndChange({
      ...cards,
      fileName: file.fileName,
      fileURL: file.fileURL
    })
  }

  return (
    <section className={styles.card_maker}>
      <form className={styles.editor}>
        <input
          type='text'
          name='name'
          placeholder='name'
          className={styles.name}
          value={name}
          onChange={onChange}
        />

        <input
          type='text'
          name='department'
          placeholder='department'
          className={styles.department}
          value={department}
          onChange={onChange}
        />

        <select
          name='theme'
          className={styles.themeColor}
          value={theme}
          onChange={onChange}
        >
          <option value='ligth'>light</option>
          <option value='dark'>dark</option>
        </select>
        <input
          type='text'
          name='age'
          placeholder='age'
          className={styles.age}
          value={age}
          onChange={onChange}
        />
        <input
          type='text'
          name='email'
          placeholder='email'
          className={styles.email}
          value={email}
          onChange={onChange}
        />

        <textarea
          placeholder='뭐라도 써'
          className={styles.message}
          name='message'
          cols='30'
          rows='5'
          value={message}
          onChange={onChange}
        />
        <div className={styles.Btn}>
          <FileInput
            fileName={fileName}
            card={cards}
            onFileChange={onFileChange}
          />
          <button className={styles.saveBtn} onClick={onDeleteBtn}>
            삭제
          </button>
        </div>
      </form>
    </section>
  )
}

export default CardEditor
