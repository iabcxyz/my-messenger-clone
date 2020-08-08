import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

        apiKey: "AIzaSyBCB9TSIsrnQpCt9_u5jBa0LqLYXbRyQzw",
        authDomain: "my-messenger-clone.firebaseapp.com",
        databaseURL: "https://my-messenger-clone.firebaseio.com",
        projectId: "my-messenger-clone",
        storageBucket: "my-messenger-clone.appspot.com",
        messagingSenderId: "112632848182",
        appId: "1:112632848182:web:e009bede81e0661e8f1d97"
      
});

const db = firebaseApp.firestore();

export default db;