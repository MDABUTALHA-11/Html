//let number=Math.floor(Math.random()*10+1);
//let guesses=0;

//document.getElementById("submit").onclick = function (){
//let guess=document.getElementById("guessNumber").value;
//guesses+=1;
/*if(guess==number){

    //document.getElementById("page").innerHTML="It is right";
}
 //else if(guess<number){

    document.getElementById("page").innerHTML="It is small";
}
else{
    
    document.getElementById("page").innerHTML="It is wrong
}
}*/

/*document.getElementById("btn").onclick = function() {
    let temp;
if (document.getElementById("a").checked){
    temp=document.getElementById("input").value;
    temp=Number(temp);
    temp=tocel(temp);
    document.getElementById("temp").innerHTML=temp+ "C"
}
 else if (document.getElementById("b").checked){
    temp=document.getElementById("input").value;
    temp=Number(temp);
    temp=tofar(temp)
    document.getElementById("temp").innerHTML=temp+ "F"
    
}
else {
    document.getElementById("temp").innerHTML="plese select the option";
}
}
function tocel(temp){
    return (temp-32)*5/9;

}
 function tofar(temp){
    return temp*9/5+32;
    
}
 */
/*let row=window.prompt("Enter # row");
let coloume =window.prompt("Enter # coloume");
for(i=1;i<row;i+=1){
    for(j=1;j<coloume;j+=1)
        document.getElementById("new").innerHTML=j;
}*/
/*const imageUpload = document.getElementById('imageUpload');

// Add an event listener to detect file upload
imageUpload.addEventListener('change', function() {
  // Get the selected file
   const file = imageUpload.files[0];

  // Create a FileReader object
  const reader = new FileReader();

  // Set up the reader's onload event handler
  reader.onload = function(e) {
    // Get the image data URL
    const imageDataUrl = e.target.result;

    // Display the uploaded image
    const imagePreview = document.getElementById('imagePreview');
    imagePreview.src = imageDataUrl;
  };

  // Read the selected file as Data URL
  reader.readAsDataURL(file);
*/
let signin=document.getElementById("signin");
let signup=document.getElementById("signup");
let signinbtn=document.getElementById("signinbtn");
let signupbtn=document.getElementById("signupbtn");
signupbtn.addEventListener("click",function(){
    signin.style.display="none";

    signup.style.display="block";
})

signinbtn.addEventListener("click",function(){
    signin.style.display="block";
    signup.style.display="none";
   


})

