let number=Math.floor(Math.random()*10+1);
let guesses=0;

document.getElementById("submit").onclick = function (){
let guess=document.getElementById("guessNumber").value;
guesses+=1;
if(guess==number){

    document.getElementById("page").innerHTML="It is right";
}
 else if(guess<number){

    document.getElementById("page").innerHTML="It is small";
}
else{
    
    document.getElementById("page").innerHTML="It is wrong";
    
}
}
