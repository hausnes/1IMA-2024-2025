let img_stein = document.getElementById("stein");
let img_saks  = document.getElementById("saks");
let img_papir = document.getElementById("papir");

img_stein.addEventListener("click", velgStein);

function velgStein() {
    console.log("Du valgte stein!");
    alert("Du valgte stein!");
}