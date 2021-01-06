'use strict';

let secrateNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);

        if (!guess) {
            displayMessage('⛔ No Number!');

        } else if (guess === secrateNumber) {
            displayMessage('🎉 Congratulation!');
            document.querySelector('.number').textContent = secrateNumber;

            document.querySelector('body').style.backgroundColor = '#60b347'
            document.querySelector('.number').style.width = '30rem'

            if (highScore < score) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
        } else if (guess !== secrateNumber) {
            if (score > 1) {
                displayMessage(guess > secrateNumber ? '📈 Too High!' : '📉 Too Low!');

                score--;
                document.querySelector('.score').textContent = score;
            } else {
                displayMessage('💥 You Lost The Game!');

                document.querySelector('.score').textContent = 0;
            }
        }
    });

document.querySelector('.again').addEventListener('click',
    function () {
        secrateNumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.number').textContent = '?';

        score = 20;
        document.querySelector('.score').textContent = score;

        document.querySelector('.guess').value = '';

        displayMessage('Start guessing...');

        document.querySelector('body').style.backgroundColor = '#222'
        document.querySelector('.number').style.width = '15rem'

    }
)