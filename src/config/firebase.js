import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBYCnhHCN6VEHCdNqT1JzYX3U8rq4SaL6U",
  authDomain: "eventos-416b5.firebaseapp.com",
  projectId: "eventos-416b5",
  storageBucket: "eventos-416b5.appspot.com",
  messagingSenderId: "161254016504",
  appId: "1:161254016504:web:89d815111dec495fd7c20d"
};

export default firebase.initializeApp(firebaseConfig)