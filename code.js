const display= document.querySelector(".watch");
var begin=0;

const start= setInterval(function clock() {
        begin++;
        display.innerHTML=`<h2>${begin}</h2>`;
    },1000)



function restart() {
    begin=-1;
}
