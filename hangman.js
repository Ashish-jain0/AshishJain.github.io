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
    categorySelectionDiv.innerHTML = '<h2>Select a Categories 📋:</h2>';
    
    for (const category in categories) {
        const categoryButton = document.createElement('button');
        categoryButton.textContent = category;
        categoryButton.addEventListener('click', function() {
            const index = Math.floor(Math.random() * categories[category].length);
            chosenCategory = category;
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
    document.getElementById('hangman-container').innerHTML = '';
    const gameContainer = document.createElement('div');
    gameContainer.innerHTML = `
        <div id="category">Category: ${chosenCategory}</div>
        <div id="clue">Clue: ${chosenClue}</div>
        <div id="hangman-word"></div>
        <div id="total-lives">Total Lives: 💎💎💎💎💎💎💎</div>
        <div id="score">✒️ Score: ${score}</div>
        <div id="hangman-buttons"></div>
        <div id="hangman-status"></div>
    `;
    
    document.getElementById('hangman-container').appendChild(gameContainer);
    
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
        button.textContent = letter.toUpperCase();
        button.addEventListener('click', function() {
            handleGuess(letter);
        });
        buttonsContainer.appendChild(button);
    }
    updateHangmanWord(); // Add this line to ensure hangman word is properly displayed after selecting category
    
}

function handleGuess(letter) {
    if (!guessedLetters.includes(letter)) {
        guessedLetters.push(letter);
        if (!chosenWord.includes(letter)) {
            totalLives--;
            updatetotallives();
        }
        updateHangmanWord();
        renderButtons();
        checkGameStatus();
    }
}

function updateHangmanWord() {
    let newHangmanWord = '';
    if (!hangmanWord) {
        for (let i = 0; i < chosenWord.length; i++) {
            newHangmanWord += '_ ';
        }
        hangmanWord = newHangmanWord.trim();
    } else {
        for (let i = 0; i < chosenWord.length; i++) {
            if (guessedLetters.includes(chosenWord[i])) {
                newHangmanWord += chosenWord[i] + ' ';
            } else {
                newHangmanWord += '_ ';
            }
        }
        hangmanWord = newHangmanWord.trim(); // Trim to remove trailing space
    }
    document.getElementById('hangman-word').textContent = hangmanWord;
}

function updatetotallives() {
    const diamond = '💎';
    let remainingLives = diamond.repeat(totalLives);
    document.getElementById('total-lives').textContent = `Total Lives: ${remainingLives}`;

    if (totalLives === 0) {
        setTimeout(showGameOverPopup, 2000); // Display pop-up after 2 seconds when total lives are empty
    }
}



function checkGameStatus() {
    if (hangmanWord === chosenWord) {
        document.getElementById('hangman-status').textContent = 'You won!';
        score++;
        document.getElementById('score').textContent = `✒️ Score: ${score}`;
        setTimeout(() => {
            document.getElementById('hangman-status').textContent = ''; // Clear the status message
            startGame(); // Restart the game
        }, 2000);
    } else if (totalLives === 0) {
        document.getElementById('hangman-status').textContent = 'You lost!';
        setTimeout(showGameOverPopup, 2000); // Display pop-up after 2 seconds when total lives are empty
    }
}




function checkAnswer() {
    // Simulated function to check if the answer is correct or not
    const isCorrectAnswer = Math.random() < 0.5; // Randomly simulate correct or wrong answer

    if (isCorrectAnswer) {
        console.log('Correct answer!');
        // Continue with the game logic
    } else {
        console.log('Wrong answer!');
        totalLives--; // Decrement total lives
        document.getElementById('total-lives').textContent = `Total Lives: 💎`.repeat(totalLives); // Update displayed total lives

        if (totalLives === 0) {
            setTimeout(displayGameOverPopup, 2000); // Display pop-up after 2 seconds when total lives are empty
        }
    }
}


let popup; // Declare popup variable outside of showGameOverPopup function

function showGameOverPopup() {
    setTimeout(() => {
        popup = document.createElement('div');
        popup.classList.add('popup');
        popup.innerHTML = `
            <div class="popup-content">
                <p>Sorry, but you have used up all your lives. However, if you want to continue challenging yourself, get started again.</p>
                <button id="play-again-button">Play again</button>
            </div>
        `;
        document.body.appendChild(popup);

        document.getElementById('hangman-status').textContent = 'You lost!';
    }, 2000); // Display pop-up after 2 seconds

    // Attach event listener for "Play again" button
    document.addEventListener('click', function(event) {
        if (event.target && event.target.id === 'play-again-button') {
            document.body.removeChild(popup);
            resetGame(); // Call the function to reset the game
        }
    });
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

    // Reload the page
    window.location.reload();
}

initializeHangman();
