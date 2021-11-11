import { readable, writable } from "svelte/store";

// const stored = localStorage.subjects;

export const subjects = writable([
      // {
      //   name: "ABC IT",
      //   time: [{ day: "saturday", start: "1100", end: "2000" }],
      //   id: 1,
      //   left: 0,
      //   vars: [
      //     { name: "Absences", min: 1, max: 3 },
      //     { name: "plus", min: 1, max: 10 },
      //   ],
      //   tasks: [
      //     {
      //       text: "zrobic excela",
      //       isDone: true,
      //       date: "",
      //       left: "",
      //     },
      //     {
      //       text: "c# kalkulator",
      //       isDone: false,
      //       date: "",
      //       left: "",
      //     },
      //     {
      //       text: "js oop ex.2",
      //       isDone: false,
      //       date: "",
      //       left: "",
      //     },
      //   ],
      // },
      // {
      //   name: "Angielski",
      //   time: [{ day: "tuesday", start: "1200", end: "1400" }],
      //   id: 2,
      //   left: 0,
      //   vars: [{ name: "absence", min: 0, max: 5 }],
      //   tasks: [
      //     {
      //       text: "zrobic wb9/a,b,c",
      //       isDone: false,
      //       date: "",
      //       left: "",
      //     },
      //     {
      //       text: "słówka sb5/22",
      //       isDone: false,
      //       date: "",
      //       left: "",
      //     },
      //   ],
      // },
      // {
      //   name: "Polski",
      //   time: [{ day: "sunday", start: "1200", end: "1400" }],
      //   id: 3,
      //   left: 1,
      //   vars: [
      //     { name: "minusy", min: 0, max: 2 },
      //     { name: "lektury", min: 0, max: 5 },
      //     { name: "plusy", min: 0, max: 10 },
      //   ],
      //   tasks: [
      //     {
      //       text: "rozprawka",
      //       isDone: false,
      //       date: "",
      //       left: "",
      //     },
      //     {
      //       text: "przeczytać tekst zad1/122",
      //       isDone: false,
      //       date: "",
      //       left: "",
      //     },
      //   ],
      // },
  ]);

// export const subjects = writable(JSON.parse(stored));

// subjects.subscribe((value) => (localStorage.subjects = JSON.stringify(value)));

export const choosenSubject = writable("choose subject");

export const theme = writable("#ffd230");

export const info = readable(["Click on subject name to add homework", "Hi, how are you?", "Set homework deadline by adding it in"])

export let user = writable("")

export let isCompleted = writable(false)