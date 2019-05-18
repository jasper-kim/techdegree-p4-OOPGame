/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game = null;

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
    const keyValue = e.target.textContent;

    if(keyButton.className === 'key') {
        game.handleInteraction(keyButton);
    }
    

});
