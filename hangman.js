// Hangman Game
// Categories and corresponding words
const categories = {
    Colors: ["red", "blue", "green", "yellow", "purple"],
    Shapes: ["circle", "square", "triangle", "rectangle", "hexagon"],
    Movies: ["avatar", "titanic", "inception", "jaws", "forrest gump"],
    Superheroes: ["spiderman", "superman", "batman", "wonder woman", "iron man"],
    Countries: ["usa", "canada", "australia", "germany", "brazil"],
    Naruto: ["naruto", "sasuke", "sakura", "kakashi", "hinata"],
    Flowers: ["rose", "daisy", "tulip", "lily", "sunflower"],
    Disney: ["mickey", "donald", "goofy", "pluto", "minnie"],
    HarryPotter: ["harry", "hermione", "ron", "dumbledore", "snape"],
    Music: ["guitar", "piano", "drums", "violin", "trumpet"]
};

// Corresponding clues for each word
const clues = {
    Colors: ["It's the color of love.", "It's the color of the sky.", "It's the color of grass."],
    Shapes: ["It has no corners.", "It has four equal sides.", "It has three sides."],
    Movies: ["A movie about a blue people.", "A movie about a sinking ship.", "A movie about dreams."],
    Superheroes: ["He's from Krypton.", "He's the Dark Knight.", "She's an Amazon warrior."],
    Countries: ["The land of the free.", "Known for maple syrup.", "The land down under."],
    Naruto: ["The main character.", "His rival.", "She's from the Uchiha clan."],
    Flowers: ["Often given on Valentine's Day.", "It's white and yellow.", "Often associated with spring."],
    Disney: ["The famous mouse.", "His best friend.", "He's a dog."],
    HarryPotter: ["The Boy Who Lived.", "The brightest witch of her age.", "The best friend."],
    Music: ["Commonly used in rock bands.", "It has black and white keys.", "It's a percussion instrument."]
};

// Variables
let chosenCategory; // Selected category
let chosenWord; // Selected word
let lives; // Number of lives
let score; // Score
let guess; // User's guess
let guesses = []; // Stored guesses
let wordStatus; // Word status (correctly guessed letters)
let totalCategories = Object.keys(categories).length; // Total number of categories
let totalWordsPerCategory = 5; // Total number of words per category

// Pick a random category and word
function pickWord() {
    let categoryIndex = Math.floor(Math.random() * totalCategories);
    chosenCategory = Object.keys(categories)[categoryIndex];
    let wordIndex = Math.floor(Math.random() * totalWordsPerCategory);
    chosenWord = categories[chosenCategory][wordIndex];
    // Set total lives
    lives = chosenWord.length + 3; // Adjust the number of lives as needed
    // Set score
    score = 0;
    // Initialize guesses array
    guesses = [];
    // Initialize word status
    wordStatus = Array(chosenWord.length).fill('_');
}

// Display category and clue
function displayCategoryAndClue() {
    const categoryElement = document.getElementById('category');
    const clueElement = document.getElementById('clue');
    categoryElement.textContent = "Category: " + chosenCategory;
    clueElement.textContent = "Clue: " + clues[chosenCategory][categories[chosenCategory].indexOf(chosenWord)];
}

// Display word status
function displayWordStatus() {
    document.getElementById('hangman-word').innerHTML = wordStatus.join(' ');
}

// Update total lives
function updateTotalLives() {
    document.getElementById('total-lives').textContent = "Total Lives: " + lives;
}

// Update score
function updateScore() {
    document.getElementById('score').textContent = "Score: " + score;
}

// Check if the guessed letter is in the word
function checkGuess(letter) {
    if (guesses.includes(letter)) return; // Letter already guessed
    guesses.push(letter);
    let isCorrectGuess = false;
    for (let i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] === letter) {
            wordStatus[i] = letter;
            isCorrectGuess = true;
        }
    }
    if (!isCorrectGuess) lives--;
    if (lives === 0) gameOver(false); // Out of lives
    if (wordStatus.join('') === chosenWord) gameOver(true); // Guessed the word correctly
    if (isCorrectGuess) score++;
    updateTotalLives();
    updateScore();
    displayWordStatus();
}

// Game over
function gameOver(isWin) {
    if (isWin) {
        alert("Congratulations! You guessed the word correctly: " + chosenWord);
    } else {
        alert("Game over! The word was: " + chosenWord);
    }
    pickWord();
    displayCategoryAndClue();
    displayWordStatus();
}

// Event listener for letter buttons
document.querySelectorAll('.letter-btn').forEach(item => {
    item.addEventListener('click', event => {
        checkGuess(event.target.textContent);
    });
});

// Initialize the game
pickWord();
displayCategoryAndClue();
displayWordStatus();
updateTotalLives();
updateScore();
