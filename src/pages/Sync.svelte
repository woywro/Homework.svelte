<script>
  import "firebase/auth";
  import { app, db, auth } from "../firebase";
  import { subjects } from "../stores";
  import ContentBox from "../components/atoms/ContentBox.svelte";
  import { user } from "../stores";
  import Button from "../components/atoms/Button.svelte";
  import Input from "../components/atoms/Input.svelte";
  import { navigate } from "svelte-routing";
  import { onMount } from "svelte";
  import PageTitle from "../components/atoms/PageTitle.svelte";
  import InputLabel from "../components/atoms/InputLabel.svelte";
  let error = null;
  let emailInput;
  let passwordInput;

  const logout = () => {
    auth.signOut();
    $subjects = [];
  };

  const loginWithEmailPassword = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

  export const loginHandler = async () => {
    try {
      error = null;
      console.log("trying");
      // await loginWithEmailPassword(emailInput, passwordInput);
      await loginWithEmailPassword("woywro@gmail.com", "rrreee");
      emailInput = "";
      passwordInput = "";
    } catch (err) {
      error = err;
    }
  };
</script>

<div>
  <PageTitle>Sync data</PageTitle>
  <ContentBox>
    <form>
      <Input placeholder="email" bind:value="{emailInput}" />
      <input
        type="password"
        placeholder="password"
        bind:value="{passwordInput}"
      />
      <Button type="submit" on:click="{loginHandler}">zaloguj</Button>
      <Button on:click="{logout}">logout</Button>
    </form>
  </ContentBox>
</div>

<style>
  div {
    background: var(--primary-color);
    height: 50vh;
    width: 100vw;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: column;
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    margin: 20px;
  }
</style>
