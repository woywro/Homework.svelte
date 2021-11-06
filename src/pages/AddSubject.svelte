<script>
  import SubjectAddList from "../components/organisms/SubjectAddList.svelte";
  import PageTitle from "../components/atoms/PageTitle.svelte";
</script>

<div>
  <PageTitle>Add Subject</PageTitle>
  <SubjectAddList />
</div>

<style>
  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
  }
</style>
