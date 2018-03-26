        $(document).ready(function () {

            var arr = [
                {
                    question: 'Question: What is both a place people live and a part of a sweatshirt?',
                    answers: ["The Hat", "The Sleeve", "The Pocket", "The Hood"],
                    correctAnswer: 3
                },
                {
                    question: "Question: What is Jacob's last name?",
                    answers: ["Scofield", "Lamont", "Zuckerberg", "Dorselfin"],
                    correctAnswer: 1
                },
                {
                    question: "Question: What actor/singer gifted a dog to Marilyn Monroe named Mafia?",
                    answers: ["Nickelback", "Dean Martin", "Frank Sinatra", "Alex Trebek"],
                    correctAnswer: 2
                },
                {
                    question: "What is the name of Georga Tech's Mascot?",
                    answers: ["Bumble", "Buzz", "Bumble-Boy"],
                    correctAnswer: 1
                }
            ];


            var questionArray = [];
            var currentQuestion = arr.length - 1;
            var quesTimeOut;
            var numCorrect = 0;
            var numIncorr = 0;
            var countDown;
            var intervalId;
            var qTimer;
            var number = 10;


            start();

            function start() {
                $(".questionPane").empty();
                $(".questionPane").append("<button style='width: 80%; type='button' class='btn btn-primary startBut'> Start </button>")

                //when start button is clicked
                $(".startBut").on("click", function () {
                    $(".start-button").hide();
                    $(".questionPane").empty();
                    $(".questionPane").append("<h2 class='clock'>Time Remaining: <span id= 'timer'>" + number + "</span>    </h2>");
                    $(".clock").append("<h2 id='question'>" + arr[currentQuestion].question + "</h2>");

                    for (var i = 0; i < arr[currentQuestion].answers.length; i++) {
                        $("#question").append("<br><button data-AnsID=" + i + " type='button' class= 'btn btn-primary btn-lg ansDiv'><h3 class='ansOpt'>" + arr[currentQuestion].answers[i] + "</h3></button>");
                        // console.log("Test");
                    }

                    beginTime(); //allows the question timer to begin for each question

                })
            }

            //allow user to click their answer and obtain user input
            $("body").on("click", '.ansDiv', function (event) {
                var test = $(this);
                console.log("Usercliked: ", $(this).attr("data-ansid"));
                userAns = $(this).attr("data-ansid");
                //if corrAns run corrAns() else incorrAns()
                corrAnsFunc();

            });


            function beginTime() {
                //start time on startButton
                qTimer = setInterval(decrement, 1000);

            }

            function corrAnsFunc() {
                console.log("user: " + userAns, "correct: " + arr[currentQuestion].correctAnswer)
                if (userAns == arr[currentQuestion].correctAnswer) {
                    //console.log("user: " + userAns, "correct: " + arr[currentQuestion].correctAnswer)
                    corrAns();

                }
                else {
                    incorrAns();
                    //console.log("user: " + userAns, "correct: " + arr[currentQuestion].correctAnswer)
                }
            }

            function decrement() {
                number--;
                $("#timer").text(number);
                if (number === 0) {
                    timedOut();
                }
                // console.log(number);
                // console.log("decrement");

            }

            function timedOut() {
                number = 10;

                qTimer = clearInterval(qTimer);
                $(".questionPane").empty();
                $(".questionPane").text("You ran out of time! Here comes the next question.");
                quesTimeOut = setTimeout(function () {
                    nextQuestion();
                    beginTime();
                }, 2000);
                currentQuestion--;

            }

            function corrAns() {
                number = 10;

                qTimer = clearInterval(qTimer);
                $(".questionPane").empty();
                $(".questionPane").text("That's correct.");
                //set time for panel (4 seconds) and then run next question
                quesTimeOut = setTimeout(function () {
                    nextQuestion();
                    beginTime();
                }, 2000);
                currentQuestion--;
                numCorrect++;
            }


            function incorrAns() {
                number = 10;

                qTimer = clearInterval(qTimer);
                $(".questionPane").empty();
                $(".questionPane").text("That's incorrect.");
                //set time for panel (4 seconds) and then run next question
                quesTimeOut = setTimeout(function () {
                    nextQuestion();
                    beginTime();
                }, 2000);
                currentQuestion--;
                numIncorr++;

            }

            function nextQuestion() {
                if (currentQuestion < 0) {
                    resultPane();
                } else {
                    qTimer = clearInterval(qTimer);
                    $(".questionPane").empty();
                    //$(".questionPane").text("corrAnsFunction is being skipped");
                    $(".questionPane").append("<h2 class='clock'>Time Remaining: <span id= 'timer'>" + number + "</span>    </h2>");
                    $(".clock").append("<h2 id='question'>" + arr[currentQuestion].question + "</h2>");

                    for (var i = 0; i < arr[currentQuestion].answers.length; i++) {
                        //console.log(arr[currentQuestion][i]);
                        $("#question").append("<br><button data-AnsID=" + i + " type='button' class= 'btn btn-primary btn-lg ansDiv'><h3 class='ansOpt'>" + arr[currentQuestion].answers[i] + "</h3></button>");
                        // console.log("Test");
                    }
                }
            }

            function resultPane() {

                $(".questionPane").empty();
                //$(".questionPane").append("<h2 class='clock'>Time Remaining: <span id= 'timer'>" + number + "</span></h2>");
                $(".questionPane").append("<h2 id='results'> All done here's how you did!</h2>");
                var resultsDiv = $("<div class = 'resultsDiv'</div>")
                $("#results").append("<h3 id= 'results'> Correct Answers: " + numCorrect + "<br> Incorrect answers:" + numIncorr + "</h3>")
                $("#results").append("<h2 id= 'restart'><button type='button' class='btn btn-danger restart-but'> Restart? </button></h2>")

            }

            $("body").on("click", ".restart-but", function () {
                questionArray = [];
                currentQuestion = arr.length - 1;
                numCorrect = 0;
                numIncorr = 0;

                start();
            })



        })