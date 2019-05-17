/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        const chars = this.phrase.split('');
        const patt = /[a-z]/;

        for(let char of chars) {
            let result = patt.test(char);
            if(result) {
                let li = document.createElement('li');


                li.textContent = char;
                li.classList.add('hide', 'letter', char);

                document.querySelector('#phrase ul').appendChild(li);
            } else {
                let li = document.createElement('li');

                li.textContent = char;
                li.className = 'space';

                document.querySelector('#phrase ul').appendChild(li);
            }
        }
    }

    checkLetter() {}

    showMatchedLetter() {}
}