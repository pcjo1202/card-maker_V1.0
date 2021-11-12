import React, { useRef, useState } from 'react'
import styles from './card_maker.module.css'

const CardMaker = ({ FileInput, createAndChange, cards }) => {
  const formRef = useRef()
  const nameRef = useRef()
  const departmentRef = useRef()
  const themeRef = useRef()
  const ageRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()

  const [file, setFile] = useState({
    fileName: null,
    fileURL: null
  })

  function onAdd (event) {
    event.preventDefault()
    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      department: departmentRef.current.value || '',
      theme: themeRef.current.value || '',
      age: ageRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: file.fileName || '',
      fileURL: file.fileURL || ''
    }
    formRef.current.reset()
    setFile({
      fileName: null,
      fileURL: null
    })
    createAndChange(card)
  }

  const onFileChange = file => {
    setFile({
      fileName: file.fileName,
      fileURL: file.fileURL
    })
  }

  return (
    <section className={styles.card_maker}>
      <form
        ref={formRef}
        className={styles.editor}
        onSubmit={event => onAdd(event)}
      >
        <input
          ref={nameRef}
          type='text'
          name='name'
          placeholder='name'
          className={styles.name}
        />
        <input
          ref={departmentRef}
          type='text'
          name='department'
          placeholder='department'
          className={styles.department}
        />

        <select ref={themeRef} name='theme' className={styles.themeColor}>
          <option value='ligth'>light</option>
          <option value='dark'>dark</option>
        </select>
        <input
          ref={ageRef}
          type='text'
          name='age'
          placeholder='age'
          className={styles.age}
        />
        <input
          ref={emailRef}
          type='text'
          name='email'
          placeholder='email'
          className={styles.email}
        />

        <textarea
          ref={messageRef}
          placeholder='뭐라도 써'
          className={styles.message}
          name='message'
          cols='30'
          rows='5'
        />
        <div className={styles.Btn}>
          <FileInput
            fileName={file.fileName}
            card={cards}
            onFileChange={onFileChange}
          />
          <button className={styles.saveBtn} onClick={onAdd}>
            저장
          </button>
        </div>
      </form>
    </section>
  )
}

export default CardMaker
