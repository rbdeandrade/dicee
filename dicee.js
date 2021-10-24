document.querySelector("button").addEventListener("click", function () {

var randomNumber1 = Math.floor (Math.random() * 6) + 1; //1-6
var randomImageSource = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor (Math.random() * 6) + 1; //1-6
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "P1 won!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "P2 won!";
} else {
  document.querySelector("h1").innerHTML = "It's a draw!";
}
});


document.querySelectorAll("button")[1].addEventListener("click", function (){
  location.reload();
});
