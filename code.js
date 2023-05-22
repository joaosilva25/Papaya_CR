const display = document.querySelector(".watch");
const init = document.querySelector(".play");
var sec = 0;
var min = 0;
var start;
var minformatted = min.toString().padStart(2,'0')
var secformatted = sec.toString().padStart(2, '0');

function iniciar() {
  start = setInterval(function clock() {
    sec++;
    secformatted = sec.toString().padStart(2, '0');
    display.innerHTML = `<h2>${min}:${secformatted}</h2>`;

    if (sec >= 60) {
      min++;
      sec = 0;
      secformatted = sec.toString().padStart(2, '0');
      display.innerHTML = `<h2>${min}:${secformatted}</h2>`;
    }
  }, 100);
}

function restart() {
  sec = -1;
  min = 0;
  secformatted = sec.toString().padStart(2, '0');
  minformatted= min.toString().padStart(2,'0');
}

function dispar() {
  clearInterval(start);
}