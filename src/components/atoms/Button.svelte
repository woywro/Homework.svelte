<script>
  export let disabled;
</script>
<style>
button {
background: var(--main-color);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  color: var(--secondary-color);
  cursor: pointer;
  font-size: 18px;
  padding: 8px;
  border: none;
    }
</style>
<button disabled={disabled} on:click><slot/></button>
