<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Open Talk - Learn English</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f2f2f2;
            color: #333; /* Font color */
        }
        header {
            background-color: #333;
            color: #fff;
            padding: 20px;
            text-align: center;
        }
        #logo {
            max-width: 200px;
            display: block;
            margin: 0 auto;
        }
        .container {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1, h2 {
            text-align: center;
        }
        p {
            text-align: justify;
        }
        /* Styles for the game */
        .game-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
        }
        .game-box {
            padding: 20px;
            border: 2px solid #333;
            border-radius: 5px;
            background-color: #f9f9f9;
        }
        .result {
            font-weight: bold;
            margin-top: 10px;
            text-align: center;
        }
    </style>
</head>
<body>
    <header>
        <img src="https://drive.google.com/uc?export=view&id=1vmi3QCp2s8DkIdkA8MOH24vRS4craDm9" alt="Open Talk Logo" id="logo">
        <h1>Welcome to Open Talk</h1>
    </header>
    <div class="container">
        <h2>About Us</h2>
        <p>
            Open Talk is dedicated to helping you learn English in a fun and interactive way. Our platform offers a range of resources and activities to improve your language skills.
        </p>
        <h2>Services</h2>
        <ul>
            <li>Interactive English learning games</li>
            <li>Online English courses</li>
            <li>Live conversation practice sessions</li>
            <li>Grammar and vocabulary exercises</li>
        </ul>
        <div class="game-container">
            <div class="game-box">
                <h2>Rock Paper Scissors</h2>
                <button onclick="play('rock')">Rock</button>
                <button onclick="play('paper')">Paper</button>
                <button onclick="play('scissors')">Scissors</button>
                <p class="result" id="result"></p>
            </div>
        </div>
        <h2>Contact Us</h2>
        <p>
            Email: officialopentalk@gmail.com<br>
            Telegram Community: <a href="https://t.me/+Cbv_rEEYo482N2Y1">Join Our Telegram Community</a>
        </p>
    </div>

    <script>
        function play(playerChoice) {
            var choices = ['rock', 'paper', 'scissors'];
            var computerChoice = choices[Math.floor(Math.random() * choices.length)];

            var resultElement = document.getElementById('result');
            if (playerChoice === computerChoice) {
                resultElement.textContent = "It's a tie!";
            } else if (
                (playerChoice === 'rock' && computerChoice === 'scissors') ||
                (playerChoice === 'paper' && computerChoice === 'rock') ||
                (playerChoice === 'scissors' && computerChoice === 'paper')
            ) {
                resultElement.textContent = "You win!";
            } else {
                resultElement.textContent = "You lose!";
            }
        }
    </script>
</body>
</html>
