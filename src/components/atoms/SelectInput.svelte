<script>
  export let placeholder;
  export let value;
  export let disabled;
  export let list;
  console.log(list);
</script>

<select
  disabled="{disabled}"
  on:blur
  on:input
  placeholder="{placeholder}"
  bind:value
>
  {#each list as element}
    <option>{element}</option>
  {/each}
</select>

<style>
</style>
