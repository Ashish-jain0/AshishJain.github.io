// hangman.js

const categories = {
    "Colors 🎨": { words: ['red', 'blue', 'green', 'yellow', 'orange', 'purple'], clue: 'Colors around us' },
    "Shapes ⬜️": { words: ['square', 'circle', 'triangle', 'rectangle', 'hexagon'], clue: 'Geometric shapes' },
    "Movies 🎥": { words: ['avatar', 'titanic', 'inception', 'jaws', 'starwars'], clue: 'Famous movies' },
    "Superheroes 🦸": { words: ['superman', 'batman', 'spiderman', 'wonderwoman', 'thor'], clue: 'Legendary heroes' },
    "Countries 🏳️": { words: ['usa', 'china', 'india', 'russia', 'brazil'], clue: 'Global nations' },
    "Naruto 🌀": { words: ['naruto', 'sasuke', 'sakura', 'kakashi', 'hinata'], clue: 'Characters from Naruto' },
    "Flowers 🌼": { words: ['rose', 'lily', 'daisy', 'sunflower', 'tulip'], clue: 'Beautiful blooms' },
    "Disney 🧜‍♀️": { words: ['mickey', 'minnie', 'donald', 'goofy', 'ariel'], clue: 'Disney characters' },
    "HarryPotter 🧙": { words: ['harry', 'hermione', 'ron', 'dumbledore', 'snape'], clue: 'Characters from Harry Potter' },
    "Music 🎸": { words: ['guitar', 'piano', 'violin', 'drums', 'trumpet'], clue: 'Musical instruments' },
    "Fantasy 🦄": { words: ['unicorn', 'dragon', 'wizard', 'fairy', 'elf'], clue: 'Fantasy creatures' }
};

let chosenCategory = null;
let chosenWord = null;
let guessedLetters = [];
let hangmanWord = '';
let triesLeft = 6;
let score = 0;

function initializeHangman() {
    showCategorySelection();
}

function showCategorySelection() {
    const categorySelectionDiv = document.createElement('div');
    categorySelectionDiv.id = 'category-selection';
    categorySelectionDiv.innerHTML = '<h2>Select a Category:</h2>';
    
    for (const category in categories) {
        const categoryButton = document.createElement('button');
        categoryButton.textContent = category;
        categoryButton.addEventListener('click', function() {
            chosenCategory = category;
            chosenWord = categories[chosenCategory].words[Math.floor(Math.random() * categories[chosenCategory].words.length)];
            document.getElementById('category-selection').remove();
            startGame();
        });
        categorySelectionDiv.appendChild(categoryButton);
    }
    
    document.getElementById('hangman-container').appendChild(categorySelectionDiv);
}

function startGame() {
    document.getElementById('hangman-container').innerHTML = ''; // Clear category selection
    document.getElementById('hangman-container').innerHTML = `
        <div id="category">Category: ${chosenCategory}</div>
        <div id="clue">Clue: ${categories[chosenCategory].clue}</div>
        <div id="hangman-word"></div>
        <div id="hangman-image">
            <img src="hangman0.png" alt="Hangman" id="hangman-img">
        </div>
        <div id="tries-left">Tries Left: ${triesLeft}</div>
        <div id="score">Score: ${score}</div>
        <div id="hangman-buttons"></div>
        <div id="hangman-status"></div>
    `;
    
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
    for (
