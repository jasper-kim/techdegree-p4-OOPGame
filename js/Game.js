/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
     * Begins game by selecting random phrase and display it to player
     */
    startGame() {
        const startDiv = document.getElementById('overlay');
        startDiv.style.display = 'none';

        const randomPhrase = this.getRandomPhrase();
        randomPhrase.addPhraseToDisplay();
        this.activePhrase = randomPhrase;

        document.getElementById('overlay').style.display = 'none';
    }

    gameOver() {}

    handleInteraction() {}

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        const phrases = [];
        const strings = [
            'JavaScript is an awesome language',
            'Treehouse is great',
            'Change your life today',
            'Practice makes perfect',
            'You are what you did'
        ];

        for(let string of strings) {
            let phrase = new Phrase(string);
            phrases.push(phrase);
        }
        return phrases;
    }

    /**
     * Selects random phrase from phrases property
     * @return {object} Phrase object chosen to be used
     */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * 5)];
    }

    checkForWin() {}

    removeLife() {}
}