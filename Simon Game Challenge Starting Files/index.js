
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

function nextSequence(){
    //Random number for the array index
    var randomNumber = Math.floor(Math.random() * (4 - 0) + 0);   
    
    //Choosing random index number
    var randomChosenColour = buttonColours[randomNumber];
    
    //Push the color
    gamePattern.push(randomChosenColour);
   
    //Animate
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    
    //Play audio
    playSound(randomChosenColour);

    //On click of button
    $(".btn").click(function(){
       var userChosenColour =  $(this).attr("id");
       userClickedPattern.push(userChosenColour);
    });


    console.log(userClickedPattern);

}



function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

nextSequence();


