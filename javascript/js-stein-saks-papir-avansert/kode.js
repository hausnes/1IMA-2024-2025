let img_stein = document.getElementById("stein");
let img_saks  = document.getElementById("saks");
let img_papir = document.getElementById("papir");

img_stein.addEventListener("click", velgStein);

let antallKlikk = 0;

function velgStein() { // Denne funksjonen ...
    console.log("Du valgte stein!");
    // alert("Du valgte stein!");

    // Skal fjerne de to andre alternativene
    // img_saks.style.display = "none"; // alternativt block for å vise
    img_saks.style.visibility = "hidden"; // alternativt visible for å vise
} 

// // For å sjå logikken med tilfeldige tall (sjå og bok)
// let tilfeldigTall = Math.random();
// alert(tilfeldigTall);

// // For å sjå logikken med ein enkel if-else
// let alder = 16;

// if (alder >= 18) {
//     alert("Du kan ta sertifikat!");
// } else {
//     alert("Bli eldre..");
// }