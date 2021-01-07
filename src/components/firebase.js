import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDcFGzwyKgGueTVMtuzVunJKukVbcPQvnk",
  authDomain: "fir-c271c.firebaseapp.com",
  projectId: "fir-c271c",
  storageBucket: "fir-c271c.appspot.com",
  messagingSenderId: "265644791320",
  appId: "1:265644791320:web:c0a5925b15619bb156956d"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
