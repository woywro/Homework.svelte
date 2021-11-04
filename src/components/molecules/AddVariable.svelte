<script>
import ContentBox from "../atoms/ContentBox.svelte";
import Input from "../atoms/Input.svelte";
import Button from "../atoms/Button.svelte";
let variable;
export let variableArray;
let isDisabled = false;

function addVar() {
  variableArray.length == 2 ? isDisabled = true : isDisabled = false
  let split = variable.split(/-/)
  let varName = split[0];
  let varMin = parseInt(split[1]); 
  let varMax = parseInt(split[2]);
  if(!isNaN(varMin) && !isNaN(varMax) && varMax > varMin){
  let newVar = {
    name: varName, min: varMin, max: varMax
  }
  variableArray = [...variableArray, newVar]
  variable = ''
}
}
function deleteVariable (variable) {
  variableArray = variableArray.filter((e)=> e.name !== variable.name)
}
</script>
<ContentBox>
    <h1>variables</h1>
    <p1>You can add up to 3 variables for one subject e.g.(absences-0-5)</p1>
    <Input bind:value={variable} disabled="{isDisabled}" placeholder={'name-minValue-maxValue'} />
    <Button  disabled="{isDisabled}" on:click={addVar}>+</Button>
    {#each variableArray as variable}
    <span>
    <p1 class="variable" on:click={()=>deleteVariable(variable)}>{variable.name}-{variable.min}-{variable.max} click do delete</p1>
    </span>
    {/each}
</ContentBox>