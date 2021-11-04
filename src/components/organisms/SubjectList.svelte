<script>
import { subjects, choosenSubject } from "../stores.js";
import AddTask from "../molecules/AddTask.svelte";
import Subject from "../molecules/Subject.svelte"
</script>

<style>
section{
	display: flex;
	justify-content: center;
	align-items: center;
	flex-flow: column;
	padding-top: 20px;
	background-image: radial-gradient(circle at 1px 1px, var(--main-color) 1px, transparent 0);
    background-size: 25px 25px;
}
  </style>

<section>
{#each $subjects as subject}
<Subject subject={subject}></Subject>
{/each}
<AddTask choosenSubject={$choosenSubject}/>
</section>