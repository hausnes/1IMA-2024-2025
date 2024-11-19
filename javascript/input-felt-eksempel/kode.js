let htmlNavn = document.getElementById("inputNavn");
let htmlPassord = document.getElementById("inputPassord");
let htmlFarge = document.getElementById("inputFarge");

let knapp = document.getElementById("knappLagre");

knapp.addEventListener("click", lagre);

function lagre() {
    let navn = htmlNavn.value;
    let passord = htmlPassord.value;
    let farge = htmlFarge.value;

    console.log("Navn: " + navn);
    console.log("Passord: " + passord);
    console.log("Farge: " + farge);
}