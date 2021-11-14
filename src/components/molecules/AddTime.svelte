<script lang="ts">
  import Button from "../atoms/Button.svelte";
  import SelectInput from "../atoms/SelectInput.svelte";
  import TimeInput from "../atoms/TimeInput.svelte";
  import ContentBox from "../atoms/ContentBox.svelte";

  export let subjectTimeArray;
  let dayInput = "monday";
  let startInput: number;
  let endInput: number;

  function addSubjectDay() {
    subjectTimeArray = [
      ...subjectTimeArray,
      { day: dayInput, start: startInput, end: endInput },
    ];
  }
</script>

<ContentBox>
  <h1>Subject Time</h1>
  <div>
    <label for="day">day</label>
    <SelectInput
      list="{[
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
      ]}"
      name="day"
      bind:value="{dayInput}"
      placeholder="{'day'}"
    />
  </div>
  <span>
    <div>
      <label for="start">start</label>
      <TimeInput
        name="start"
        bind:value="{startInput}"
        placeholder="{'start'}"
      />
    </div>
    <div>
      <label for="end">end</label>
      <TimeInput name="end" bind:value="{endInput}" placeholder="{'end'}" />
    </div>
  </span>
  <Button on:click="{addSubjectDay}">add subject day</Button>
  {#each subjectTimeArray as element}
    <ContentBox>
      <p1>{element.day}</p1>
      <p1>{element.start}</p1>
      <p1>{element.end}</p1>
    </ContentBox>
  {/each}
</ContentBox>

<style>
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: column;
    height: 10vh;
  }
  div label {
    font-size: 18px;
  }
  span {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
</style>
