var score1 = Math.random();
var randomNumber1 = Math.floor( score1 * 6) + 1;
var score2 = Math.random();
var randomNumber2 = Math.floor( score2 * 6) + 1;

var image1 =  document.querySelector(".img1");
var image2 = document.querySelector(".img2");

// For first dice
switch(randomNumber1){
    case 1: 
        image1.setAttribute("src","images/dice1.png");
        break;
    case 2: 
        image1.setAttribute("src","images/dice2.png");
        break;
    case 3:
        image1.setAttribute("src","images/dice3.png");
        break;
    case 4: 
        image1.setAttribute("src","images/dice4.png");
        break;
    case 5:
        image1.setAttribute("src","images/dice5.png");
        break;
    case 6:
        image1.setAttribute("src","images/dice6.png");
        break;
}


// For second dice
switch(randomNumber2){
    case 1: 
        image2.setAttribute("src","images/dice1.png");
        break;
    case 2: 
        image2.setAttribute("src","images/dice2.png");
        break;
    case 3:
        image2.setAttribute("src","images/dice3.png");
        break;
    case 4: 
        image2.setAttribute("src","images/dice4.png");
        break;
    case 5:
        image2.setAttribute("src","images/dice5.png");
        break;
    case 6:
        image2.setAttribute("src","images/dice6.png");
        break;
}


var heading = document.querySelector("h1");
if (randomNumber1 > randomNumber2){
    heading.innerHTML = "Player 1  won 🚩";
}

else if (randomNumber1 === randomNumber2){
    heading.innerHTML = "Draw!";
}

else{
    heading.innerHTML = "Player 2 won 🚩"
}