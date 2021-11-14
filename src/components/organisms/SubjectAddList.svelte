<script lang="ts">
  import AddTime from "../molecules/AddTime.svelte";
  import AddVariable from "../molecules/AddVariable.svelte";
  import Input from "../atoms/Input.svelte";
  import Button from "../atoms/Button.svelte";
  import { subjects } from "../../stores.js";
  import InputLabel from "../atoms/InputLabel.svelte";
  import { navigate } from "svelte-routing";
  import { user } from "../../stores";
  import { setFirebase } from "../../firebase";

  let nameInput: string;
  let variableArray = [];
  let subjectTimeArray = [];

  function addSubjectDaysFirebase() {
    subjectTimeArray.forEach((element) => {
      setFirebase($user, $subjects, "days", {
        parent: nameInput,
        day: element.day,
        start: element.start,
        end: element.end,
      });
    });
  }
  function addSubjectVarsFirebase() {
    variableArray.forEach((element) => {
      setFirebase($user, $subjects, "vars", {
        parent: nameInput,
        name: element.name,
        current: 0,
        max: element.max,
      });
    });
  }
  function addSubjectFireBase() {
    setFirebase($user, $subjects, "subjects", {
      name: nameInput,
      left: "",
      time: [],
      vars: [],
      tasks: [],
    });
  }
  function addSubject() {
    let newSub = {
      name: nameInput,
      left: 0,
      time: subjectTimeArray,
      vars: variableArray,
      tasks: [],
    };
    if (
      newSub.name == "" ||
      newSub.day == "" ||
      newSub.start == "" ||
      newSub.end == ""
    ) {
      console.log("wpisz coś");
    } else {
      $subjects = [...$subjects, newSub];
      addSubjectFireBase();
      addSubjectDaysFirebase();
      addSubjectVarsFirebase();
    }
    navigate("/", { replace: true });
  }
</script>

<section>
  <InputLabel inputName="name">Name of your subject</InputLabel>
  <Input name="name" bind:value="{nameInput}" placeholder="{'name'}" />
  <AddTime bind:subjectTimeArray nameInput="{nameInput}" />
  <AddVariable bind:variableArray />
  <Button on:click="{addSubject}">add</Button>
</section>

<style>
  section {
    display: flex;
    justify-content: center;
    flex-flow: column;
    width: 100%;
    padding: 30px;
  }
</style>
