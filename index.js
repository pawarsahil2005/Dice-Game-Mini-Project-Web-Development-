
function rollDice(){
var n1 = Math.random();
n1 = n1 * 6;
n1 = Math.floor(n1) + 1;

var randomDiceimage1 = "dice" + n1 + ".png"; // dice1.png - dice6.png

var randomImageSource1 =  randomDiceimage1; //images/dice1.png - images/dice6.png

var images1 = document.querySelectorAll("img")[0];

images1.setAttribute("src",randomImageSource1);

// ************************************************************************************************************************//

var n2 = Math.random();
n2 = n2 * 6;
n2 = Math.floor(n2) + 1;

var randomDiceimage2 = "dice" + n2 + ".png"; // dice1.png - dice6.png

var randomImageSource2 = randomDiceimage2; //images/dice1.png - images/dice6.png

var images2 = document.querySelectorAll("img")[1];

images2.setAttribute("src",randomImageSource2);

// Winning the game 

if(n1 > n2)
{
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if(n2 > n1)
{
    document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw! Try Again"
};
}