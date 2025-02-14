async function hentBil() {
    const res = await fetch('http://localhost:3000/biler');
    const data = await res.json();
    
    // For testing
    console.log(data[0]);
    // console.log(data[1]);

    for (let bil of data) {
        console.log(bil.registreringsnummer);
        let listeElement = document.createElement("li");
        listeElement.innerText = bil.registreringsnummer + ": " + bil.merke + ", " + bil.modell;
        document.querySelector("#bil").appendChild(listeElement);
    }

    // Alternativ for-løkke
    // for (let i = 0; i < data.length; i++) {
    //     console.log(data[i].registreringsnummer);
    //     let listeElement = document.createElement("li");
    //     listeElement.innerText = data[i].registreringsnummer + ": " + data[i].merke + ", " + data[i].modell;
    // }
}

hentBil(); // Slik at me får vist bilane med ein gong me lastar sida