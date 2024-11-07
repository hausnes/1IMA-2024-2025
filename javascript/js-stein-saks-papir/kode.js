let img_stein = document.getElementById("stein");
let img_saks  = document.getElementById("saks");
let img_papir = document.getElementById("papir");

img_stein.addEventListener("click", velgStein);
img_saks.addEventListener("click", velgSaks);
img_papir.addEventListener("click", velgPapir);

let valgBruker = ""; // Variabel for å lagre om brukeren velger stein, saks eller papir - per nå tom string.

function velgStein() { // Denne funksjonen setter brukeren sitt valg til "stein"
    console.log("Du valgte stein!");
    valgBruker = "stein";

    // Dersom du ynskjer å fjerne dei to andre alternativa
    // img_saks.style.display = "none"; // alternativt block for å vise
    // img_saks.style.visibility = "hidden"; // alternativt visible for å vise
    // img_papir.style.visibility = "hidden";

    sjekkResultat();
}

function velgSaks() { // Denne funksjonen setter brukeren sitt valg til "stein"
    console.log("Du valgte saks!");
    valgBruker = "saks";

    sjekkResultat();
}

function velgPapir() { // Denne funksjonen setter brukeren sitt valg til "stein"
    console.log("Du valgte papir!");
    valgBruker = "papir";

    sjekkResultat();
}

function sjekkResultat() {
    // Lar datamaskinen ta et valg
    let valgDatamaskin = Math.floor(Math.random()*3); // Genererer eit tilfeldig tal mellom 0 og 2
    // Oversetter tal til stein, saks eller papir
    let arrayValg = ["stein","saks","papir"];
    valgDatamaskin = arrayValg[valgDatamaskin];
    console.log("Datamaskina valte " + valgDatamaskin);

    // Ein eigen variabel for å lagre resultatutskrifta, som gjer siste linja enklare.
    let resultat = "";

    // Sjekker resultatet, først alt som resulterer i uavgjort
    if (valgBruker == valgDatamaskin) {
        console.log("Uavgjort.");
        resultat = "Uavgjort!";
    }
    // Sjekker deretter alle alternativa som gjer at brukaren vinn (3 stk)
    else if (valgBruker == "stein" && valgDatamaskin == "saks") {
        console.log("Spelaren vant!");
        resultat = "Spelaren vant!";
    }
    else if (valgBruker == "saks" && valgDatamaskin == "papir") {
        console.log("Spelaren vant!");
        resultat = "Spelaren vant!";
    }
    else if (valgBruker == "papir" && valgDatamaskin == "stein") {
        console.log("Spelaren vant!");
        resultat = "Spelaren vant!";
    }
    else { // Dersom det ikkje er uavgjort eller brukaren vinn, så vinn datamaskina
        console.log("Datamaskina vant.. Buhu.");
        resultat = "Datamaskina vant!";
    }

    // Utskrift til HTML av endeleg resultat
    document.getElementById("utskrift").innerHTML = resultat; 
}