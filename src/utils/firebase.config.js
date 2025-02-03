import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyAO6d2y1mX8XRBdLp9uoOH-mXOG8DD3xnI',
  authDomain: 'vuefire-c0c4e.firebaseapp.com',
  projectId: 'vuefire-c0c4e',
  storageBucket: 'vuefire-c0c4e.firebasestorage.app',
  messagingSenderId: '885148384578',
  appId: '1:885148384578:web:40b401736c7e8a775a9cdb',
})

// used for the firestore refs
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const usersRef = collection(db, 'users')
