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
    const lis = document.querySelectorAll('#phrase li');
    const lisArray = [...lis];

    const matchArray = lisArray.reduce((match, li) => {
        if (li.textContent === keyValue) {
            match.push(li);
        }
        return match;
    },[]);

});
