import React from 'react'
import ReactDOM from 'react-dom'
import './index.module.css'
import App from './app'
import { AuthLogin } from './service/AuthService'
import { ImageUploader } from './service/imgag_uploader'
import ImageInput from './components/image_input/image_input'
import '@fortawesome/fontawesome-free/js/all.js'

const authLogin = new AuthLogin()
const imageUploader = new ImageUploader()

const FileInput = props =>
  <ImageInput {...props} imageUploader={imageUploader} />

ReactDOM.render(
  <React.StrictMode>
    <App FileInput={FileInput} authLogin={authLogin} />
  </React.StrictMode>,
  document.getElementById('root')
)
