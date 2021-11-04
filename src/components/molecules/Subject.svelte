<script>
import SubjectInfo from "./SubjectInfo.svelte";
import Button from "../atoms/Button.svelte"
import { subjects, choosenSubject } from "../stores.js";
import Input from "../atoms/Input.svelte"
import SubjectDaysLeft from "../atoms/SubjectDaysLeft.svelte";
import TaskList from "./TaskList.svelte";
import SubjectName from "../atoms/SubjectName.svelte"
import SubjectDay from "../atoms/SubjectDay.svelte";
export let subject;

    function clearDone () {
        subject.tasks = subject.tasks.filter((task) => task.isDone == false)
        $subjects = $subjects
    }

    function defineCurrentSubject () {
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
      let dayIndex = days.indexOf(subject.day.toLowerCase());
      let diff = dayIndex - now;
      if (minutes.toString().length == 1) {
        minutes = `0${minutes}`;
      }
      if (hours.toString().length < 1) {
        hours = `0${hours}`;
      }
      var todayTime = parseInt(`${hours}${minutes}`);
      if (todayTime > parseInt(subject.start) && todayTime < parseInt(subject.end) && diff == 0) {
        $choosenSubject = `auto: ${subject.name}`;
      }
    }
    defineCurrentSubject()

    function deleteSubject() {
      $subjects = $subjects.filter((sub)=> sub !== subject)
    }

</script>
<style>
    section{
    background: var(--secondary-color);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 85%;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 10px;
    display: flex;
    flex-flow: column;
    }
    span{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-flow: row;
        padding: 5px;
    }
  </style>

<section>
    <span>
    <SubjectName >{subject.name}</SubjectName>
    <Button on:click={clearDone}>clear done</Button>
    <Button on:click={()=>deleteSubject(subject)}>x</Button>
</span>
<span>
    {#each subject.vars as v}
    <SubjectInfo vars={v}/>
    {/each}
    </span>
    <span>
    <SubjectDaysLeft subject={subject}/>
    <SubjectDay subject={subject}></SubjectDay>
  </span>
    {#each subject.tasks as task}
  <span>
  <TaskList task={task}/>
  </span>
    {/each}
</section>