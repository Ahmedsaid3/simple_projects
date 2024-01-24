const gameContainer = document.getElementById('game-container');

function createElementandSpacer(array_name) {
    const spacing = '40px';
    for (let i = 0; i < array_name.length; i++) {
        const img = document.createElement('img');
        img.src = array_name[i];
        gameContainer.appendChild(img);

        if (i !== array_name.length - 1) {
            let spacer = document.createElement('div');
            spacer.style.width = spacing;
            spacer.style.display = 'inline-block';
            gameContainer.appendChild(spacer);
        }
    }
}

function displayFaceUpImages() {
    const imageNames = ['A.svg', 'H.svg', 'M.svg', 'E.svg', 'T.svg'];
    createElementandSpacer(imageNames)
}

displayFaceUpImages();


function shuffleAndDistributeImages() {
    const images = document.querySelectorAll('#game-container img');
    const imageSources = Array.from(images).map(img => img.src); 
    const ShuffledImageSources = imageSources.sort(() => Math.random() - 0.5);

    gameContainer.innerHTML = ''; 

    createElementandSpacer(ShuffledImageSources)
}

// This function hides images by converting their background to black after 2 seconds to allow players to memorize the positions.
function hideImages() {
    setTimeout(() => {
    const images = document.querySelectorAll('#game-container img');
    images.forEach(img => {
        img.style.backgroundColor = 'black'; 
    });
    canClick = true;
    }, 2000); 
}


function buttonClick() {
    document.getElementById("startButton").disabled = true;
    shuffleAndDistributeImages();
    hideImages();
  }


// These variables and functions for managing the eventListener appropriately
const correctSequence = ['A.svg', 'H.svg', 'M.svg', 'E.svg', 'T.svg']; 
let score = 0;
let currentStep = 0; 
let canClick = false; // this flag arranges when and which conditions the user can click images or not
let lastClickedImage = null; 


function updateScoreDisplay() {
    const scoreDisplay = document.getElementById('score-display');
    if (scoreDisplay) {
        scoreDisplay.textContent = `Score: ${score}`;
    } else {
        const newScoreDisplay = document.createElement('div');
        newScoreDisplay.id = 'score-display';
        newScoreDisplay.textContent = `Score: ${score}`;
        gameContainer.appendChild(newScoreDisplay);
    }
}

function showCongratulationsMessage() {
    const congratsDiv = document.getElementById('congrats-message');
    if (score === 100) { 
        congratsDiv.style.display = 'block'; 
    }
    canClick = false;
}

function showWrongMessage() {
    const wrongDiv = document.getElementById('wrong-message');
    wrongDiv.style.display = 'block';    
    canClick = false;
}


gameContainer.addEventListener('click', function(event) {
    if (canClick && event.target.tagName === 'IMG') {
        const clickedImageSrc = event.target.src;
        if (lastClickedImage === event.target) { // This if part blocks the second click if the last clicked image is the same as the current clicked image
            event.target.dataset.canClick = 'false';  
        } else {
            if (event.target.dataset.clicked === 'true') { // This if part provides not taking action if it is a previously clicked image
                return;
            }
            event.target.dataset.clicked = 'true'; 
            lastClickedImage = event.target; 
            event.target.dataset.canClick = 'true'; 
            canClick = true; 

            if (clickedImageSrc.endsWith(correctSequence[currentStep])) {
                score += 20;
                event.target.style.backgroundColor = 'rgb(114, 241, 230)';
                updateScoreDisplay();
                currentStep++; 

                if (currentStep === correctSequence.length) {
                    showCongratulationsMessage();
                }
            } else {
                event.target.style.backgroundColor = 'rgb(114, 241, 230)';
                updateScoreDisplay();
                showWrongMessage();
            }
        }
    }
});
