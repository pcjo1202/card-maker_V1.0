import React from 'react'
import ReactDOM from 'react-dom'
import './index.module.css'
import App from './app'
import { AuthLogin } from './service/AuthService'

const authLogin = new AuthLogin()

ReactDOM.render(
  <React.StrictMode>
    <App authLogin={authLogin} />
  </React.StrictMode>,
  document.getElementById('root')
)
