 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyD3yt71PV8VFbX_H7qxrvx2EPLP1Nm5EpQ",
    authDomain: "fire-app-3b2b5.firebaseapp.com",
    databaseURL: "https://fire-app-3b2b5.firebaseio.com",
    projectId: "fire-app-3b2b5",
    storageBucket: "fire-app-3b2b5.appspot.com",
    messagingSenderId: "286239156917",
    appId: "1:286239156917:web:3378fba7d04d76e3be2cfc",
    measurementId: "G-30KMBKD41W"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  //autenticación
  const auth = firebase.auth();
//database
  const db = firebase.firestore();
  //funciones
  const func = firebase.functions();

