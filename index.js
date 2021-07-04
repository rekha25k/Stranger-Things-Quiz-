var readLineSync = require("readline-sync");
const chalk = require("chalk");
var score = 0;

function welcomeMessage(){
var userName = readLineSync.question("\nPlease enter your name ");
console.log("\nHi "+userName+'. Welcome to Quiz on "Stranger Things" ');
}

//console.log("1. Enter any key to continue\n2. Enter q to cancel ");

var questionBank = [
  {
    question: 
    `In which U.S. state is the show set?
      a: Illinois
      b: Ohio
      c: Indiana\n`,
    answer: 'c'
  },

  {
    question:
    `Which character does Millie Bobby Brown play?
      a: Barb
      b: Eleven
      c: Joyce\n`,
    answer: 'b'
  },

  {
    question: 
    `What is the Upside Down?
    a: a monster's home
    b: alternate dimension
    c: type of cake\n`,
    answer: 'b'

  },

  {
    question: 
    `How did Eleven obtain her superhuman powers?
    a: evolution
    b: radiation
    c: drugs\n`,
    answer: 'c'

  },

  {
    question:
    `Which of the show's characters is affected by cleidocranial dysplasia?
    a: Dustin
    b: Mike
    c: Will\n`,
    answer: 'a'
  },
];

var highScores = [
  {
    name: "Pooja",
    score: 5,
  },
  {
    name:"Harsh",
    score: 5,
  },
  {
    name: "Piyush",
    score: 5,
  }
]

function greetingMessage(){
  var currentTime = new Date();
  var currentOffset = currentTime.getTimezoneOffset();

  var ISTOffset = 330;   // IST offset UTC +5:30 
  var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);
  // ISTTime now represents the time in IST coordinates

  var hours = ISTTime.getHours()

  if (hours < 12 && hours >4) {
    console.log("Good morning!");
  }else if(hours > 12 && hours< 18) {
    console.log("Good afternoon!");
  }else{
    console.log("Good evening!");
  }
}

  function play(){
for(let i=0; i < questionBank.length ; i++){
  console.log("Question "+(i+1));
  var currentQuestion = questionBank[i];
quiz(currentQuestion);
}
console.log("Thanks for playing!");

highScores.map(score => console.log(chalk.bgMagenta(score.name)+ " : "+ chalk.inverse(score.score)));
  }
function quiz(currentQuestion){
  
  var userAns =  readLineSync.question(currentQuestion.question);
  if(userAns.toLowerCase() === currentQuestion.answer.toLowerCase()){
    console.log("You are right!");
    score++;
  }
  else{
  console.log("You are wrong!"); }
  console.log("Your current score is " +score);
  console.log("-----------------------------");
}

greetingMessage();
welcomeMessage();
play();