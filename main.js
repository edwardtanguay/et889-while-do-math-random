import './style.css'

// CODING

const randomNumber = Math.random();
const rand2 = randomNumber * 10;
const rand3 = Math.floor(randomNumber* 10);
const rand4 = Math.floor(randomNumber* 10) + 1;
const rand5 = Math.floor(randomNumber* 3) + 3;

// 0 | 3
// 1 | 4
// 2 | 5



// HTML
document.querySelector('#app').innerHTML = /*html*/ `
<h1>While/Do and Math.random()</h1>

<ul>
  <li>between 0 and 1: <span>${randomNumber}</span></li>
  <li>rand2: <span>${rand2}</span></li>
  <li>between 0 and 9: <span>${rand3}</span></li>
  <li>between 1 and 10: <span>${rand4}</span></li>
  <li>between 3 and 5: <span>${rand5}</span></li>
<ul>
`
