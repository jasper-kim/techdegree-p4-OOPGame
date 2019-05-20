/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game = null;

const keySound = new Audio("sound/typewriter.mp3");

//Creates button to control sound functionality
const btnSound = document.createElement('button');
const parentNode = document.querySelector('.keyrow');

btnSound.className = 'sound on';
btnSound.textContent = '🔈on';
parentNode.appendChild(btnSound);

btnSound.addEventListener('click', () => {
    if(btnSound.classList.contains('on')) {
        btnSound.textContent = '🔈off';
        btnSound.classList.replace('on', 'off');
        keySound.muted = true;
    } else {
        btnSound.textContent = '🔈on';
        btnSound.classList.replace('off', 'on');
        keySound.muted = false;
    }
});

/**
 * Reset gameboard between games
 * @param {object} game - Game object to used in game
 */
function resetGame(game){
    if(game !== null) {
        //Remove all `li` elements from the Phrase `ul` element
        const ul = document.querySelector('ul');
        while(ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }

        //Enable all of the onscreen keyboard buttons and remove classes from it
        const keys = document.getElementsByClassName('key');
        for(let key of keys) {
            key.removeAttribute('disabled');
            key.classList.remove('chosen', 'wrong');
        }
        
        //Reset all of the heart images
        const imgs = document.getElementsByTagName('img');
        for(let img of imgs) {
            img.setAttribute('src', 'images/liveHeart.png');
        }

        //Reset overlay Element class to start
        document.getElementById('overlay').className = 'start';
    }
}

document.getElementById('btn__reset').addEventListener('click', function() {
    resetGame();
    
    game = new Game();
    game.startGame();
});

document.getElementById('qwerty').addEventListener('click', (e) => {
    const keyButton = e.target;

    if(keyButton.className === 'key') {
        keySound.play();
        game.handleInteraction(keyButton);
    }
});

document.addEventListener('keydown', (e) => {
    keySound.play();
    game.handleKeyDown(e);
})
