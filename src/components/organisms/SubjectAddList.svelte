<script>
  import AddTime from "../molecules/AddTime.svelte";
  import AddVariable from "../molecules/AddVariable.svelte";
  import Input from "../atoms/Input.svelte";
  import Button from "../atoms/Button.svelte";
  import { subjects } from "../stores.js";
  import InputLabel from "../atoms/InputLabel.svelte";
  import ContentBox from "../atoms/ContentBox.svelte";
  import { Router, Link, Route, navigate } from "svelte-routing";
  import { app, db, auth } from "../../firebase";
  import { user } from "../stores";

  let nameInput = "";
  let variableArray = [];
  let subjectTimeArray = [];
  let newSub = {};

  function addSubjectDaysFirebase() {
    subjectTimeArray.forEach((element) => {
      db.collection("users").doc($user).collection("days").doc().set({
        parent: nameInput,
        day: element.day,
        start: element.start,
        end: element.end,
      });
      $subjects = $subjects;
    });
  }

  function addSubjectFireBase() {
    db.collection("users")
      .doc($user)
      .collection("subjects")
      .doc()
      .set({
        name: nameInput,
        left: "",
        time: [],
        vars: [],
        tasks: [],
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  }
  function addSubject() {
    newSub = {
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
    }
    console.log($subjects);
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
