<script>
    import { subjects, choosenSubject } from "../stores.js";

   function chooseCurrentSubject() {
      $choosenSubject = this.textContent
    }
</script>
<style>
       h1{
        font-size: 30px;
        border-bottom: var(--main-color) 4px solid;
        padding: 5px;
        cursor: pointer;
    }
</style>
<h1 on:click={chooseCurrentSubject}><slot/></h1>