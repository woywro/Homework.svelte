<script>
import { Router, Link, Route } from "svelte-routing";
export let url = "";
import Home from "./pages/Home.svelte";
import AddSubject from "./pages/AddSubject.svelte";

</script>
<style>
    :global(*) {
		padding: 0;
        box-sizing: border-box;
        margin: 0;
	}
  :global(body){
   --main-color: #32de84;
   --secondary-color: #eeeeee;

  }
  nav{
    background: var(--secondary-color);
    width: 100%;
    bottom: top;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
  }
  :global(a){
    background: var(--main-color);
    border-radius: 20px;
    padding: 5px 10px;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>

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