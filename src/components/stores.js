import { writable } from "svelte/store";

const stored = localStorage.subjects;

if (localStorage.subjects == undefined) {
  localStorage.setItem(
    "subjects",
    JSON.stringify([
      {
        name: "ABC IT",
        day: "wednesday",
        id: 1,
        left: 0,
        start: "0905",
        end: "1200",
        vars: [
          { name: "Absences", min: 1, max: 3 },
          { name: "plus", min: 1, max: 10 },
        ],
        tasks: [
          {
            text: "zrobic excela",
            isDone: true,
            date: "",
            left: "",
          },
          {
            text: "c# kalkulator",
            isDone: false,
            date: "",
            left: "",
          },
          {
            text: "js oop ex.2",
            isDone: false,
            date: "",
            left: "",
          },
        ],
      },
      {
        name: "Angielski",
        day: "tuesday",
        id: 2,
        left: 0,
        start: "0800",
        end: "0930",
        vars: [{ name: "absence", min: 0, max: 5 }],
        tasks: [
          {
            text: "zrobic wb9/a,b,c",
            isDone: false,
            date: "",
            left: "",
          },
          {
            text: "słówka sb5/22",
            isDone: false,
            date: "",
            left: "",
          },
        ],
      },
      {
        name: "Polski",
        day: "monday",
        id: 3,
        left: 1,
        vars: [
          { name: "minusy", min: 0, max: 2 },
          { name: "lektury", min: 0, max: 5 },
          { name: "plusy", min: 0, max: 10 },
        ],
        tasks: [
          {
            text: "rozprawka",
            isDone: false,
            date: "",
            left: "",
          },
          {
            text: "przeczytać tekst zad1/122",
            isDone: false,
            date: "",
            left: "",
          },
        ],
      },
    ])
  );
}

export const subjects = writable(JSON.parse(stored));

subjects.subscribe((value) => (localStorage.subjects = JSON.stringify(value)));

export const choosenSubject = writable("choose subject");

export const theme = writable("#ffd230");
