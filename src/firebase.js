import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAYkX0nRl_2xd2yCWS_n73j33G6sSG28y0",
    authDomain: "reels-instagram.firebaseapp.com",
    databaseURL: "https://reels-instagram.firebaseio.com",
    projectId: "reels-instagram",
    storageBucket: "reels-instagram.appspot.com",
    messagingSenderId: "471143317752",
    appId: "1:471143317752:web:76375f364c1841eecebb0d",
    measurementId: "G-Q57YZNX5LV"
  };


const firebaseApp= firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db; 
