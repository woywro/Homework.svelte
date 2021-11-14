<script>
  import { choosenSubject } from "../../stores.js";

  function chooseCurrentSubject() {
    $choosenSubject = this.textContent;
  }
</script>

<h1 on:click="{chooseCurrentSubject}"><slot /></h1>

<style>
  h1 {
    font-size: 30px;
    border-bottom: var(--main-color) 4px solid;
    padding: 5px;
    cursor: pointer;
  }
</style>
