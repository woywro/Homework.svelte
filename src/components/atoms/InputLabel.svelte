<script>
  export let inputName;
</script>

<label for="{inputName}"><slot /></label>

<style>
  label {
    margin: 5px;
    font-size: 18px;
  }
</style>
