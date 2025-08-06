// script.js
const phrases = [
  "Turn Your Restaurant Data Into Profit",
  "Track Sales. Slash Waste. Boost Revenue.",
  "The Data Dish: Analytics for Real Growth"
];

let i = 0;
let j = 0;
let isDeleting = false;
let currentPhrase = '';
let typewriter = document.getElementById("typewriter");

function type() {
  currentPhrase = phrases[i];
  typewriter.textContent = currentPhrase.slice(0, j);

  if (!isDeleting && j < currentPhrase.length) {
    j++;
    setTimeout(type, 100);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      i = (i + 1) % phrases.length;
    }
    setTimeout(type, 1000);
  }
}

document.addEventListener("DOMContentLoaded", type);