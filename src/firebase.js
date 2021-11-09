import firebase from "firebase";
import "firebase/auth";
const firebaseConfig = {

  };

  export const app = firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();

  export const db = firebase.firestore();

  console.log(app);