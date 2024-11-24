// Lytt til submit-eventet på skjemaet
document.querySelector("#skjema").addEventListener("submit", handterSkjema);

function handterSkjema(event) {
    // Forhindra at skjemaet blir sendt (og sida lasta på nytt) = SPA (Single Page Application)
    event.preventDefault();
    
    // Hent ut verdiane frå skjemaet
    let navn = document.querySelector("#tekst").value;
    let tall = document.querySelector("#tall").value;
    let epost = document.querySelector("#epost").value;
    
    // Skriv ut verdiane
    console.log("Navn: " + navn);
    console.log("Tall: " + tall);
    console.log("Epost: " + epost);

    // Bekreftelse til brukaren
    alert("Takk for at du sendte inn skjemaet!");
}