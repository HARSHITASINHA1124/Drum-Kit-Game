//EVENT LISTENER BASICS!!

//When the button (only first button) gets clicked by user
//button should trigger the function below when it receives a click


/*
document.querySelector("button").addEventListener("click",handleClick);

function handleClick() {
    alert("I got clicked!");
}
*/

//this function can be described inside the doc line as well where handleClick is written (next example)


// DOING THIS FOR ALL THE BUTTONS!! (As the above part was only for the first button because of querySelector)


/*
var noOfDrums = document.querySelectorAll("button").length;

for (var i=0; i<noOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        alert("I got clicked!");
    });
}
    */

//Now, insted of alert, we're gonna add sound to that particular element!!!

//How to add sound and play it in JS-->
/*
var audio = new Audio("audio_file.mp3");
audio.play();

Note: audio element has various properties --> refer to documentation!
*/

//DETECTING BUTTON PRESS -->

var noOfDrums = document.querySelectorAll("button").length;

for (var i=0; i<noOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

//****this = identity of button that triggered the event listener!! Can be used instead of 'document'! In simple words, jisko click kiya uski property chnage hogi !! Not entire document.
// this.style.color = "red";

//DETECTING KEYBOARD PRESS -->

document.addEventListener("keydown",function(event) {
    makeSound(event.key);       //keydown has property .key (callback function**)
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "k":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "l":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            default:
                console.log(key);
        }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    //pressed is the style we apply to the key pressed (specified in CSS)
    //but we also want this class to be removed after a short span of time so that it lloks like an animation
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}