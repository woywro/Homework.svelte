<script>
  import { Router, Link, Route } from "svelte-routing";
  import Sync from "./pages/Sync.svelte";
  export let url = "";
  import Home from "./pages/Home.svelte";
  import { navigate } from "svelte-routing";
  import AddSubject from "./pages/AddSubject.svelte";
  import { subjects, user } from "./stores";
  import Button from "./components/atoms/Button.svelte";
  import { app, db, auth } from "./firebase";
  // import { getData } from "./pages/Sync.svelte";

  export const getData = () => {
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
    db.collection("users/" + $user + "/vars")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          $subjects.forEach((subject) => {
            const data = doc.data();
            if (subject.name == data.parent) {
              data.id = doc.id;
              subject.vars.push(data);
              $subjects = $subjects;
            }
          });
        });
      });
  };

  auth.onAuthStateChanged(async (fireUser) => {
    if (fireUser) {
      console.log("state changed");
      $user = fireUser.uid;
      // $subjects = [];
      navigate("/");
      getData();
    } else {
      $user = "";
    }
  });
</script>

<Router url="{url}">
  <div>
    {#if $user !== ""}
      <p>logged in {$user}</p>
    {/if}
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="add">Add Subject</Link>
        <Link to="sync">sync</Link>
      </nav>
      <div>
        <Route path="/" component="{Home}" />
        <Route path="add" component="{AddSubject}" />
        <Route path="sync" component="{Sync}" />
      </div>
    </div>
  </div>
</Router>

<style>
  :global(*) {
    padding: 0;
    box-sizing: border-box;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  :global(body) {
    --main-color: #32de84;
    --secondary-color: #eeeeee;
    padding: 0;
  }
  nav {
    background: var(--secondary-color);
    width: 100vw;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  :global(a) {
    padding: 5px 10px;
  }
  p {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
