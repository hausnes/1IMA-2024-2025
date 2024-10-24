// Dette er en kommentar.
/*
    Dette er en 
    kommentar
    over flere linjer.
*/
alert("Heisann!"); // Dette får frem en pop-up
console.log("Dette er en utskrift til console.log!");

// Spør etter navnet til den besøkende, og skriver ut
let navn = prompt("Hva heter du?");
console.log(navn);
document.getElementById("utskrift").innerText = "Hei, " + navn + "!";

// Oppgave: Spør om hobby, og skriv ut til en paragraf i HTML.
let hobby = prompt("Fortell meg en av dine hobbyer: ");
document.getElementById("utskrift_hobby").innerText = "Din favoritthobby er: " + hobby + ".";

// Spør brukeren om fødselsår, og regn deretter ut hvor gammel hen er.
let fodselsaar = prompt("I hvilket år ble du født?");
let tid = new Date();
let alder = tid.getFullYear() - fodselsaar;
document.getElementById("utskrift_alder").innerText = "Du er " + alder + " år gammel.";

// Vi spør om favorittfarge, og endrer body sin background-color
let farge = prompt("Favorittfarge (engelsk fargenavn, RGB): ");
// document.body.style.backgroundColor = farge; // Snarveg
document.querySelector("body").style.backgroundColor = farge; // JB sin anbefaling
// document.getElementById("kroppen").style.backgroundColor = farge; // MÅ ha en ID

// Vi spør om favorittFARGER (2 stk) og setter deretter en linear gradient
let farger = prompt("Skriv inn 2 farger, separert med komma:");
document.querySelector("body").style.background = "linear-gradient(" + farger + ")";