<script>
  import ContentBox from "../atoms/ContentBox.svelte";
  import Input from "../atoms/Input.svelte";
  import Button from "../atoms/Button.svelte";
  let variableName;
  let variableMax;
  export let variableArray;
  let isDisabled = false;

  function addVar() {
    variableArray.length == 2 ? (isDisabled = true) : (isDisabled = false);
    let newVar = {
      name: variableName,
      min: 0,
      max: variableMax,
    };
    variableArray = [...variableArray, newVar];
    variableName = "";
    variableMax = "";
  }
  function deleteVariable(variable) {
    variableArray = variableArray.filter((e) => e.name !== variable.name);
  }
</script>

<ContentBox>
  <h1>Subject Variables</h1>
  <Input
    class="margin"
    bind:value="{variableName}"
    disabled="{isDisabled}"
    placeholder="{'variable name'}"
  />
  <Input
    bind:value="{variableMax}"
    disabled="{isDisabled}"
    placeholder="{'variable maximum'}"
  />
  <Button disabled="{isDisabled}" on:click="{addVar}">add variable</Button>
  <span>
    {#each variableArray as variable}
      <ContentBox>
        <p1>{variable.name}</p1>
        <p1>{variable.max}</p1>
        <Button on:click="{() => deleteVariable(variable)}">del</Button>
      </ContentBox>
    {/each}
  </span>
</ContentBox>

<style>
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row;
  }
  h1 {
    margin: 10px;
  }
  .margin {
    margin: 10px;
  }
</style>
