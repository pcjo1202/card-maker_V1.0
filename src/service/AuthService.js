import firebaseApp from './firebase'

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from 'firebase/auth'

export class AuthLogin {
  googleAuthTest () {
    // Google 로그인 하는 함수
    const auth = getAuth()
    auth.languageCode = 'it'
    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider) // 로그인 팝업창을 띄움
  }

  logOut () {
    // 로그아웃하는 함수
    const auth = getAuth()
    signOut(auth)
  }

  currentUserState () {
    return firebaseApp.automaticDataCollectionEnabled
  }
}
