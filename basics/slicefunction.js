//use of slice function
var tweet= prompt("compose your tweet");
var tweetunder140=tweet.slice(0,140);
alert(tweetunder140);





//doing capital the first letter of the string of runtime input;;;;l
var name =prompt ("enter your name");
var firstletter = name.slice(0,1);//pehla character ko alag nikal liya


var restletters= name.slice(1,30); //yahan per bache hue characters ko nikal liya 

 var uprcse_fistltr = firstletter.toUpperCase();//first letter ko uppercase me convert kar diya 
 var lwcase_rstltr =restletters.toLowerCase();  //baki bache hue rest letters ko lowercase me convert kar diya

alert("hello"+ " "+uprcse_fistltr+lwcase_rstltr);

