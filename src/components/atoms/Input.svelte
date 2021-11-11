<script>
  export let placeholder;
  export let value;
  export let disabled;
</script>

<input
  disabled="{disabled}"
  on:blur
  bind:value
  on:input
  on:click
  placeholder="{placeholder}"
/>

<style>
  input {
    margin: 5px;
    border: none;
    background: rgba(255, 255, 255, 0.7);
    border-bottom: var(--main-color) 3px solid;
    padding: 10px 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
</style>
