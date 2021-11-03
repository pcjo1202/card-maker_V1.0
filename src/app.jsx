import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom'
import styles from './app.module.css'
import LoginBox from './components/login_box/login_box'
import MainPage from './components/main_page/main_page'

function App ({ authLogin }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Router>
          <Switch>
            <Route exact path='/'>
              <LoginBox authLogin={authLogin} />
            </Route>
            <Route path='/main'>
              <MainPage authLogin={authLogin} />
            </Route>
          </Switch>
        </Router>
      </BrowserRouter>
    </div>
  )
}

export default App
