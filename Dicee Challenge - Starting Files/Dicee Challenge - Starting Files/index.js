//create a random number which we use to choose the random dice image
var randomnumber1 = Math.floor(Math.random()*6)+1;


//we do concatination to get the random image 
var randomDiceImage = "dice" + randomnumber1 + ".png";
var randomImageSource ="images/"+ randomDiceImage;

//now, we change the attribute of the src element 
 var image1= document.querySelectorAll("img")[0];


// attribute set karenge to set attribute me jaha se set karna he uska naam and then uski jagah jahan per set karna he uska naam;
//yahan per apan image ka source badal rahe he static se dynamic hena 
image1.setAttribute("src",randomImageSource);

//same image 2 ke liye karenge 
var randomnumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource_2 ="images/dice"+ randomnumber2+".png";
 document.querySelectorAll("img")[1].setAttribute("src",randomImageSource_2);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML=" vishnu parihar WIN✌";
}
else if(randomnumber2>randomnumber1) {
    document.querySelector("h1").innerHTML="PLAYER_2 WIN✌";
}
else{
    document.querySelector("h1").innerHTML ="DRAW🤷‍♀️";
}