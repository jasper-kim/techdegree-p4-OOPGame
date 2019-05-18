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

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        return this.phrase.search(letter) !== -1 ? true : false;
    }

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        const lis = document.querySelectorAll('.letter');
        const lisArray = [...lis];
        const matchedArray = [];

        for(let li of lisArray) {
            if(li.textContent === letter) {
                matchedArray.push(li);
            }            
        }

        matchedArray.forEach((matchedLi) => {
            matchedLi.classList.replace('hide', 'show');
        })
    }
}