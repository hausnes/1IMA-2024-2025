function siHei() {
  console.log("Hei!");
}

siHei();
siHei();

function siHeiTil(navn) {
  console.log("Hei, " + navn + "!");
}

siHeiTil("Ola");
siHeiTil("Kari");

function leggSammen(a, b) {
    return a + b;
}

let summen = leggSammen(2, 3);
console.log(summen);