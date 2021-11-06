<script>
  import AddTime from "../molecules/AddTime.svelte";
  import AddVariable from "../molecules/AddVariable.svelte";
  import Input from "../atoms/Input.svelte";
  import Button from "../atoms/Button.svelte";
  import { subjects } from "../stores.js";
  import InputLabel from "../atoms/InputLabel.svelte";
  import ContentBox from "../atoms/ContentBox.svelte";

  let nameInput = "";
  let variableArray = [];
  let subjectTimeArray = [];
  let newSub = {};
  function addSubject() {
    newSub = {
      name: nameInput,
      id: 1,
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
      console.log("added");
    }
    console.log($subjects);
  }
</script>

<section>
  <InputLabel inputName="name">Name of your subject</InputLabel>
  <Input name="name" bind:value="{nameInput}" placeholder="{'name'}" />
  <AddTime bind:subjectTimeArray />
  <AddVariable bind:variableArray />
  <Button on:click="{addSubject}">add</Button>
</section>

<style>
  section {
    display: flex;
    justify-content: center;
    flex-flow: column;
    padding: 20px;
  }
</style>
