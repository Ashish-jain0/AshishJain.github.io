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
            const index = Math.floor(Math.random() * categories[chosenCategory].length);
            chosenWord = categories[chosenCategory][index];
            document.getElementById('category-selection').remove();
            startGame();
        });
        categorySelectionDiv.appendChild(categoryButton);
    }
    
    document.getElementById('hangman-container').appendChild(categorySelectionDiv);
}

function startGame() {
    document.getElementById('hangman-container').innerHTML = '';
    renderHangman();
    renderButtons();
    document.getElementById('score').textContent = 'Score: ' + score;
    document.getElementById('total-lives').textContent = 'Total Lives: ' + triesLeft;
    document.getElementById('category').textContent = 'Category: ' + chosenCategory;
    document.getElementById('clue').textContent = 'Clue: ' + getClue(chosenWord);
}

function renderHangman() {
    const hangmanImageDiv = document.createElement('div');
    hangmanImageDiv.id = 'hangman-image';
    hangmanImageDiv.innerHTML = `
        <img src="hangman${6 - triesLeft}.jpg" alt="Hangman" id="hangman-img">
    `;
    document.getElementById('hangman-container').appendChild(hangmanImageDiv);
}

function renderButtons() {
    const buttonsContainer = document.createElement('div');
    buttonsContainer.id = 'hangman-buttons';
    for (let i = 97; i <= 122; i++) { // ASCII codes for lowercase letters
        const letter = String.fromCharCode(i);
        const button = document.createElement('button');
        button.textContent = letter;
        button.addEventListener('click', function() {
            handleGuess(letter);
        });
        buttonsContainer.appendChild(button);
    }
    document.getElementById('hangman-container').appendChild(buttonsContainer);
}

function handleGuess(letter) {
    if (!guessedLetters.includes(letter)) {
        guessedLetters.push(letter);
        if (!chosenWord.includes(letter)) {
            triesLeft--;
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

function checkGameStatus() {
    if (hangmanWord === chosenWord) {
        document.getElementById('hangman-status').textContent = 'You won!';
        score += 10;
        setTimeout(() => {
            showCategorySelection();
        }, 2000);
    } else if (triesLeft === 0) {
        document.getElementById('hangman-status').textContent = 'You lost!';
    }
}

function getClue(word) {
    // Define clue logic here, for example, return the first letter of the word
    return 'Starts with: ' + word[0];
}

initializeHangman();
