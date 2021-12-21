// alert("working")
// start  button
// on click start timer and display question with choices

var start_btn = document.getElementById("start_button");
var display_q = document.getElementById("display_question");
var display_timer = document.getElementById("stop_watch");
var stop_watch = 30;
var user_choice = "";

var questions = {q1:["question 1","a","b","c"],q2:["question2","a",'b','c']}

var answers = {a1:"a",a2:'b'}

start_btn.addEventListener("click", start_timer)


  function start_timer() {

    // alert("start")
    
    var score_time = setInterval(function () {

        stop_watch--;
        
        // console.log(stop_watch);
        
        display_timer.textContent = stop_watch;
        
        if (stop_watch === 0) {
            clearInterval(score_time);
            console.log('times up')
        };
    }, 1000);
});

function check_answer(){

    if(user_choice !== answers){
        //clearInterval(interval)
        stop_watch = stop_watch - 25;
        console.log('wrong');
    };
    
    if(user_choice === answers){
        //clearInterval(interval)
        stop_watch = stop_watch + 25;
        console.log('correct');
    };
};

/////Click on Start button
///// start the timer
// display the first question with options 
//create a function to check user choice
//each option is a button with click event on it 
// may be use event.target with matches function

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