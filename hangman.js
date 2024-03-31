// Define categories and corresponding words with clues
const categories = {
    "Colors 🎨": {
        words: ["red", "blue", "green", "yellow", "orange"],
        clues: ["The color of an apple", "The color of the sky", "The color of grass", "The color of the sun", "The color of a carrot"]
    },
    "Shapes ⬜️": {
        words: ["square", "circle", "triangle", "rectangle", "pentagon"],
        clues: ["Has four equal sides", "Has no corners", "Has three sides", "Has two pairs of equal sides", "Has five sides"]
    },
    "Movies 🎥": {
        words: ["avatar", "titanic", "inception", "jaws", "forrest gump"],
        clues: ["A film set on Pandora", "A film about a sinking ship", "A film about dreams within dreams", "A film about a killer shark", "A film about a man with low IQ"]
    },
    "Superheroes 🦸": {
        words: ["superman", "spiderman", "batman", "wonder woman", "captain america"],
        clues: ["The man of steel", "Friendly neighborhood hero", "The Dark Knight", "Amazonian warrior", "Star-spangled Avenger"]
    },
    "Countries 🏳️": {
        words: ["usa", "canada", "france", "japan", "brazil"],
        clues: ["Land of the free", "Home of maple syrup", "Known for the Eiffel Tower", "Land of the rising sun", "Famous for the Amazon rainforest"]
    },
    "Naruto 🌀": {
        words: ["naruto", "sasuke", "sakura", "kakashi", "hinata"],
        clues: ["Main character with a dream to become Hokage", "Rival of Naruto", "Team 7's female member", "Copy ninja with a Sharingan", "Shy but determined Hyuga clan member"]
    },
    "Flowers 🌼": {
        words: ["rose", "daisy", "tulip", "sunflower", "lily"],
        clues: ["Symbol of love", "Associated with innocence", "Popular spring flower", "Follows the sun", "Symbol of purity and beauty"]
    },
    "Disney 🧜‍♀️": {
        words: ["cinderella", "mickey", "ariel", "buzz", "simba"],
        clues: ["Lost her glass slipper", "Famous mouse", "Mermaid princess", "Space ranger", "Lion king"]
    },
    "HarryPotter 🧙": {
        words: ["harry", "hermione", "ron", "dumbledore", "voldemort"],
        clues: ["The Boy Who Lived", "Smartest witch of her age", "Best friend of Harry", "Headmaster of Hogwarts", "He-Who-Must-Not-Be-Named"]
    },
    "Music 🎸": {
        words: ["guitar", "piano", "violin", "drums", "saxophone"],
        clues: ["String instrument", "88 keys", "Stringed instrument played with a bow", "Played with sticks", "Wind instrument"]
    }
};

// Initialize game variables
let selectedCategory;
let word;
let lives;
let guesses;
let correctGuesses;

// Function to select a random word from an array
function selectRandomWord(words) {
    return words[Math.floor(Math.random() * words.length)];
}

// Function to start the game
function startGame(categoryName) {
    selectedCategory = categories[categoryName];
    if (!selectedCategory) {
        console.error("Invalid category");
        return;
    }

    // Select a random word from the chosen category
    word = selectRandomWord(selectedCategory.words).toLowerCase();
    console.log("Word:", word);

    // Set initial values
    lives = 6; // Adjust number of lives as needed
    guesses = [];
    correctGuesses = 0;

    // Display the clue
    const clueIndex = selectedCategory.words.indexOf(word);
    const clue = selectedCategory.clues[clueIndex];
    console.log("Clue:", clue);

    // Update display
    document.getElementById("clue").textContent = "Clue: " + clue;
    document.getElementById("hangman-word").textContent = "_ ".repeat(word.length);
    document.getElementById("total-lives").textContent = "Total Lives: " + lives;
}

// Function to check if a letter is in the word
function checkGuess(letter) {
    if (guesses.includes(letter)) {
        alert("You already guessed that letter!");
        return;
    }

    guesses.push(letter);

    if (word.includes(letter)) {
        // Update correct guesses
        correctGuesses += word.split(letter).length - 1;

        // Update display with correctly guessed letters
        const wordDisplay = word.split("").map(char => (guesses.includes(char) ? char : "_")).join(" ");
        document.getElementById("hangman-word").textContent = wordDisplay;

        // Check if all letters have been guessed
        if (correctGuesses === word.length) {
            endGame(true);
        }
    } else {
        // Incorrect guess
        lives--;
        document.getElementById("total-lives").textContent = "Total Lives: " + lives;

        // Update hangman image or other visuals for incorrect guesses
        updateHangmanImage();

        // Check if lives run out
        if (lives === 0) {
            endGame(false);
        }
    }
}

// Function to update hangman image or other visuals for incorrect guesses
function updateHangmanImage() {
    // Add code to update hangman image based on remaining lives
}

// Function to end the game
function endGame(win) {
    if (win) {
        alert("Congratulations! You guessed the word correctly.");
    } else {
        alert("Game over. You ran out of lives. The word was: " + word);
    }
}

// Example usage:
startGame("Colors 🎨"); // Start the game with the "Colors" category
