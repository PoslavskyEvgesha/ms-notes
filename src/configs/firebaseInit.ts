import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyA7VZdYvemT4OHdS2neoE_48D64OgqwBx8',
  authDomain: 'ms-data-notes.firebaseapp.com',
  projectId: 'ms-data-notes',
  storageBucket: 'ms-data-notes.appspot.com',
  messagingSenderId: '787191287012',
  appId: '1:787191287012:web:9740efb95a3817a32cb0f1',
}

firebase.initializeApp(firebaseConfig)

export default firebase
