'use strict';

const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const guessInput = document.querySelector('.guess');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const scoreSpan = document.querySelector('.score');
const body = document.querySelector('body');
const highscore = document.querySelector('.highscore');

// function to display message
const desplayMessage = text => {
  message.textContent = text;
};
// secret number  for number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// initial score
let score = 20;
// initial the highscore
let highScoreNumber = 0;
// onCheck button
checkButton.addEventListener('click', function () {
  const guess = Number(guessInput.value);
  // input has no value
  if (!guess) {
    desplayMessage('😒 No Number');
    // value of secret number is less than input
  } else if (guess !== secretNumber) {
    if (score > 0) {
      desplayMessage(guess > secretNumber ? '📉 Too High' : '📉 Too Low');
      score--;
      scoreSpan.textContent = score;
    } else {
      desplayMessage('😁  You Lost the game');
    }
  } else if (guess === secretNumber) {
    desplayMessage('🎊 Congratulations');
    number.style.width = '30rem';
    number.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    if (score > highScoreNumber) {
      highScoreNumber = score;
      highscore.textContent = highScoreNumber;
    }
  }
});

againButton.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreSpan.textContent = score;

  desplayMessage('Start guessing...');
  body.style.backgroundColor = '#222';
  number.textContent = '?';
  number.style.width = '15rem';

  guessInput.value = '';
});
