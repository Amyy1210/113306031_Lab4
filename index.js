let btnList = document.querySelectorAll("button.drum");

for (var i = 0; i < btnList.length; i++) {
    btnList[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML; 
        playSound(buttonInnerHtml); 
        buttonAnimation("." + buttonInnerHtml); 
    });
}

function playSound(key) {
    var audio;
    switch (key) {
        case "w":
            console.log("pppp"); 
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default:
            return;
    }
}

document.addEventListener("keydown", function(event) {
    playSound(event.key); 
    buttonAnimation("." + event.key); 
});

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector(currentKey); 
    if (activeButton) { 
        activeButton.classList.add("pressed");

        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}


