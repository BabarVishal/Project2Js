
var ranDomNumber = Math.floor(Math.random()*6)+1;
var ranDomImg  = "dice" + ranDomNumber + ".png";
var randomImg = "images/" + ranDomImg;
 var img = document.querySelectorAll("img")[0];
img.setAttribute("src",randomImg);


var ranDomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImg2 = "images/dice" + ranDomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImg2);

if ( ranDomNumber > ranDomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 is winner 🎉🎊 ";
}
else if( ranDomNumber2 > ranDomNumber){
    document.querySelector("h1").innerHTML = "Player 2 is winner 🎉🎊 ";
}
else{
    document.querySelector("h1").innerHTML = "Tied 💥💥 ";
}
