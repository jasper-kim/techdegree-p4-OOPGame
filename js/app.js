/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;

document.getElementById('btn__reset').addEventListener('click', function() {
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
