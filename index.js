let scoreHome = 0;
let scoreGuest = 0;
let scoreHomeEl = document.getElementById ("score-home");
let scoreGuestEl = document.getElementById ("score-guest");


const renderResult = function(result, element) {
    element.textContent = result;
}

const highlightWinner = function () {
    if (scoreHome > scoreGuest) {
        scoreHomeEl.style.border = '2px solid lightgreen';
        scoreGuestEl.style.border = '';
    }
    else if (scoreGuest > scoreHome) {
        scoreGuestEl.style.border = '2px solid lightgreen';
        scoreHomeEl.style.border = '';
    }
    else { // scoreGuest = ScoreHome (Tie)
        scoreGuestEl.style.border = '1px solid yellow';
        scoreHomeEl.style.border = '1px solid yellow';
        
    }
}

const plusScore = function(number, who) {
    if (who == 'home') {
        scoreHome += number;
        renderResult (scoreHome, scoreHomeEl);
    }
    else {
        scoreGuest += number;
        renderResult (scoreGuest, scoreGuestEl);
    }
    highlightWinner();
}

const resetGame = function () {
    scoreHome = 0;
    scoreGuest = 0;
    scoreHomeEl.textContent = scoreHome;
    scoreGuestEl.textContent = scoreGuest;
    scoreHomeEl.style.border = '';
    scoreGuestEl.style.border = '';

}