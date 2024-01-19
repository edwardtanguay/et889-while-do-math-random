import './style.css';

// === CODING SECTION ==========================================

// indexes of arrays are: 0,1,2,3,4
const colors = ['blue', 'red', 'green', 'black', 'purple'];

const getRandomNumber = (start, end) => {
  return Math.floor(Math.random() * ((end + 1) - start)) + start;
};

const randomNumber = Math.random();
const rand2 = randomNumber * 10;
const rand3 = Math.floor(randomNumber * 10);
const rand4 = Math.floor(randomNumber * 10) + 1;
const rand5 = Math.floor(randomNumber * 3) + 3;

// 0 | 3
// 1 | 4
// 2 | 5

const colorIndex = getRandomNumber(0, 4);
const color = colors[colorIndex];

let coloredBoxesHtml = '';
for (let i = 0; i < 380; i++) {
  let randNum = getRandomNumber(0, 4);
  let colorOfSingleBox = colors[randNum];
  coloredBoxesHtml += `
<div class="smallbox" style="background-color: ${colorOfSingleBox}"></div>
`;
}

// === HTML SECTION ==========================================

document.querySelector('#app').innerHTML = /*html*/ `
<h1>Realistic examples for Math.random()</h1>

<h2>Math.random()</h2>
<ul>
  <li>between 0 and 1: <span>${randomNumber}</span></li>
  <li>rand2: <span>${rand2}</span></li>
  <li>between 0 and 9: <span>${rand3}</span></li>
  <li>between 1 and 10: <span>${rand4}</span></li>
  <li>between 3 and 5: <span>${rand5}</span></li>
  <li>between 2 and 3: <span>${getRandomNumber(2, 3)}</span></li>
  <li>between 21 and 29: <span>${getRandomNumber(21, 29)}</span></li>
</ul>

<h2>Random colored box</h2>
<p>Color index is ${colorIndex}</p>
<div class="box" style="background-color: ${color}"></div>

<h2>Random colored boxes</h2>
<div class="boxes">
${coloredBoxesHtml}
</div>

`;

