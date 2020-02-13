const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endGame = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('setting-form');
const difficulty = document.getElementById('difficulty');

// List of words
const words = [
  'debt',
  'laugh',
  'aboard',
  'wave',
  'automatic',
  'supply',
  'squash',
  'bake',
  'beam',
  'third',
  'small',
  'aunt',
  'nonstop',
  'psychedelic',
  'fat',
  'church',
  'thaw',
  'heavenly',
  'continue',
  'faint',
  'chop',
  'knotty',
  'loud',
  'telling',
  'scattered',
  'dislike',
  'winter',
  'tawdry',
  'breath',
  'imported'
];

let randomWord;
let time = 10;
let score = 0;

text.focus();

const timeInterval = setInterval(updateTime, 1000);

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

addWordToDOM();

function updateTime() {
  time--;
  timeEl.innerHTML = time + 's';

  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

function gameOver() {
  endGame.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
`;

  endGame.style.display = 'flex';
}

// Event listeners
text.addEventListener('input', e => {
  let inputText = e.target.value.trim();

  if (inputText === randomWord) {
    addWordToDOM();
    e.target.value = '';
    score++;
    scoreEl.innerHTML = score;
    time += 5;
    updateTime();
  }
});
