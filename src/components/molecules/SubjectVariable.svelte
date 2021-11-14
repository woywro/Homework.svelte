<script lang="ts">
  import Button from "../atoms/Button.svelte";
  import { subjects } from "../../stores.js";
  import { user } from "../../stores";
  import { app, db, auth } from "../../firebase";
  import { updateFirebase } from "../../firebase";

  export let vars;
  function addCurrent() {
    if (vars.max == vars.current) {
    } else {
      vars.current += 1;
      updateFirebase($user, $subjects, "vars", vars.id, {
        current: vars.current,
      });
    }
  }
  function minusCurrent() {
    if (0 >= vars.current) {
    } else {
      vars.current -= 1;
      updateFirebase($user, $subjects, "vars", vars.id, {
        current: vars.current,
      });
    }
  }
</script>

<div>
  <span>
    <h1>{vars.name}</h1>
    <p1>{vars.current}/{vars.max}</p1>
  </span>
  <span>
    <Button on:click="{addCurrent}">+</Button>
    <Button on:click="{minusCurrent}">-</Button>
  </span>
</div>

<style>
  div {
    cursor: pointer;
    padding: 10px;
    border-radius: 20px;
    color: black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: column;
    margin-right: 5px;
    width: 100%;
  }
  span {
    flex-flow: row;
    display: flex;
    width: 80%;
    justify-content: space-around;
    align-items: center;
  }
</style>
