// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import 'firebase/firestore'
import 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FB_CONFIG_APIKEY,
  authDomain: process.env.FB_CONFIG_AUTHDOMAIN,
  databaseURL: process.env.FB_CONFIG_DATABASEURL,
  projectId: process.env.FB_CONFIG_PROJECTID,
  storageBucket: process.env.FB_CONFIG_STORAGEBUCKET,
  messagingSenderId: process.env.FB_CONFIG_MESSAGINGSENDERID,
  appId: process.env.FB_CONFIG_API_ID,
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const auth = getAuth()
export const firestore = getFirestore()
