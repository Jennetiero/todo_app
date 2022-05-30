import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import 'firebase/database'
const {
  REACT_APP_FB_API_KEY,
  REACT_APP_FB_APP_ID,
  REACT_APP_FB_AUTH_DOMAIN,
  REACT_APP_FB_MESSAGING_SENDER_ID,
  REACT_APP_FB_PROJECT_ID,
  REACT_APP_FB_STORAGE_BUCKET
} = process.env

const firebaseConfig = {
  apiKey: REACT_APP_FB_API_KEY,
  authDomain: REACT_APP_FB_AUTH_DOMAIN,
  projectId: REACT_APP_FB_PROJECT_ID,
  storageBucket: REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FB_MESSAGING_SENDER_ID,
  appId: REACT_APP_FB_APP_ID
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
