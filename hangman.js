// hangman.js

const categories = {
    "Colors 🎨": ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'white'],
    "Shapes ⬜️": ['square', 'circle', 'triangle', 'rectangle', 'hexagon', 'pentagon', 'octagon', 'oval', 'diamond', 'star'],
    "Movies 🎥": ['avatar', 'titanic', 'inception', 'jaws', 'starwars', 'jurassicpark', 'matrix', 'frozen', 'interstellar', 'batman'],
    "Superheroes 🦸": ['superman', 'batman', 'spiderman', 'wonderwoman', 'thor', 'captainamerica', 'ironman', 'hulk', 'flash', 'blackwidow'],
    "Countries 🏳️": ['usa', 'china', 'india', 'russia', 'brazil', 'canada', 'australia', 'germany', 'japan', 'france'],
    "Naruto 🌀": ['naruto', 'sasuke', 'sakura', 'kakashi', 'hinata', 'gaara', 'itachi', 'madara', 'obito', 'tsunade'],
    "Flowers 🌼": ['rose', 'lily', 'daisy', 'sunflower', 'tulip', 'orchid', 'daffodil', 'hydrangea', 'carnation', 'peonies'],
    "Disney 🧜‍♀️": ['mickey', 'minnie', 'donald', 'goofy', 'ariel', 'cinderella', 'belle', 'mulan', 'moana', 'frozen'],
    "HarryPotter 🧙": ['harry', 'hermione', 'ron', 'dumbledore', 'snape', 'voldemort', 'hagrid', 'ginny', 'neville', 'malfoy'],
    "Music 🎸": ['guitar', 'piano', 'violin', 'drums', 'trumpet', 'saxophone', 'flute', 'clarinet', 'cello', 'harmonica'],
    "Fantasy 🦄": ['unicorn', 'dragon', 'wizard', 'fairy', 'elf', 'mermaid', 'centaur', 'phoenix', 'goblin', 'witch']
};

const clues = {
    const clues = {
    "Colors 🎨": ['The color of blood', 'The color of the ocean', 'The color of grass'],
    "Shapes ⬜️": ['Has four equal sides', 'A round object', 'Has three sides'],
    "Movies 🎥": ['Movie about blue people', 'Movie about a ship sinking', 'Movie about dreams'],
    "Superheroes 🦸": ['Can fly and wears a cape', 'Known as the Dark Knight', 'Shoots webs'],
    "Countries 🏳️": ['Famous for the Statue of Liberty', 'The most populous country in the world', 'Known for the Taj Mahal'],
    "Naruto 🌀": ['Main character in orange jumpsuit', 'Member of the Uchiha clan', 'Pink-haired ninja'],
    "Flowers 🌼": ['Often given on Valentine\'s Day', 'Fragrant white flower', 'A symbol of purity'],
    "Disney 🧜‍♀️": ['Iconic mouse character', 'His girlfriend wears a bow', 'Famous duck character'],
    "HarryPotter 🧙": ['The Boy Who Lived', 'Known for his lightning-shaped scar', 'Headmaster of Hogwarts'],
    "Music 🎸": ['Commonly associated with rock music', 'Played with 88 keys', 'Often used in orchestras'],
    "Fantasy 🦄": ['A horse with a single horn', 'Often breathes fire', 'Often depicted with wings']

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
        setTimeout(() => {
            showCategorySelection(); // Proceed to the next level after a delay
        }, 2000);
    } else if (triesLeft === 0) {
        document.getElementById('hangman-status').textContent = 'You lost!';
    }
}

initializeHangman();
