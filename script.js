/* Declare variables below to save the different sections (divs) of your story*/
let opening = document.querySelector(".story-opening");
let optionOneButton = document.querySelector(".option-one");
let optiontwoButton = document.querySelector(".option-two");
let Optionthreebutton = document.querySelector(".option-three");
let optionOnescreen = document.querySelector(".option-one-screen");
let optiontwoscreen = document.querySelector(".option-two-screen");
let buttons = document.querySelector(".buttons");
let optionOneEnd = document.querySelector(".option-One-End");
let optiontwoEnd = document.querySelector(".option-two-end");
let optionfourEnd = document.querySelector(".option-four-end");
let OptionfourButton = document.querySelector(".option-four");
let optionfourscreen = document.querySelector(".option-four-screen");

optionOneButton.onclick = function() {
    opening.style.display = "none";
    buttons.style.display = "none";
    optionOnescreen.style.display = "block";
};
optiontwoButton.onclick = function() {
    opening.style.display = "none";
    optiontwoscreen.style.display = "block";
    buttons.style.display = "none";
};
Optionthreebutton.onclick = function() {
    optiontwoscreen.style.display = "none";
    optiontwoEnd.style.display = "block";
};

OptionfourButton.onclick = function() {
    opening.style.display = "none";
    optionfourscreen.style.display = "none";

};