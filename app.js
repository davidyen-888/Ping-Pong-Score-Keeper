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
    deuce(p1, p2);
})

p2.button.addEventListener('click', () => {
    updateScore(p2, p1);
    deuce(p2, p1);
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

// check condition of winning by 2 points
function deuce(player, opponent) {
    if (player.score === opponent.score && player.score === winningScore - 1) {
        winningScore += 1;
        selectScore.selectedOptions[0].value = winningScore;
        selectScore.classList.add('deuce');
        selectScore.selectedOptions[0].textContent = winningScore;
    }
}


function reset() {
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
    selectScore.classList.remove('deuce');
    for (let i=0; i <=6; i++){
        selectScore[i].value = 3 + i;
        selectScore[i].innerText = 3 + i;
     }
}