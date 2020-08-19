import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD8vz4TMXvSB7i9Fs45H1IuH35bDiJ-ZqA",
  authDomain: "revents-course-a1d87.firebaseapp.com",
  databaseURL: "https://revents-course-a1d87.firebaseio.com",
  projectId: "revents-course-a1d87",
  storageBucket: "revents-course-a1d87.appspot.com",
  messagingSenderId: "372327924292",
  appId: "1:372327924292:web:ab541e5a8c56506d17b211"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;