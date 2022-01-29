import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBQ2D_-4Hh3csuAuTaE6UI_jTMzl26MYtM",
    authDomain: "react-firebase-b3e11.firebaseapp.com",
    projectId: "react-firebase-b3e11",
    storageBucket: "react-firebase-b3e11.appspot.com",
    messagingSenderId: "553909605002",
    appId: "1:553909605002:web:fe2ca25ca57abb84e09373",
    measurementId: "G-2913SGWQGM"
  };

  var fire = firebase.initializeApp(firebaseConfig);

  export default fire;