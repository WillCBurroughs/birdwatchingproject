
let move = 50; 
const biggestBird = document.getElementById("biggest-bird");

// Keeps bird in right position so no jumps 
document.addEventListener("DOMContentLoaded", function () {

    biggestBird.style.top = "700px"; 
    biggestBird.style.left = "500px"; 
  });

// Allows bird to chirp 

function chirp(){
    let audio = new Audio("https://willcburroughs.github.io/birdwatchingproject/chirp.wav");
    audio.play();
}


// Allows the bird to move with key presses 
window.addEventListener("keydown", (event) => {
    const style =  biggestBird.style;
    const currentTop = parseInt(style.top) || 0; 
    const currentLeft = parseInt(style.left) || 0; 

    switch (event.key){
        case " ":
        chirp(); 
        break;
        case "ArrowUp": 
        style.top = `${currentTop - move}px`; 
        break;
        case "ArrowDown": 
        style.top = `${currentTop + move}px`; 
        break;
        case "ArrowLeft": 
        style.left = `${currentLeft - move}px`; 
        break;
        case "ArrowRight": 
        style.left = `${currentLeft + move}px`; 
        break;
    }

});

