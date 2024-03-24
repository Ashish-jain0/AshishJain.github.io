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

const clues = {
    "Colors 🎨": ['A primary color', 'The sky is this color', 'A type of fruit'],
    "Shapes ⬜️": ['Has four equal sides', 'Round object', 'Three-sided figure'],
    "Movies 🎥": ['Blue people movie', 'Ship disaster movie', 'Dream within a dream movie'],
    "Superheroes 🦸": ['Flies and wears a cape', 'Dark knight', 'Webslinger'],
    "Countries 🏳️": ['Star-spangled banner', 'Most populous country', 'Land of spices'],
    "Naruto 🌀": ['Orange jumpsuit ninja', 'Uchiha clan', 'Cherry blossom girl'],
    "Flowers 🌼": ['A symbol of love', 'Often given on Mother\'s Day', 'A type of plant'],
    "Disney 🧜‍♀️": ['Mouse character', 'Minnie\'s boyfriend', 'Duck character'],
    "HarryPotter 🧙": ['The boy who lived', 'Brightest witch of her age', 'You-know-who'],
    "Music 🎸": ['Strings instrument', 'Keys instrument', 'Played with a bow'],
    "Fantasy 🦄": ['Magical horse', 'Fire-breathing creature', 'A person with magical abilities']
};

let chosenCategory = null;
let chosenWord = null;
let chosenClue = null;
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
            chosenClue = clues[chosenCategory][index];
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
        <div id="clue">Clue: ${chosenClue}</div>
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
