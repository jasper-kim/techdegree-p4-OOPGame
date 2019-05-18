/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;

document.getElementById('btn__reset').addEventListener('click', function() {
    game = new Game();
    game.startGame();
    console.log(game.activePhrase.phrase);
});

document.getElementById('qwerty').addEventListener('click', (e) => {
    const keyValue = e.target.textContent;
    
    game.activePhrase.showMatchedLetter(keyValue);

});
