import "./style.css";
let pintas = [`♦`, `♥`, `♠`, `♣`];
let números = [
  `A`,
  `2`,
  `3`,
  `4`,
  `5`,
  `6`,
  `7`,
  `8`,
  `9`,
  `10`,
  `J`,
  `Q`,
  `k`
];
let númerosCard = document.querySelector(".center-card");
let headerCard = document.querySelector(".header-card");
let footerCard = document.querySelector(".footer-card");
let númeroRandom = Math.floor(Math.random() * números.length);
let pintasRandom = Math.floor(Math.random() * pintas.length);
let pinta = pintas[pintasRandom];

númerosCard.innerHTML = números[númeroRandom];
headerCard.innerHTML = pinta;
footerCard.innerHTML = pinta;

if (pinta == "♦" || pinta == "♥") {
  headerCard.style.color = "red";
  footerCard.style.color = "red";
} else {
  headerCard.style.color = "black";
  footerCard.style.color = "black";
}
