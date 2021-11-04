<script>
import SubjectList from "../components/organisms/SubjectList.svelte";
import HeaderLogo from "../components/atoms/HeaderLogo.svelte";
</script>
<style>
    div{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-flow: column;
    }
</style>
<div>
    <HeaderLogo />
    <SubjectList />
</div>

