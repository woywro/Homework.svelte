import firebase from "firebase";
import "firebase/auth";
const firebaseConfig = {


  };

  export const app = firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();

  export const db = firebase.firestore();


  export function updateFirebase (user, subjects, collection, document, toUpdate) {
    db.collection("users/" + user + `/${collection}`)
    .doc(document)
    .update(toUpdate);
  subjects = subjects;
  }

  export function setFirebase (user, subjects, collection, toSet) {
      db.collection("users").doc(user).collection(`/${collection}`).doc().set(toSet);
      subjects = subjects;
  }

  export function deleteFirebase (user, collection, toDelete) {
    db.collection("users")
    .doc(user)
    .collection(`/${collection}`)
    .doc(toDelete)
    .delete();
  }
