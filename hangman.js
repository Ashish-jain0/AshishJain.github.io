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
let totalLives = 6;
let score = 0;

function initializeHangman() {
    // Select a random category
    chosenCategory = getRandomCategory();

    // Select a random word from the chosen category
    chosenWord = getRandomWord(chosenCategory);

    // Display category, total lives, and score
    document.getElementById('category').textContent = `Category: ${chosenCategory}`;
    document.getElementById('total-lives').textContent = `Total Lives: ${totalLives}`;
    document.getElementById('score').textContent = `Score: ${score}`;

    // Initialize hangman word with underscores
    for (let i = 0; i < chosenWord.length; i++) {
        hangmanWord += '_';
    }
    document.getElementById('hangman-word').textContent = hangmanWord;

    // Render alphabet buttons
    renderButtons();
}

function getRandomCategory() {
    const categoriesArray = Object.keys(categories);
    return categoriesArray[Math.floor(Math.random() * categoriesArray.length)];
}

function getRandomWord(category) {
    return categories[category][Math.floor(Math.random() * categories[category].length)];
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
            totalLives--;
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
    document.getElementById('hangman-img').src = `hangman${totalLives}.png`;
    document.getElementById('total-lives').textContent = `Total Lives: ${totalLives}`;
}

function checkGameStatus() {
    if (hangmanWord === chosenWord) {
        score++;
        document.getElementById('hangman-status').textContent = 'You won!';
        document.getElementById('score').textContent = `Score: ${score}`;
    } else if (totalLives === 0) {
        document.getElementById('hangman-status').textContent = 'You lost!';
    }
}

initializeHangman();
