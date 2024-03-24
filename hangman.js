// hangman.js

const categories = {
    "Colors 🎨": [
        { word: 'red', clue: 'The color of blood' },
        { word: 'blue', clue: 'The color of the sky' },
        { word: 'green', clue: 'The color of grass' },
        // Add more words and clues
    ],
    "Shapes ⬜️": [
        { word: 'square', clue: 'Has four equal sides' },
        { word: 'circle', clue: 'Has no corners' },
        { word: 'triangle', clue: 'Has three sides' },
        // Add more words and clues
    ],
    "Movies 🎥": [
        { word: 'avatar', clue: 'Blue creatures on Pandora' },
        { word: 'titanic', clue: 'Shipwrecked love story' },
        { word: 'inception', clue: 'Dream within a dream' },
        // Add more words and clues
    ],
    // Add more categories
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
            const categoryWords = categories[chosenCategory];
            const randomIndex = Math.floor(Math.random() * categoryWords.length);
            chosenWord = categoryWords[randomIndex].word;
            const clue = categoryWords[randomIndex].clue;
            document.getElementById('category-selection').remove();
            startGame(clue);
        });
        categorySelectionDiv.appendChild(categoryButton);
    }
    
    document.getElementById('hangman-container').appendChild(categorySelectionDiv);
}

function startGame(clue) {
    document.getElementById('hangman-container').innerHTML = ''; // Clear category selection
    document.getElementById('hangman-container').innerHTML = `
        <div id="category">Category: ${chosenCategory}</div>
        <div id="clue">Clue: ${clue}</div>
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
        score += 10;
        document.getElementById('score').textContent = `Score: ${score}`;
    } else if (triesLeft === 0) {
        document.getElementById('hangman-status').textContent = 'You lost!';
    }
}

initializeHangman();
