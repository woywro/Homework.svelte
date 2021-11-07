<script>
  import { info } from "../stores";
  import { fade } from "svelte/transition";
  let message = "messages will be here";
  let visible = true;
  function shuffleMessage() {
    const messageIndex = Math.round(Math.random() * ($info.length - 1));
    message = $info[messageIndex];
  }
  window.setInterval(shuffleMessage, 4000);
</script>

{#key message}
  <p1 in:fade="{{ duration: 1200 }}">{message}</p1>
{/key}

<style>
  p1 {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
