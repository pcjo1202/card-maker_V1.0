import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  // 있는 그대로입니당
  apiKey: 'AIzaSyAVy3BJCW7Twf_cnPAzKDmaLHrp51GcFGM',
  authDomain: 'business-card-maker-8fbe8.firebaseapp.com',
  projectId: 'business-card-maker-8fbe8',
  storageBucket: 'business-card-maker-8fbe8.appspot.com',
  appId: '1:432579266773:web:4dee957051a0566a807a5c'
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

export default firebaseApp
