import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyAgfRFoxH9GgSNtNYxEOfMLE2GK5z0MEHs',
  authDomain: 'todo-app-6d426.firebaseapp.com',
  projectId: 'todo-app-6d426',
  storageBucket: 'todo-app-6d426.appspot.com',
  messagingSenderId: '114740668989',
  appId: '1:114740668989:web:15b5323a270edfc9b01854'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
