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

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const startDiv = document.getElementById('overlay');
        startDiv.style.display = 'block';

        const overLayH1 = document.getElementById('game-over-message');
        const overLayDiv = document.getElementById('overlay');
        if(gameWon) {
            overLayH1.textContent = "Congrats!! You Win :)"
            overLayDiv.classList.replace('start', 'win');
        } else {
            overLayH1.textContent = "Sorry, try again."
            overLayDiv.classList.replace('start', 'lose');
        }
    }

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(keyButton) {
        //Makes chosen key disabled
        const keys = document.getElementsByClassName('key');
        for(let key of keys) {
            if(key.textContent === keyButton.textContent) {
                key.setAttribute('disabled', 'disabled');
            }
        }

        //Branches code depending on whether chosen key is included in phrase
        //If so, add class 'chosen' to chosen key element, reveal letter in phrase and check if player win
        //If not, add class 'wrong' to chosen key element and remove life heart
        const isMatched = this.activePhrase.checkLetter(keyButton.textContent);
        if(isMatched) {
            keyButton.classList.add('chosen');
            this.activePhrase.showMatchedLetter(keyButton.textContent)
            if(this.checkForWin()) {
                this.gameOver(this.checkForWin());
            }
        } else {
            keyButton.classList.add('wrong');
            this.removeLife();
        }
    }

    /**
     * Branches code, depending on what key player presses
     * @param {object} event - keydown event object 
     */
    handleKeyDown(event) {
        const keys = document.getElementsByClassName('key');
        const isMatched = this.activePhrase.checkLetter(event.key);

        for(let key of keys) {
            if(key.textContent === event.key) {
                if(isMatched) {
                    key.classList.add('chosen');
                    this.activePhrase.showMatchedLetter(event.key)
                    if(this.checkForWin()) {
                        this.gameOver(this.checkForWin());
                    }
                } else {
                    key.classList.add('wrong');
                    this.removeLife();
                }
                key.setAttribute('disabled', 'disabled');
            }
        }
    }

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

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    */
    checkForWin() {
        const letters = document.getElementsByClassName('letter');
        const letterArray = [...letters];

        for(let letter of letterArray) {
            if(letter.classList.contains('hide')) {
                return false;
            } 
        }

        return true;
    }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        const heartImg = document.getElementsByTagName('img');
        heartImg[this.missed].setAttribute('src', 'images/lostHeart.png');
        this.missed += 1;

        if(this.missed === 5) {
            this.gameOver();
        }
    }
}