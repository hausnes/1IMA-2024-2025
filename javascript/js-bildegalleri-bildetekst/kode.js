let bilde = document.getElementById("bilde");
const bildetekst = document.getElementById("bildetekst");

// bilde.src = "bilder/bilde_fjell.jpg";

let bildeGalleriMedTekst = [
    { "bilde" : "bilde_bøker.jpg", "bildeTekst" : "Et flott bilde av bøker." },
    { "bilde" : "bilde_fjell.jpg", "bildeTekst" : "Fjell FTW!" },
    { "bilde" : "bilde_foss.jpg",  "bildeTekst" : "Foss FTW!" },
    { "bilde" : "bilde_frosk.jpg", "bildeTekst" : "Frosk FTW!" },
    { "bilde" : "bilde_hest.jpg",  "bildeTekst" : "Hest FTW!" }
];

console.log(bildeGalleriMedTekst[0].bilde);
console.log(bildeGalleriMedTekst[0].bildeTekst);

// bilde.src = "bilder/" + bildeGalleri[1];

let aktivtBilde = 0;
bilde.src = "bilder/" + bildeGalleriMedTekst[aktivtBilde].bilde;

setInterval(skiftBilde, 1000);

function skiftBilde() {
    aktivtBilde = aktivtBilde + 1;
    
    if (aktivtBilde > bildeGalleriMedTekst.length-1) { // Sjekker om jeg kommer utenfor arrayen, altså ikke noe bilde
        aktivtBilde = 0;
    }
    
    bilde.src = "bilder/" + bildeGalleriMedTekst[aktivtBilde].bilde;
    bildetekst.innerText = bildeGalleriMedTekst[aktivtBilde].bildeTekst;
}