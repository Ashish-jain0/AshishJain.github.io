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
    "Colors 🎨": ['The color of blood', 'The color of the ocean', 'The color of grass', 'The color of sunshine', 'A fruit with this color is often associated with happiness', 'A combination of red and yellow', 'The color of eggplant', 'A common color for bears', 'The absence of color', 'The combination of all colors'],
    "Shapes ⬜️": ['Has four equal sides', 'Has no corners', 'Has three sides', 'Opposite sides are equal and parallel', 'Has six sides', 'Has five sides', 'Has eight sides', 'A stretched out circle', 'A precious stone shape', 'A common symbol for excellence'],
    "Movies 🎥": ['A movie set in a futuristic world', 'A tragic love story set on a sinking ship', 'A mind-bending film about dreams within dreams', 'A thriller about a giant shark', 'A space opera franchise', 'A film about resurrected dinosaurs', 'A dystopian action film', 'An animated tale of two sisters with magical powers', 'A space exploration adventure', 'A superhero vigilante from Gotham City'],
    "Superheroes 🦸": ['A hero from Krypton', 'A billionaire with a bat-themed alter ego', 'A web-slinging hero from New York City', 'An Amazonian warrior princess', 'The god of thunder', 'A patriotic soldier enhanced with a super-soldier serum', 'A genius inventor with a suit of armor', 'A large green rage monster', 'The fastest man alive', 'A skilled spy with exceptional combat abilities'],
    "Countries 🏳️": ['Known for its Statue of Liberty', 'The most populous country in the world', 'The largest democracy', 'The largest country by land area', 'Known for the Amazon rainforest', 'Famous for maple syrup and hockey', 'The Land Down Under', 'Known for engineering and efficiency', 'The Land of the Rising Sun', 'Famous for its cuisine and art'],
    "Naruto 🌀": ['A ninja with a dream of becoming Hokage', 'His rival and best friend', 'A skilled medic-nin', 'The sensei of Team 7', 'A shy and caring ninja', 'A former jinchuriki of the One-Tail', 'A prodigious Uchiha with tragic past', 'A legendary Uchiha who seeks power', 'A masked man with a mysterious agenda', 'The Fifth Hokage and legendary Sannin'],
    "Flowers 🌼": ['A symbol of love', 'A fragrant white flower', 'A common wildflower', 'A flower that turns to face the sun', 'A popular spring flower', 'Known for its exotic beauty', 'A symbol of spring and renewal', 'A cluster of small flowers', 'A popular flower for Mother’s Day', 'A delicate and fragrant flower'],
    "Disney 🧜‍♀️": ['A cheerful cartoon mouse', 'His sweetheart and frequent companion', 'A clumsy anthropomorphic dog', 'A curious mermaid princess', 'A kind-hearted girl with a fairy godmother', 'A humble book-loving girl turned princess', 'A courageous warrior who disguises herself as a man', 'A brave Polynesian girl on a quest', 'A story of sisterly love and magic', 'A tale of two sisters with magical powers'],
    "HarryPotter 🧙": ['The Boy Who Lived', 'A brilliant and resourceful witch', 'Harry’s loyal best friend', 'The wise headmaster of Hogwarts', 'A complex character with a troubled past', 'The Dark Lord', 'A gentle giant with a soft spot for magical creatures', 'Harry’s fiery red-headed friend', 'A courageous friend who grows into a hero', 'A cunning and ambitious Slytherin'],
    "Music 🎸": ['A string instrument often associated with rock music', 'A versatile instrument used in various genres', 'A bowed string instrument with a rich sound', 'A percussion instrument with various-sized drums', 'A brass instrument with a bold sound', 'A wind instrument with a soulful tone', 'A woodwind instrument with a bright sound', 'A woodwind instrument with a smooth tone', 'A string instrument with a deep and resonant sound', 'A small wind instrument often used in blues music'],
    "Fantasy 🦄": ['A mythical horse with a horn', 'A legendary fire-breathing creature', 'A magic practitioner with a wand', 'A tiny magical being with wings', 'A creature from folklore with pointed ears', 'A half-human, half-fish creature', 'A mythical creature with the body of a horse and the torso of a human
};
```

These clues should give players a good starting point for guessing the words in each category during the hangman game.

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
