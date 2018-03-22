//Dynamic Variable Declarations
var title = document.getElementById("title");
var msg2User = document.getElementById("msg2User");
var timeDisp = document.getElementById("timeDisp");

//Question stuff
var quesNumTitle = document.getElementById("quesNumTitle");
var quesNum = document.getElementById("quesNum");
var question = document.getElementById("question");
var quesText = document.getElementById("quesText");

//startButton
var startButton = document.getElementById("start-Button");

//answer buttons
var aBut = document.getElementById("aBut");
var bBut = document.getElementById("bBut");
var cBut = document.getElementById("cBut");
var dBut = document.getElementById("dBut");

//possible answers
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4"); 

var corrAns, incorrAns, intervalId, gameState, questionNum, countDown, nextQuestion;
var questArr = [];



// reset();



var game = {
    question: "",
    corrAns: "",
    incorrAns: "",
    intervalId: 0,
    gameState: "",
    
    reset: function () {
        game.gameState = "preStart";
        $("#msg2User").text("Time Per Question:");
        $("#timeDisp").text("30 Seconds");
        $("#")
       

    },

    gameOn: function () {
        game.gameState = "on";
        $("#start-button").hide();
        $("#msg2User").text("Time Remaining: ")
        //count down fucntion begins?
        $("#timeDisp").text(countDown);
        $("#quesNumTitle").text("Question Number: ");
        $("#quesNum").text(questionNum);
        $("#quesText").text(nextQuestion);
       

        //if right answer run rightAns, if wrong ans run wrongAns, if timedOut run timedOut and go to next question, if final answer

    },

    updateBoard: function () {

    },

    rightAns: function () {
        game.gameState = "corrAnswer";
    },

    wrongAns: function () {
        game.gameState = "incorrAnswer";

    },

    timedOut: function () {
        game.gameState = "timeElapsed";
    },

    results: function (){
        game.gameState = "gameOver"

    }
}



