// Måtar å gje informasjon til brukaren på
// alert("Velkommen!");
console.log("Velkommen til 'the backside'!");

// Korleis finne noko i HTML-dokumentet (velg ein av dei! query er kraftigare enn get)
// let utskrift = document.getElementById("utskrift");
let utskrift = document.querySelector("#utskrift");

// Korleis be brukaren om informasjon
let navn = prompt("Kva heiter du?");

// Korleis endre HTML
// utskrift.innerHTML = "Hei, " + navn + "!";
utskrift.innerText = "Hei, " + navn + "!";

// Korleis endre CSS
let favorittfarge = prompt("Kva er din favorittfarge?");
document.querySelector("body").style.background = favorittfarge;

// Event Listeners
let knapp = document.querySelector("#knapp");
knapp.addEventListener("click", function() {
    alert("Du klikka på knappen!");
});

// Loops og arrays
let tall = [10, 66, 333, 49, 52];
for (let i = 0; i < tall.length; i++) {
    console.log("Tallet er: " + tall[i]);
}

// Arrays
let frukter = ["Eple", "Banan", "Appelsin"];
frukter.push("Druer");
console.log("Fruktlista: " + frukter.join(", "));

// Funksjonar
function helsBruker(navn) {
    return "Hei, " + navn + "!";
}
console.log(helsBruker(navn));

// DOM-manipulasjon
let nyParagraf = document.createElement("p");
nyParagraf.innerText = "Dette er ein ny paragraf!";
document.body.appendChild(nyParagraf);