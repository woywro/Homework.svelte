<script>
    import Button from "../atoms/Button.svelte"
        import { subjects } from "../stores.js";
        export let vars;
      function addCurrent () {
          if(vars.max == vars.min){
            
          }else{
            vars.min += 1
            $subjects = $subjects
          }
      }
      function minusCurrent () {
        if(0 >= vars.min){
            
        }else{
          vars.min -= 1
          $subjects = $subjects
        }
      }
</script>
<style>
    section{
        cursor: pointer;
        padding: 10px;
        border-radius: 20px;
        color: black;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-flow: column;
        margin-right: 5px;
        width: 100%;
    }
    span{
        flex-flow: row;
        display: flex;
        width: 80%;
        justify-content: space-around;
        align-items: center;
    }
</style>

<section>
    <span>
    <h1>{vars.name}</h1>
    <p1>{vars.min}/{vars.max}</p1>
    </span>
<span>
    <Button on:click={addCurrent}>+</Button>
    <Button on:click={minusCurrent}>-</Button>
</span>
</section>