// Name : Devarsh Patel
// File : main.js
// Date : 2024-07-26
// Description: Object building practice exercise For MDN Docs: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_building_practice#lets_bounce_some_balls

// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}
