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
let totalLives = 7;
let score = 0;

function initializeHangman() {
    showCategorySelection();
}

function showCategorySelection() {
    const categorySelectionDiv = document.createElement('div');
    categorySelectionDiv.id = 'category-selection';
    categorySelectionDiv.innerHTML = '<h2>Select a Category 📋:</h2>';
    
    for (const category in categories) {
        const categoryButton = document.createElement('button');
        categoryButton.textContent = category;
        categoryButton.addEventListener('click', () => {
            const index = Math.floor(Math.random() * categories[category].length);
            chosenCategory = category;
            [chosenWord, chosenClue] = [categories[chosenCategory][index], clues[chosenCategory][index]];
            document.getElementById('category-selection').remove();
            startGame();
        });
        categorySelectionDiv.appendChild(categoryButton);
    }
    
    document.getElementById('hangman-container').appendChild(categorySelectionDiv);
}

function startGame() {
    document.getElementById('hangman-container').innerHTML = '';
    const gameContainer = document.createElement('div');
    gameContainer.innerHTML = `
        <div id="category">Category 📋: ${chosenCategory}</div>
        <div id="clue">Clue: ${chosenClue}</div>
        <div id="hangman-word"></div>
        <div id="total-lives">Total Lives: 💎💎💎💎💎💎💎</div>
        <div id="score">✒️ Score: ${score}</div>
        <div id="hangman-buttons"></div>
        <div id="hangman-status"></div>
        <div id="hangman-image">
            <img src="hangman0.png" alt="Hangman" id="hangman-img">
        </div>
    `;
    
    document.getElementById('hangman-container').appendChild(gameContainer);
    
    hangmanWord = '_'.repeat(chosenWord.length);
    document.getElementById('hangman-word').textContent = hangmanWord;
    renderButtons();
}

function renderButtons() {
    const buttonsContainer = document.getElementById('hangman-buttons');
    buttonsContainer.innerHTML = '';
    for (let i = 97; i <= 122; i++) { // ASCII codes for lowercase letters
        const letter = String.fromCharCode(i).toUpperCase();
        const button = document.createElement('button');
        button.textContent = letter;
        button.classList.add('alphabet-button'); // Add a class for styling purposes
        if (guessedLetters.includes(letter.toLowerCase())) { // Check if the letter has been guessed
            button.classList.add('selected'); // Add 'selected' class to highlight the selected button
            button.disabled = true; // Disable the button if it's already guessed
        } else {
            button.addEventListener('click', function() {
                handleGuess(letter.toLowerCase()); // Pass lowercase letter to handleGuess
                if (!chosenWord.includes(letter.toLowerCase())) { // Check if the guess is correct
                    button.disabled = true; // Disable the button if it's an incorrect guess
                }
                button.classList.add('selected'); // Add 'selected' class to highlight the selected button
            });
        }
        buttonsContainer.appendChild(button);
    }
    updateHangmanWord(); // Add this line to ensure hangman word is properly displayed after selecting category
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
    const newHangmanWord = [...chosenWord].map(char => guessedLetters.includes(char) ? char : '_').join(' ');
    hangmanWord = newHangmanWord;
    document.getElementById('hangman-word').textContent = hangmanWord;
}

function updateHangmanImage() {
    document.getElementById('hangman-img').src = `hangman${7 - totalLives}.jpg`;
    const diamond = '💎';
    let remainingLives = diamond.repeat(totalLives);
    document.getElementById('total-lives').textContent = `Total Lives: ${remainingLives}`;
}

function checkGameStatus() {
    if (hangmanWord === chosenWord) {
        document.getElementById('hangman-status').textContent = 'You won!';
        score++;
        document.getElementById('score').textContent = `✒️ Score: ${score}`;
        document.getElementById('hangman-img').src = 'hangman6.jpg'; // Image for winning
        showGameOverPopup(); // Call the function to show the pop-up
    } else if (totalLives === 0) {
        showGameOverPopup(); // Call the function to show the pop-up
    }
}

function showGameOverPopup() {
    const popupContent = `
        <div class="popup-content">
            <p>Sorry, but you have used up all your lives. However, if you want to continue challenging yourself, get started again.</p>
            <button id="play-again-button">Play again</button>
        </div>
    `;

    const popupWindow = window.open('', 'popupWindow', 'width=400,height=200');
    popupWindow.document.body.innerHTML = popupContent;

    const playAgainButton = popupWindow.document.getElementById('play-again-button');
    playAgainButton.addEventListener('click', function() {
        popupWindow.close(); // Close the pop-up window
        resetGame(); // Reset the game state
        showCategorySelection(); // Show the category selection page
    });

    document.getElementById('hangman-status').textContent = 'You lost!';
    document.getElementById('hangman-img').src = 'Hanged.jpg'; // Image for losing
}


function resetGame() {
    chosenCategory = null;
    chosenWord = null;
    chosenClue = null;
    guessedLetters = [];
    hangmanWord = '';
    totalLives = 7;
    score = 0;
    document.getElementById('hangman-container').innerHTML = ''; // Clear the hangman container
}

initializeHangman();
