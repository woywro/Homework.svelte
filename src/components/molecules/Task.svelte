<script lang="ts">
  import { subjects, user } from "../../stores.js";
  import Input from "../atoms/Input.svelte";
  import Checkbox from "../atoms/Checkbox.svelte";
  import { updateFirebase } from "../../firebase";

  export let task;
  function updateInput() {
    updateFirebase($user, $subjects, "tasks", task.id, { text: task.text });
  }

  function toggleDone(task) {
    updateFirebase($user, $subjects, "tasks", task.id, { isDone: task.isDone });
  }

  function getNumberOfDays(start: string, end: string) {
    const date1 = new Date(start);
    const date2 = new Date(end);
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = date2.getTime() - date1.getTime();
    const diffInDays = Math.round(diffInTime / oneDay);
    return diffInDays;
  }

  function checkInputForDeadline(task) {
    if (task.text.includes("(")) {
      let regExp = /\(([^)]+)\)/;
      let matches = regExp.exec(task.text);
      let matchesClear = matches[0].replace(/[{()}]/g, "");
      task.date = matchesClear;
      let date = new Date();
      let taskDateSplit = task.date.split(/-/);
      let taskDay = parseInt(taskDateSplit[0]);
      let taskMonth = parseInt(taskDateSplit[1]);
      let taskYear = parseInt(taskDateSplit[2]);
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let startDate = `${month}/${day}/${year}`;
      let endDate = `${taskMonth}/${taskDay}/${taskYear}`;
      task.left = getNumberOfDays(startDate, endDate);
      $subjects = $subjects;
    } else {
      task.left = "";
    }
  }
</script>

<div>
  {#if task.left !== ""}
    <p1>{task.left}</p1>
  {/if}
  <span>
    <Input
      bind:value="{task.text}"
      on:blur="{() => {
        checkInputForDeadline(task);
        updateInput();
      }}"
      disabled="{task.isDone}"
    />
    <Checkbox
      bind:checked="{task.isDone}"
      on:change="{() => toggleDone(task)}"
    />
  </span>
</div>

<style>
  div {
    width: 100%;
    padding: 5px 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    background: var(--main-color);
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  span {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
  }
</style>
