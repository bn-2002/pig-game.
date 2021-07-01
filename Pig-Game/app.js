const player0 = document.querySelector('.player-0');
const player1 = document.querySelector('.player-1');
const score0El = document.querySelector('#player0-score');
const score1El = document.getElementById('player1-score');
const current0El = document.querySelector('.current-score-player0');
const current1El = document.querySelector('.current-score-player1');
const dice = document.querySelector('.dice-img');
const btnReset = document.querySelector('.btn-reset');
const btnRoll = document.querySelector('.btn-roll-dice');
const btnHold = document.querySelector('.btn-hold');
const displayTurn = document.querySelector('.display-turn');


let isplaying = true;
const scores = [0,0];
let currentScore = 0;
let turn = 0 ;
current0El.textContent = 0;
current1El.textContent = 0;
score0El.textContent = 0;
score1El.textContent = 0;
dice.classList.add('hidden');

function changeTurn() {
    currentScore = 0;
    document.querySelector(`.current-score-player${turn}`).textContent = currentScore;
    turn = turn === 0 ? 1 : 0;
    player0.classList.toggle('active-player');
    player1.classList.toggle('active-player');
    displayTurn.textContent = `its player ${turn + 1} turn`;
}

function init() {
    isplaying = true;
    document.querySelector(`.player-${turn}`).classList.remove('winner-player');
    turn = 0;
    scores[0] = 0;
    scores[1] = 0;
    currentScore =0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    dice.classList.add('hidden');
    player0.classList.add('active-player');
    player0.classList.remove('winner-player');
    player1.classList.remove('winner-player');
    player1.classList.remove('active-player');
}

btnRoll.addEventListener('click',function(){
    if (isplaying) {
            //generate a dice
    let randomDice = Math.trunc(Math.random()*6) + 1;
    console.log(randomDice);
    dice.classList.remove('hidden');
    dice.src = `dice-${randomDice}.png`;

    if (randomDice!==1) {
     //add to current score
    currentScore+=randomDice;
    document.querySelector(`.current-score-player${turn}`).textContent = currentScore;

    } else {
        changeTurn();
    }
}
});

btnHold.addEventListener('click',function() {

    if (isplaying) {
    //add current to total score
    scores[turn] += currentScore;
    document.querySelector(`#player${turn}-score`).textContent = scores[turn];
    }

    //check it is under100
    if (scores[turn]>=100) {
        isplaying = false;
        console.log('it is end of the game');
        document.querySelector(`.player-${turn}`).classList.add('winner-player');
        document.querySelector(`.player-${turn}`).classList.remove('active-player');
        dice.classList.add('hidden');
    } else if (isplaying) {
    changeTurn();
    }
})

btnReset.addEventListener('click',init);




