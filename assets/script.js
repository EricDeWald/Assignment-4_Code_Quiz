// alert("working")
// start  button
// on click start timer and display question with choices

var start_btn = document.getElementById("start_button");
var display_q = document.getElementById("display_question");
var display_timer = document.getElementById("stop_watch");
var stop_watch = 30;
var user_choice = "";
var current_question = 0
var questions = [["What does css stand for?","a: cascading style sheet","b: cool system syntax","c: computer style sheet"],["What html tag links your style.js to your html?","a: <link>",'b: <script>','c; <style>']]

var answers = ["a: cascading style sheet",'b: <script>']

start_btn.addEventListener("click", function(){
start_timer();
question_box();
grab_chioces();
});

function start_timer() {
  var score_time = setInterval(function () {
    stop_watch--;
    display_timer.textContent = stop_watch;
    if (stop_watch <= 0) {
        clearInterval(score_time);
        console.log('times up')
    };
  }, 1000);
};

function question_box(){
  var question = document.createElement("h1")
  question.textContent=questions[current_question][0]
  display_q.appendChild(question)
};

function grab_chioces(){
  for(i=0; i < 3;i++){
    create_choice_button(i+1)
  }
}

function create_choice_button(i,){
  var one_button = document.createElement("button")
  one_button.textContent=questions[current_question][i]
  one_button.onclick = check_answer
  one_button.name = i-1
  display_q.appendChild(one_button)
}

function check_answer(event){
  if(event.target.textContent !== answers[parseInt(event.target.name)]){
      //clearInterval(interval)
      stop_watch = stop_watch - 25;
      var truthy = document.createElement('h2')
      truthy.textContent="Wrong"
  }
  else{
      //clearInterval(interval)
      stop_watch = stop_watch + 25;
      var truthy = document.createElement('h2')
      truthy.textContent="Correct"
  };
  if (current_question < 2){
    end_Game()
  }
  else{
  current_question++
  question_box();
  grab_chioces();
  }
};

function end_Game(){
  //go to second html
  console.log(score_time)
}
function score_board(){

}

/////Click on Start button
///// start the timer
//// display the first question with options 
////create a function to check user choice
////each option is a button with click event on it 
//// may be use event.target with matches function

//Stop the timer
  //// if timer <= 0;
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