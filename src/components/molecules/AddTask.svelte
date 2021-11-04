<script>
    import { subjects, choosenSubject } from "../stores.js";
    import Button from "../atoms/Button.svelte"
    import Input from "../atoms/Input.svelte"
    let inputText = ''

    function addTask(){
		let choosen = $subjects.filter((s)=>s.name == $choosenSubject)
		const newTask = {
			  text: inputText,
        isDone: false,
        id: 0,
        date: "",
        left: "",
		}
    if(choosen[0] !== undefined){
    choosen[0].tasks.push(newTask)
    $subjects = $subjects
    }
	}

</script>

<style>
  section{
  background-color: var(--secondary-color);
  position: sticky;
  bottom: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: 20px 10px;
  }
  span{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
  }
  p1{
    padding: 10px;
    background: var(--main-color);
    margin-bottom: 10px;
    color: white;
    font-size: 20px;
  }
</style>

<section>
<p1>{$choosenSubject}</p1>
<span>
  <Button on:click={addTask}>add</Button>
  <Input placeholder="type in your homework" bind:value={inputText} />
</span>
</section>