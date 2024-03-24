// hangman.js

const categories = {
    "Colors 🎨": ['red', 'blue', 'green', 'yellow', 'orange', 'purple'],
    "Shapes ⬜️": ['square', 'circle', 'triangle', 'rectangle', 'hexagon'],
    "Movies 🎥": ['avatar', 'titanic', 'inception', 'jaws', 'starwars'],
    "Superheroes 🦸": ['superman', 'batman', 'spiderman', 'wonderwoman', 'thor'],
    "Countries 🏳️": ['usa', 'china', 'india', 'russia', 'brazil'],
    "Naruto 🌀": ['naruto', 'sasuke', 'sakura', 'kakashi', 'hinata'],
    "Flowers 🌼": ['rose', 'lily', 'daisy', 'sunflower', 'tulip'],
    "Disney 🧜‍♀️": ['mickey', 'minnie', 'donald', 'goofy', 'ariel'],
    "HarryPotter 🧙": ['harry', 'hermione', 'ron', 'dumbledore', 'snape'],
    "Music 🎸": ['guitar', 'piano', 'violin', 'drums', 'trumpet'],
    "Fantasy 🦄": ['unicorn', 'dragon', 'wizard', 'fairy', 'elf']
};

let chosenCategory;
let chosenWord;
let guessedLetters = [];
let hangmanWord = '';
let triesLeft = 6;

function initializeHangman() {
    chosenCategory = Object.keys(categories)[Math.floor(Math.random() * Object.keys(categories).length)];
    chosenWord = categories[chosenCategory][Math.floor(Math.random() * categories[chosenCategory].length)];
    document.getElementById('category').textContent = `Category: ${chosenCategory}`;
    document.getElementById('tries-left').textContent = `Tries Left: ${triesLeft}`;
    for (let i = 0; i < chosenWord.length; i++) {
        hangmanWord += '_';
    }
    document.getElementById('hangman-word').textContent = hangmanWord;
    renderButtons();
}

function renderButtons() {
    const buttonsContainer = document.getElementById('hangman-buttons');
    buttonsContainer.innerHTML = '';
    for (let i = 97; i <= 122; i++) { // ASCII codes for lowercase letters
        const letter = String.fromCharCode(i);
        const button = document.createElement('button');
        button.textContent = letter;
        button.addEventListener('click', function() {
            handleGuess(letter);
        });
        buttonsContainer.appendChild(button);
    }
}

function handleGuess(letter) {
    if (!guessedLetters.includes(letter)) {
        guessedLetters.push(letter);
        if (!chosenWord.includes(letter)) {
            triesLeft--;
            updateHangmanImage();
        }
        updateHangmanWord();
        renderButtons();
        checkGameStatus();
    }
}

function updateHangmanWord() {
    let newHangmanWord = '';
    for (let i = 0; i < chosenWord.length; i++) {
        if (guessedLetters.includes(chosenWord[i])) {
            newHangmanWord += chosenWord[i];
        } else {
            newHangmanWord += '_';
        }
    }
    hangmanWord = newHangmanWord;
    document.getElementById('hangman-word').textContent = hangmanWord;
}

function updateHangmanImage() {
    document.getElementById('hangman-img').src = `hangman${6 - triesLeft}.png`;
    document.getElementById('tries-left').textContent = `Tries Left: ${triesLeft}`;
}

function checkGameStatus() {
    if (hangmanWord === chosenWord) {
        document.getElementById('hangman-status').textContent = 'You won!';
    } else if (triesLeft === 0) {
        document.getElementById('hangman-status').textContent = 'You lost!';
    }
}

initializeHangman();
