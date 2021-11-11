import React, { useState } from 'react'
import { useRef } from 'react/cjs/react.development'
import LoadingSpinner from '../loading_spinner/loading_spinner'
import styles from './image_input.module.css'

const ImageInput = ({ imageUploader, fileName, onFileChange, card }) => {
  const [loading, setLoading] = useState(false)
  const inputRef = useRef()
  const onClickInput = event => {
    event.preventDefault()
    inputRef.current.click()
  }

  const onChangeImage = async event => {
    setLoading(true)
    const inputFile = event.target.files[0]
    const uploaded = await imageUploader.upload(inputFile)
    setLoading(false)
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
      {loading
        ? <LoadingSpinner />
        : <button
          className={`${styles.button} ${fileName && styles.changeFile}`}
          onClick={onClickInput}
          >
          {fileName || 'No file'}
        </button>}
    </div>
  )
}

export default ImageInput
