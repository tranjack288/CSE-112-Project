const magic8Ball = document.querySelector(".magic-8-ball");
const shakeButton = document.querySelector(".shake-button");
const textInput = document.getElementById("question");
import { getRandomResponse } from "./magic8Ball.js";
import { getRandomInt } from "./utils.js";
const min_time = 300;
const max_time = 600;
const speed = 50;
const opacity_interval = 0.01;
const opacity_speed = 20;
const wait_before_clear = 350;


/*
  * Implements the fading effect on the text box on button press
  * and clears the prompt box
  */
function clearPrompt() {
  // clear the button 
  shakeButton.style.opacity = 0;


  magic8Ball.style.opacity = 0;
  // change the background color of the prompt box to that of the background
  textInput.style.backgroundColor = "wheat";
  // have the border fade out as well
  textInput.style.border = "none";
  // have the prompt box both fade out
  var i = 1;
  while (i < (1 / opacity_interval)) {
    const interval = i;
    setTimeout(function () {
      textInput.style.opacity = 1 - (interval * opacity_interval);
    }, opacity_speed * interval + wait_before_clear);
    i++;
  }

  setTimeout(function () {
    magic8Ball.textContent = "";
    magic8Ball.style.opacity = 1;
  }, opacity_speed * i + wait_before_clear);
}



/**
  * This function was created by ChatGPT to
  * return the response that was retrieved.
  * backend team must edit this function
  */
function shakeMagic8Ball() {
  const response = getRandomResponse();
  // it might be best if it shakes for a differing amount of time
  const timeout = getRandomInt(min_time, max_time) + wait_before_clear + (opacity_speed * (1 / opacity_interval));
  if (textInput.value=="") {
    alert("Our noodle doesn't know what you want to ask if you don't enter anything");
  } else {
    clearPrompt();
    // I couldn't get the typing effect as a seperate function to work, this is kind of a mess, should be fixed later
    setTimeout(function () {
      var i = 0;
      while (i < response.length) {
        const iteration = i; // this is needed to make sure iteration is the correct value when the function is called
        setTimeout(function () {
          magic8Ball.textContent += response.charAt(iteration);
        }, speed * iteration);
        i++;
      } // end of while loop

      // put the prompt box back to normal
      setTimeout(function () { 
        shakeButton.style.opacity = 1;
        textInput.style.opacity = 1;
        textInput.style.backgroundColor = "white";
        textInput.style.border = "2px solid black";
        // make the textbox empty
        textInput.value = "";
      }, speed * i);
    }, timeout);
  }
}

shakeButton.addEventListener("click", shakeMagic8Ball);

textInput.addEventListener("keyup", function(event){
  event.preventDefault();
    if (event.key === 'Enter') {
        shakeButton.click();
    }
})
