//Detecting button press

//Gives an array of all the buttons
var numberOfDrums = document.querySelectorAll(".drum").length; 

//Now this for loop will add the function to all the buttons seperately
//Using the index i to add this click event
for (var i = 0; i < numberOfDrums; i++) {
    
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        var btnType = this.innerHTML;
        makeSound(btnType);
        buttonAnimation(btnType);
    }
    );

}


//Detecting keyboard press
document.addEventListener("keydown",function(e){
    makeSound(e.key);
    buttonAnimation(e.key);
})

//Function to use for both of them
function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;    


        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        

        case "k":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;

        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        default:
            console.log(btnType);
            break;
    }
}

function buttonAnimation(key){
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);

}