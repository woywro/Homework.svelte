<script>
  import SubjectList from "../components/organisms/SubjectList.svelte";
  import PageTitle from "../components/atoms/PageTitle.svelte";
  import HeaderLogo from "../components/atoms/HeaderLogo.svelte";
</script>

<div>
  <HeaderLogo />
  <PageTitle>Subject List</PageTitle>
  <SubjectList />
</div>

<style>
  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
  }
</style>
