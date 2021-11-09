<script>
  import firebase from "firebase";
  import "firebase/auth";
  import { app, db, auth } from "../firebase";
  import { subjects } from "../components/stores";
  import { user } from "../components/stores";
  import Button from "../components/atoms/Button.svelte";
  import Input from "../components/atoms/Input.svelte";
  import { navigate } from "svelte-routing";
  import { onMount } from "svelte";
  import HeaderLogo from "../components/atoms/HeaderLogo.svelte";
  let error = null;
  let emailInput;
  let passwordInput;

  const getData = () => {
    db.collection("users/" + $user + "/subjects")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          const data = doc.data();
          console.log(doc.id);
          data.id = doc.id;
          $subjects.push(data);
          $subjects = $subjects;
        });
      });
    db.collection("users/" + $user + "/tasks")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          $subjects.forEach((subject) => {
            const data = doc.data();
            if (subject.name == data.parent) {
              data.id = doc.id;
              subject.tasks.push(data);
              $subjects = $subjects;
            }
          });
        });
      });
    db.collection("users/" + $user + "/days")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          $subjects.forEach((subject) => {
            const data = doc.data();
            if (subject.name == data.parent) {
              data.id = doc.id;
              subject.time.push(data);
              $subjects = $subjects;
            }
          });
        });
      });
  };

  const loginWithEmailPassword = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

  auth.onAuthStateChanged(async (fireUser) => {
    if (fireUser) {
      console.log("state changed");
      $user = fireUser.uid;
      const token = await fireUser.getIdTokenResult();
      $subjects = [];
      getData();
      navigate("/");
    } else {
      $user = "";
    }
  });

  export const loginHandler = async () => {
    try {
      error = null;
      console.log("trying");
      await loginWithEmailPassword(emailInput, passwordInput);
    } catch (err) {
      error = err;
    }
  };
</script>

<div>
  <p1>niezalogowany</p1>
  <Input placeholder="email" bind:value="{emailInput}" />
  <Input placeholder="password" bind:value="{passwordInput}" />
  <Button on:click="{loginHandler}">zaloguj</Button>
</div>

<style>
  div {
    background: var(--secondary-color);
    height: 100vh;
    width: 100vw;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
  }
</style>
