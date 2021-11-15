var randomNumber1 =Math.floor(  (Math.random() * 6 ) + 1);

var randonDiceImage = "dice"+ randomNumber1 + ".png"

var randomImage = "images/"+ randonDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImage);

var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;

var randonDiceImage1 = "images/dice" + randomNumber2 + ".png"

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randonDiceImage1)


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 Wins!🎇🎆🎆"
    document.querySelector("h1").style.fontSize = "5rem"
}

else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player2 Wins!🎇🎆🎆"
    document.querySelector("h1").style.fontSize = "5rem"
}

else{
    document.querySelector("h1").innerHTML = "Draw!😮🤯🤯"
    document.querySelector("h1").style.fontSize = "5rem"
}
    
