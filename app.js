const p1 = {
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
    score: 0,
}

const p2 = {
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
    score: 0,
}

const resetButton = document.querySelector('#reset');
const selectScore = document.querySelector('#select');
let winningScore = 3;

p1.button.addEventListener('click', () => {
    updateScore(p1, p2);
})

p2.button.addEventListener('click', () => {
    updateScore(p2, p1);
})

selectScore.addEventListener('change', () => {
    winningScore = parseInt(selectScore.value);
    reset();
})

resetButton.addEventListener('click', reset);

function updateScore(player, opponent) {
    player.score += 1;
    if (player.score === winningScore) {
        isGameOver = true;
        player.display.classList.add('has-text-success');
        opponent.display.classList.add('has-text-danger');
        player.button.disabled = true;
        opponent.button.disabled = true;
    }
    player.display.textContent = player.score;

}

function reset() {
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}