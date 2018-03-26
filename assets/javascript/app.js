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

var corrAns, incorrAns, intervalId, gameState, questionNum, countDown, nextQuestion, numCorr, numIncorr;
var questArr = [];





reset();

var game = {
    question: "",
    corrAns: "",
    incorrAns: "",
    intervalId: 0,
    gameState: "",
    
    reset: function () {
        game.gameState = "reset";
        $(".questionPanel").hide();


    },

    gameOn: function () {
        game.gameState = "on";
        $("#start-button").hide();
        $("#msg2User").text("Time Remaining: ")
        //count down function until change slide?
        $("#timeDisp").text(countDown);
        $("#quesNumTitle").text("Question Number: ");
        $("#quesNum").text(questionNum);
        $("#quesText").text(nextQuestion);
       

        //if right answer run rightAns...next ques, if wrong ans run wrongAns... next ques, if timedOut run timedOut... next question, if final answer run results and provide resetKey to go again

    },

    updateBoard: function () {

    },

    rightAns: function () {
        game.gameState = "corrAnswer";
        //hide everything except
        $("#msg2User").text("Correct!");
    },

    wrongAns: function () {
        game.gameState = "incorrAnswer";
         //hide everything except
        $("#msg2User").text("Incorrect!");

    },

    timedOut: function () {
        game.gameState = "timeElapsed";
        //hide everything except
        $("#msg2User").text("You ran out of time!!");
    },

    results: function (){
        game.gameState = "gameOver";
        //hide everything except
        $("#msg2User").text("You got: " + numCorr + "Correct! You got: " +numIncorr);
        $("#")

    }
}



