document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.querySelector('.game-board');
    const playerPaddle = document.querySelector('.player-paddle');
    const computerPaddle = document.querySelector('.computer-paddle');
    const ball = document.querySelector('.ball');
    const scoreDisplay = document.querySelector('.score');
    const message = document.querySelector('.message');
    const modeButtons = document.querySelectorAll('.mode-button');

    let playerScore = 0;
    let computerScore = 0;
    let ballX = 400;
    let ballY = 200;
    let ballSpeedX = 5;
    let ballSpeedY = 5;
    let playerPaddleY = 160;
    let computerPaddleY = 160;
    let isGameRunning = false;
    let gameMode = 'easy';
    let botVsBotInterval;

    const EASY_COMPUTER_SPEED = 2;
    const MEDIUM_COMPUTER_SPEED = 4;
    const HARD_COMPUTER_SPEED = 6;
    const EASY_BALL_SPEED = 3;
    const MEDIUM_BALL_SPEED = 4;
    const HARD_BALL_SPEED = 5;

    function updateComputerPaddle() {
        const paddleCenter = computerPaddleY + 40;
        const difference = paddleCenter - ballY;
        let speed;

        switch (gameMode) {
            case 'easy':
                speed = EASY_COMPUTER_SPEED;
                break;
            case 'medium':
                speed = MEDIUM_COMPUTER_SPEED;
                break;
            case 'hard':
                speed = HARD_COMPUTER_SPEED;
                break;
            default:
                speed = MEDIUM_COMPUTER_SPEED;
        }

        if (Math.abs(difference) < 15) {
        } else if (difference < 0) {           
            computerPaddleY += speed;
        } else {
            computerPaddleY -= speed;
        }

        computerPaddleY = Math.max(0, Math.min(320, computerPaddleY));
    }

    function updatePlayerPaddleAI() {
        const paddleCenter = playerPaddleY + 35;
        const difference = paddleCenter - ballY;
        const speed = HARD_COMPUTER_SPEED; 

        if (Math.abs(difference) < 10) {
        } else if (difference < 0) {
            playerPaddleY += speed;
        } else {
            playerPaddleY -= speed;
        }

        playerPaddleY = Math.max(0, Math.min(320, playerPaddleY));
    }

    function updateGame() {
        if (!isGameRunning) return;

        let currentBallSpeed;
        switch (gameMode) {
            case 'easy':
                currentBallSpeed = EASY_BALL_SPEED;
                break;
            case 'medium':
                currentBallSpeed = MEDIUM_BALL_SPEED;
                break;
            case 'hard':
                currentBallSpeed = HARD_BALL_SPEED;
                break;
            default:
                currentBallSpeed = HARD_BALL_SPEED;
        }

        ballX += (ballSpeedX > 0 ? currentBallSpeed : -currentBallSpeed);
        ballY += (ballSpeedY > 0 ? currentBallSpeed : -currentBallSpeed);

        if (ballY <= 0 || ballY >= 385) {
            ballSpeedY = -ballSpeedY;
        }

        if (
            (ballX <= 20 && ballY + 15 >= playerPaddleY && ballY <= playerPaddleY + 80) ||
            (ballX >= 770 && ballY + 15 >= computerPaddleY && ballY <= computerPaddleY + 80)
        ) {
            ballSpeedX = -ballSpeedX;
            ballSpeedX *= 1.05;
            ballSpeedY *= 1.05;
        }

        if (ballX <= 0) {
            computerScore++;
            resetBall();
        } else if (ballX >= 785) {
            playerScore++;
            resetBall();
        }

        scoreDisplay.textContent = `${playerScore} - ${computerScore}`;

        if ((playerScore === 3 || computerScore === 3) && gameMode !== 'botvsbot') {
            endGame();
            return;
        }

        updateComputerPaddle();

        if (gameMode === 'botvsbot') {
            updatePlayerPaddleAI();
        }

        ball.style.left = `${ballX}px`;
        ball.style.top = `${ballY}px`;
        playerPaddle.style.top = `${playerPaddleY}px`;
        computerPaddle.style.top = `${computerPaddleY}px`;

        requestAnimationFrame(updateGame);
    }

    function resetBall() {
        ballX = 400;
        ballY = 200;
        let initialSpeed;
        switch (gameMode) {
            case 'easy':
                initialSpeed = EASY_BALL_SPEED;
                break;
            case 'medium':
                initialSpeed = MEDIUM_BALL_SPEED;
                break;
            case 'hard':
                initialSpeed = HARD_BALL_SPEED;
                break;
            default:
                initialSpeed = MEDIUM_BALL_SPEED;
        }
        ballSpeedX = Math.random() > 0.5 ? initialSpeed : -initialSpeed;
        ballSpeedY = Math.random() > 0.5 ? initialSpeed : -initialSpeed;
    }

    function endGame() {
        isGameRunning = false;
        const winner = playerScore === 3 ? "Player" : "Computer";
        message.textContent = `${winner} wins! Click to play again.`;
        message.style.display = 'block';
    }

    function startNewGame() {
        playerScore = 0;
        computerScore = 0;
        resetBall();
        isGameRunning = true;
        message.style.display = 'none';
        updateGame();
    }

    function setGameMode(mode) {
        gameMode = mode;
        modeButtons.forEach(button => {
            button.classList.toggle('active', button.dataset.mode === mode);
        });

        if (mode === 'botvsbot') {
            startBotVsBot();
        } else {
            stopBotVsBot();
        }

        startNewGame();
    }

    function startBotVsBot() {
        botVsBotInterval = setInterval(() => {
            if (!isGameRunning) {
                startNewGame();
            }
        }, 2000);
    }

    function stopBotVsBot() {
        clearInterval(botVsBotInterval);
    }

    document.addEventListener('mousemove', (e) => {
        if (gameMode !== 'botvsbot') {
            const gameBoardRect = gameBoard.getBoundingClientRect();
            const mouseY = e.clientY - gameBoardRect.top;
            playerPaddleY = Math.max(0, Math.min(320, mouseY - 40));
        }
    });

    gameBoard.addEventListener('click', () => {
        if (!isGameRunning && gameMode !== 'botvsbot') {
            startNewGame();
        }
    });

    modeButtons.forEach(button => {
        button.addEventListener('click', () => {
            setGameMode(button.dataset.mode);
        });
    });

    setGameMode('easy'); 
});

