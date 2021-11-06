<script>
  import { Router, Link, Route } from "svelte-routing";
  export let url = "";
  import Home from "./pages/Home.svelte";
  import AddSubject from "./pages/AddSubject.svelte";
</script>

<Router url="{url}">
  <nav>
    <Link to="/">Home</Link>
    <Link to="add">Add Subject</Link>
  </nav>
  <div>
    <Route path="/" component="{Home}" />
    <Route path="add" component="{AddSubject}" />
  </div>
</Router>

<style>
  :global(*) {
    padding: 0;
    box-sizing: border-box;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  :global(body) {
    --main-color: #32de84;
    --secondary-color: #eeeeee;
    padding: 0;
  }
  nav {
    background: var(--secondary-color);
    width: 100vw;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  :global(a) {
    padding: 5px 10px;
  }
</style>
