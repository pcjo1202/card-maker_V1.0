// eslint-disable-next-line no-unused-vars
import firebaseApp from './firebase'

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

export class AuthLogin {
  googleAuthTest () {
    // Google 로그인 하는 함수
    const auth = getAuth()
    auth.languageCode = 'it'
    const provider = new GoogleAuthProvider()

    return signInWithPopup(auth, provider) // 로그인 팝업창을 띄움
  }

  logOut () {
    // 로그아웃하는 함수
    const auth = getAuth()
    return signOut(auth)
  }

  onAuthChange (onUserChange) {
    const auth = getAuth()
    // onAuthStateChanged 함수는 현재 로그인 되어있는 user의 정보를 전달해주는데, 인자로 auth와 콜백함수를 받는다.
    // 콜백함수는 이 함수에서 전달해주는 정보를 이용한 함수
    onAuthStateChanged(auth, user => {
      onUserChange(user)
    })
  }
}
