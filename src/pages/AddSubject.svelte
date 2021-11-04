<script>
    import Input from "../components/atoms/Input.svelte";
    import Button from "../components/atoms/Button.svelte";
    import { subjects } from "../components/stores.js"; 
    import AddVariable from "../components/molecules/AddVariable.svelte"

    let name = '';
    let day = '';
    let start = '';
    let end = '';
    let variableArray = [];
  function addSubject() {
	  const newSub = {
    name: name,
    day: day,
    id: 1,
    left: 0,
    start: start,
    end: end,
    vars: variableArray,
    tasks: [],
    }
    if(newSub.name == ''|| newSub.day == ''|| newSub.start == ''|| newSub.end == ''){
      console.log('wpisz coś')
    }else{
      $subjects = [...$subjects, newSub]
      console.log('added')
    }
}

</script>
<style>
    section{
        display: flex;
        justify-content: center;
        flex-flow: column;
        padding: 20px;
    }
    div{
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-flow: column;
      height: 10vh;
    }
    div label{
      font-size: 18px;
    }
</style>

<section>
<h1>Add Subject</h1>
<div>
<label for="name">name (math-polish)</label>
<Input name="name" bind:value={name} placeholder={'name'}/>
</div>
<div>
<label for="day">day (monday-sunday)</label>
<Input name="day" bind:value={day} placeholder={'day'}/>
</div>
<div>
<label for="start">start (12:00 is 1200)</label>
<Input name="start" bind:value={start} placeholder={'start'}/>
</div>
<div>
<label for="end">end (16:30 is 1630)</label>
<Input name="end" bind:value={end} placeholder={'end'}/>
</div>
<AddVariable bind:variableArray={variableArray} />
<Button on:click={addSubject}>add</Button>
</section>

