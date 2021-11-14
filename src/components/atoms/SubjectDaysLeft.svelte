<script lang="ts">
  export let subject;
  function countDaysLeft() {
    let date = new Date();
    let now = date.getDay();
    let days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    subject.time.forEach((el) => {
      let day = days.indexOf(el.day.toLowerCase());
      let diff = day - now;
      diff = diff < 1 ? 7 + diff : diff;
      subject.left = `${diff}`;
    });
  }
  window.setTimeout(countDaysLeft, 2000);
</script>

<p1>{subject.left} days left</p1>
