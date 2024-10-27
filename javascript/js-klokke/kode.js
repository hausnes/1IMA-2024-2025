/*
Vi ser først på hva dette resulterer i, i fellesskap:
let tid = new Date();
document.getElementById("utskrift").innerText = tid; 

Oppgave 1:
 - Ein annan formatering på utskrifta. 
   Hint: getFullYear() ... fra når me rekna ut alderen når brukeren skreiv inn fødselsår

Oppgave 2: 
 - Få klokka til å auto-oppdatere seg kvart sekund.
   Hint: intervall og W3Schools

*/

// Oppgåve 1 - eksperimentering
//let tid = new Date();
//document.getElementById("utskrift").innerText = tid; 

// console.log(tid.getHours());
// console.log(tid.getMinutes());
// console.log(tid.getSeconds());

// console.log(tid.getHours() + " h : " + tid.getMinutes() + " m : " + tid.getSeconds() + " s");

// Oppgåve 2 - å få all koden over til å køyre automatisk kvart sekund
// Kilde: https://www.w3schools.com/js/js_timing.asp

setInterval(hvertSekund, 1000);

function hvertSekund() {
    let tid = new Date();
    document.getElementById("utskrift").innerText = tid.getHours() + " h : " + tid.getMinutes() + " m : " + tid.getSeconds() + " s";
}