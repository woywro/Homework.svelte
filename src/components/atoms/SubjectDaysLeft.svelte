<script>
    import { subjects, choosenSubject } from "../stores.js";
    export let subject;
function countDaysLeft() {
    $subjects.forEach((subject) => {
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
      let day = days.indexOf(subject.day.toLowerCase());
      let diff = day - now;
      diff = diff < 1 ? 7 + diff : diff;
      subject.left = `${diff}`;
    });
    }
    countDaysLeft()
</script>

<p1>{subject.left} days left</p1>