var readlineSync = require("readline-sync");
var score = 0;
var userInput = readlineSync.question("Hi! what is your name? ")
console.log("Hi! " + userInput + " welcome to DO YOU KNOW GAGAN")
var highscores = [{
  name : "MAX",
  score : 3,
},{
  name : "SAM",
  score : 3,
}]
var questions = [{
  question : "Where do i live?  \n mysore \n bangalore \n",
  answer : "Mysore"
},{
  question : "Where do i work?  \n infosys \n SSI People \n",
  answer : "SSI people"
},{
  question : "What shift do i work?  \n Day shift \n Night shift \n",
  answer : "Night shift"
}]
function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() == answer.toLowerCase()){
    console.log("You're Right!");
    score++;
  } else {
    console.log("You're Wrong!");
    score--;
  }
  console.log("---------------")
}

for (var i=0;i<questions.length;i++){
  var currentquestion = questions[i];
  play(currentquestion.question,currentquestion.answer)
}
console.log("Your current score is: " + score)
console.log("Highscores: ");
for (var i=0;i<highscores.length;i++){
  var currentscore = highscores[i];
    console.log(currentscore.name);
  console.log(currentscore.score);
}
console.log("Now send you screenshot so that GAGAN so that he can update your score to the leaderboard. \nThankyou :-]");