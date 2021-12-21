//alert("working")
// start  button
// on click start timer and display question with choices

var start_btn = document.getElementById("start_button");
var display_q = document.getElementById("display_question");
var display_timer = document.getElementById("stop_watch");
var timer = 30;
var user_choice = "";
var questions = {q1:["question 1","a","b","c","ans"],q2:["question2","a",'b','c','ans']}

start_btn.addEventListener("click", function () {
     
  alert("start")
     for (let i = 0; i < word.length; i++) {
     
        // console.log(underScore);
        
        display_q.textContent = underScore;

        var interval = setInterval(function () {
            timer--;
            // console.log(timer);
            display_timer.textContent = timer;
            if (timer === 0) {
                clearInterval(interval);
                losses++;
                displayWord.textContent = "Game over";
            }
            if(underScore === word){
                clearInterval(interval)
                wins++;
                console.log("win");
            }
        }, 1000);
})

// document.body.addEventListener("keyup", function (e) {
//     // console.log(e.key);
//     var userinput = e.key;
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === userinput) {
//             // console.log(word[i],i);
//           var newStr = underScore.split("");
//           newStr[i] = userinput;
//           console.log(newStr);
//           underScore= newStr.join("");

//           displayWord.textContent = newStr.join("");
//             // console.log(underScore[i]);
//         }

//     }
// })


// var questions = [
//     {
//         q: "",
//         options: ["", "", "", ""],
//         correct: ""
//     },
//     {
//         q: "",
//         options: ["", "", "", ""],
//         correct: ""
//     }
// ]

//Click on Start button
  // start the timer
  // display the first question with options 
    // check if index < questions.length
    //create a function with index as an argument
  //each option is a button with click event on it // may be use event.target with matches function

//Stopt the timer
  // if timer = 0;
  // if user finished the quiz

//Find out if user clicked option is correct or not
  //if correct : display message (for certain time period)
  //wrong : display msg for certain time period)
  // calculate the score (but don't display) and change the timer accordingly
// index++
//display the next question

//once user finished with last question
 // stop timer
 //ask for user initials in a form > take that info and display it with score
 //save initials and score in local storage
 // a href will refer to second html file