<script lang="ts">
  import SubjectVariable from "./SubjectVariable.svelte";
  import Button from "../atoms/Button.svelte";
  import { subjects, choosenSubject } from "../../stores.js";
  import SubjectDaysLeft from "../atoms/SubjectDaysLeft.svelte";
  import Task from "./Task.svelte";
  import SubjectName from "../atoms/SubjectName.svelte";
  import ContentBox from "../atoms/ContentBox.svelte";
  import { user } from "../../stores";
  import { deleteFirebase } from "../../firebase";
  export let subject;

  function clearDone() {
    const subjectTasks = JSON.parse(JSON.stringify(subject.tasks));
    const doneTasks = subjectTasks.filter((task) => task.isDone == true);
    doneTasks.forEach((task) => {
      deleteFirebase($user, "tasks", task.id);
    });
    subject.tasks = subject.tasks.filter((task) => task.isDone == false);
    $subjects = $subjects;
  }

  function defineCurrentSubject() {
    let date = new Date();
    let now = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    subject.time.forEach((e) => {
      let subjectStart = e.start.replace("-", "");
      let subjectEnd = e.end.replace("-", "");
      console.log(subjectStart);
      let dayIndex = days.indexOf(e.day.toLowerCase());
      let diff = dayIndex - now;
      if (minutes.toString().length == 1) {
        minutes = parseInt(`0${minutes}`);
      }
      if (hours.toString().length < 1) {
        hours = parseInt(`0${hours}`);
      }
      var todayTime = parseInt(`${hours}${minutes}`);
      if (
        todayTime > parseInt(subjectStart) &&
        todayTime < parseInt(subjectEnd) &&
        diff == 0
      ) {
        $choosenSubject = `auto: ${subject.name}`;
      }
    });
  }
  defineCurrentSubject();

  function deleteSubject() {
    subject.tasks.forEach((task) => {
      deleteFirebase($user, "tasks", task.id);
    });
    subject.vars.forEach((variable) => {
      deleteFirebase($user, "vars", variable.id);
    });
    subject.time.forEach((day) => {
      deleteFirebase($user, "days", day.id);
    });
    deleteFirebase($user, "subjects", subject.id);
    $subjects = $subjects.filter((sub) => sub !== subject);
  }
</script>

<section>
  <span>
    <Button on:click="{clearDone}">clear done</Button>
    <Button on:click="{() => deleteSubject(subject)}">remove subject</Button>
  </span>
  <ContentBox>
    <span>
      <SubjectName>{subject.name}</SubjectName>
      <SubjectDaysLeft subject="{subject}" />
    </span>
  </ContentBox>
  <span>
    {#each subject.vars as v}
      <SubjectVariable vars="{v}" />
    {/each}
  </span>
  {#each subject.tasks as task}
    <span>
      <Task task="{task}" />
    </span>
  {/each}
</section>

<style>
  section {
    background: var(--secondary-color);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 85%;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 10px;
    display: flex;
    flex-flow: column;
  }
  span {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: row;
    /* padding: 5px; */
  }
</style>
