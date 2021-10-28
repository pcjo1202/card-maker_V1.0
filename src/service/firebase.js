import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from 'firebase/auth'

export class firebaseSDK {
  constructor () {
    const firebaseConfig = {
      // 있는 그대로입니당
      apiKey: 'AIzaSyAVy3BJCW7Twf_cnPAzKDmaLHrp51GcFGM',
      authDomain: 'business-card-maker-8fbe8.firebaseapp.com',
      projectId: 'business-card-maker-8fbe8',
      storageBucket: 'business-card-maker-8fbe8.appspot.com',
      messagingSenderId: '432579266773',
      appId: '1:432579266773:web:4dee957051a0566a807a5c',
      measurementId: 'G-2CB1QN2YNB'
    }

    // Initialize Firebase
    const app = initializeApp(firebaseConfig)
    const analytics = getAnalytics(app)
  }

  googleAuthTest () {
    // Google 로그인 하는 함수
    const auth = getAuth()
    auth.languageCode = 'it'
    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider) // 로그인 팝업창을 띄움
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        // The signed-in user info.
        const user = result.user
        // ...

        this.currentUserState()
      })
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.email
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)
        // ...
      })
  }

  logOut () {
    // 로그아웃하는 함수
    const auth = getAuth()
    signOut(auth) //
      .then(() => {
        console.log('로그아웃 성공')
        this.currentUserState()
      })
  }

  currentUserState () {
    // 로그인 상태를 알 수 있는 함수
    const auth = getAuth()
    console.log(auth.currentUser)
    return auth.currentUser
  }
}
