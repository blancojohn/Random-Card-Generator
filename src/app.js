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
document.getElementsByName(`card`);
function RandomCards() {
  let randomNumber = Math.floor(Math.random() * 4) + 1;

  return randomNumber;
}
