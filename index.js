
var numberOfdrumButtons = document.querySelectorAll(".drum").length;


for (var i = 0; i < numberOfdrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);//the makeSound function uses a switch statement to determine what sound to play. here the innerHTML is the parameter. and in the keydown function the parameter (or data will be the event.key (which is aa property of the keydown object that is created when the keydown method is called an the document.))

        buttonAnimation(buttonInnerHTML);


    });
}

addEventListener("keydown", function (event) {//this works also if we write: document.addEventListener(rest of code...). essentialy we are using the same method (addEventListener) like with clik but we added it to the whole document instead of to a specific element (like document.querySelectorAll(".drum")[i])
    makeSound(event.key);

    buttonAnimation(event.key);

});

//the callback function is called be the event that was listened for, not by us.


function makeSound(keys) {
    switch (keys) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");;
            kick.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        default:
            console.log(buttonInnerHTML);
            break;
    }
}


function buttonAnimation(currentKey) {//we can call this function in both places where we call makeSound. i think a bettet name for the parameter would be currentEvent because its either a keydown or a click

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 100);//this is 0.1 s

}