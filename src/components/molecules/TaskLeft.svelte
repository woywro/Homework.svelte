<script>
  import { subjects, choosenSubject } from "../stores.js";

  function getNumberOfDays(start, end) {
    const date1 = new Date(start);
    const date2 = new Date(end);
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = date2.getTime() - date1.getTime();
    const diffInDays = Math.round(diffInTime / oneDay);
    return diffInDays;
  }

  function checkInputForDeadline(task) {
    if (task.text.includes("(")) {
      let regExp = /\(([^)]+)\)/;
      let matches = regExp.exec(task.text);
      let matchesClear = matches[0].replace(/[{()}]/g, "");
      task.date = matchesClear;
      let date = new Date();
      let taskDateSplit = task.date.split(/-/);
      let taskDay = parseInt(taskDateSplit[0]);
      let taskMonth = parseInt(taskDateSplit[1]);
      let taskYear = parseInt(taskDateSplit[2]);
      let day = parseInt(date.getDate());
      let month = parseInt(date.getMonth() + 1);
      let year = parseInt(date.getFullYear());
      let startDate = `${month}/${day}/${year}`;
      let endDate = `${taskMonth}/${taskDay}/${taskYear}`;
      task.left = getNumberOfDays(startDate, endDate);
      $subjects = $subjects;
    } else {
      task.left = "";
      console.log(task);
    }
  }
  checkInputForDeadline(task);
</script>
