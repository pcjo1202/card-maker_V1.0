import React from 'react'
import { useRef } from 'react/cjs/react.development'
import styles from './image_input.module.css'

const ImageInput = ({ imageUploader, fileName, onFileChange, card }) => {
  const inputRef = useRef()
  const onClickInput = event => {
    event.preventDefault()
    inputRef.current.click()
  }

  const onChangeImage = async event => {
    const inputFile = event.target.files[0]
    const uploaded = await imageUploader.upload(inputFile)
    console.log(uploaded)
    onFileChange({
      fileName: uploaded.original_filename,
      fileURL: uploaded.secure_url
    })
  }
  return (
    <div className={styles.inputBtn_wapper}>
      <input
        ref={inputRef}
        type='file'
        accept='image/*'
        name='file'
        className={styles.input}
        onChange={onChangeImage}
      />
      <button
        className={`${styles.button} ${fileName && styles.changeFile}`}
        onClick={onClickInput}
      >
        {fileName || 'No file'}
      </button>
    </div>
  )
}

export default ImageInput
