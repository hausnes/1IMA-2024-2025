let bilde = document.getElementById("bilde");

// bilde.src = "bilder/bilde_fjell.jpg";

let bildeGalleri = [
    "bilde_bøker.jpg",
    "bilde_fjell.jpg",
    "bilde_foss.jpg",
    "bilde_frosk.jpg",
    "bilde_hest.jpg"
];

// bilde.src = "bilder/" + bildeGalleri[1];

let aktivtBilde = 0;
bilde.src = "bilder/" + bildeGalleri[aktivtBilde];

setInterval(skiftBilde, 1000);

function skiftBilde() {
    aktivtBilde = aktivtBilde + 1;
    
    if (aktivtBilde > bildeGalleri.length-1) { // Sjekker om jeg kommer utenfor arrayen, altså ikke noe bilde
        aktivtBilde = 0;
    }
    
    bilde.src = "bilder/" + bildeGalleri[aktivtBilde];
}