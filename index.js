var userName = prompt("Your Good Name Please");
var firstLetter = userName.slice(0,1);
var uppercase_ltr = firstLetter.toUpperCase();
var remainingLetters = userName.slice(1, userName.length);
var remaining_lower = remainingLetters.toLowerCase();
alert("Hello " + uppercase_ltr + remaining_lower + " Welcome to Mr. Aman's Portfolio");


// STYLING THE BUTTON WITH JAVASCRIPT 
// document.querySelector(".click").style.backgroundColor="green";
// document.querySelector(".click").style.margin="20px";


function myfun(){
    // document.querySelector(".par").classList.add("text-tst");
    // document.querySelector(".par").classList.remove("text-tst");
    document.querySelector("body").classList.toggle("js-tst");
}








