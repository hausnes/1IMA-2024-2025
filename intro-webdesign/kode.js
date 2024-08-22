let knapp = document.querySelector("#knappStartSpel");
console.log(knapp);

knapp.addEventListener("click", () => {
    aktivGradient++;
    if (aktivGradient >= listeGradients.length) {
        aktivGradient = 0;
    }
    console.log("Knappen virkar!");
    document.querySelector("body").style.background = "linear-gradient(" + listeGradients[aktivGradient] + ")";
});

let listeGradients = ["red,blue", "yellow,black", "pink,purple"];
let aktivGradient = 0;
