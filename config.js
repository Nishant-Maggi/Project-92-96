import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBf3ys3iEc0TxjYNrsylMIdD0fBEYShl18",
    authDomain: "selfmadeapp-a7391.firebaseapp.com",
    projectId: "selfmadeapp-a7391",
    storageBucket: "selfmadeapp-a7391.appspot.com",
    messagingSenderId: "562409287163",
    appId: "1:562409287163:web:cae123a1e48ea6bae46f5e"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();