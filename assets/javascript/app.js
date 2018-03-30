
// Global Variables //
/*-------------------------------------------------------------------*/
var time = 30;
var timer;

var correct = 0;
var inCorrect = 0;
var unAnswered = 0;

var currentQuestion;
var currentQuestionNumber = 0;

// Object containing questions //
/*-------------------------------------------------------------------*/
var questions =
[
    {
        text: ["What Film Is This Line From?", "\"Little did he know that this simple, seemingly innocuous act would result in his imminent death.\""],
        answer: "C: Stranger Than Fiction",
        options: ["Semi-Pro", "Disjointed", "Stranger Than Fiction", "Life"],
        rightImage: ["<img class = 'center-block movie' src='assets/images/correctAnswer1.gif'>"],
        wrongImage: ["<img class = 'center-block movie' src='assets/images/wrongAnswer1.gif'>"]
    },
    {
        text: ["Finish This Quote:", "\"Rule number one [blank] and that's it!\""],
        answer: "B: No touching of the hair or face",
        options: ["Don't talk about Fight Club", "No touching of the hair or face", "Don't be a hero", "There are no rules"],
        rightImage: ["<img class = 'center-block movie' src='assets/images/correctAnswer2.gif'>"],
        wrongImage: ["<img class = 'center-block movie' src='assets/images/wrongAnswerB.gif'>"]
    },
    {
        text: ["What Film Is This Line From?", "\"What she lacks in age, she makes up for in madness.\""],
        answer: "D: Kill Bill Vol. 1",
        options: ["Ruby Sparks", "Titanic", "Black Swan", "Kill Bill Vol. 1"],
        rightImage: ["<img class = 'center-block movie' src='assets/images/correctAnswer3.gif'>"],
        wrongImage: ["<img class = 'center-block movie' src='assets/images/wrongAnswer3.gif'>"]
    },
    {
        text: ["What is the answer to life the universe and everything?", ""],
        answer: "A: 42",
        options: ["42", "Banana", "22", "Apple"],
        rightImage: ["<img class = 'center-block movie' src='assets/images/correctAnswer4.gif'>"],
        wrongImage: ["<img class = 'center-block movie' src='assets/images/wrongAnswer4.gif'>"]
    },
    {
        text: ["What Film Is This Line From?", "\"Momma always told me life is like a box of chocolates\""],
        answer: "C: Forrest Gump",
        options: ["Big Fish", "Silver Linings Playbook", "Forrest Gump", "Billy Madison"],
        rightImage: ["<img class = 'center-block movie' src='assets/images/correctAnswer5.gif'>"],
        wrongImage: ["<img class = 'center-block movie' src='assets/images/wrongAnswer5.gif'>"]
    },
];
/*-------------------------------------------------------------------*/
/* OnLoad, create Start button */

$(document).ready(function() {
    
    function startButton() {
        startButton = "<p class = 'text-center welcome'>" + "Dorian Inc Presents..." + "</p>" + "<p class='button'><a class='btn btn-danger btn-lg btn-block start-button ' href='#' role='button'>A Trivia Game</a></p>";
        $(".mainContent").html(startButton);
    }
    
    startButton();
});
/*-------------------------------------------------------------------*/
/* OnClick Functions */

$('body').on('click', '.start-button', function() // On Click, starts game and timer
{
    startGame();
    countDown(); 
});

$('body').on('click', '.reset-button', function() // On Click, restarts game and timer
{
   reset();
   countDown(); 
    // Start Timer
});

$("body").on("click", ".options", function() // On Click, takes user selected option and runs it thru the CheckWinLose function
{
    selectedOption = $(this).text();
    checkWinLose();
});

/*-------------------------------------------------------------------*/
/* Start Game Function, boots up gameHTML containing questions and options*/

function startGame() // Starts game, boots up questions and GameHTML
{
    currentQuestion = questions[currentQuestionNumber];
    gameHTML ="<p class = 'timer'>" + "Time Remaining: " + time + "</p>" + "<p class = 'text-center question'> " + currentQuestion.text[0] + "</br>" + currentQuestion.text[1] + "</p>" + "<p class = 'text-center options'>" + "A: " + currentQuestion.options[0] + "</p>" + "<p class = 'text-center options'>" + "B: " + currentQuestion.options[1] + "</p>" + "<p class = 'text-center options'>" + "C: " + currentQuestion.options[2] + "</p>" + "<p class = 'text-center options'>" + "D: " + currentQuestion.options[3] + "</p>";
    $('.mainContent').html(gameHTML);
    (countDown);
}

function countDown() // Function in charge of 30 second countdown
{
    timer = setInterval(thirtySeconds, 1000)
    function thirtySeconds()
    {
        if(time === 0)
        {
            timeOut();
            clearInterval(timer);
        }
        if(time > 0)
        {   
            time--;
            console.log(time);
        }
        $(".timer").html("Time Remaining: " + time);
    }
}

/*-------------------------------------------------------------------*/
/* If option is Selected run checkWinorLose, If timer hits 0 run timeout function */

function checkWinLose()
{
    if(selectedOption === currentQuestion.answer) // If user selected option is correct 
    {
        winImage = currentQuestion.rightImage;
        gameHTML = "<p class = 'text-center options'>" + "Thats Correct!" + "</p>" + winImage;
        $('.mainContent').html(gameHTML);
        correct++;
        currentQuestionNumber++;
        clearInterval(timer);
        setTimeout(next, 5000);
    }
    else if(selectedOption !== currentQuestion.answer) // If user selected option is incorrect
    {
        loseImage = currentQuestion.wrongImage;
        gameHTML = "<p class = 'text-center options'>" + "Thats Incorrect! The correct answer was " + currentQuestion.answer + "</p>" + loseImage;
        $('.mainContent').html(gameHTML);
        inCorrect++;
        currentQuestionNumber++;
        clearInterval(timer);;
        setTimeout(next, 5000);
    }
    console.log ("current number is: " + currentQuestionNumber);
}

function timeOut()   // If timer hits 0
{
    loseImage = currentQuestion.wrongImage;
    gameHTML = "<p class = 'text-center timesUp'> " + "Aw, looks like you timed out! The correct answer was " + currentQuestion.answer + "</p>" + loseImage; 
    $('.mainContent').html(gameHTML);
    unAnswered++;
    currentQuestionNumber++;
    setTimeout(next, 4000);  //  change to 4000 or other amount
    console.log ("current number is: " + currentQuestionNumber);
}

/*-------------------------------------------------------------------*/
/* Function incharge of moving onto the next question and final tally page */

function next()
{
    if(currentQuestionNumber < 5) // Enables us to loop thru all the questions
    {
        startGame();
        time = 30;
        countDown();
    }
    else // If all questions have been looped thru this sends up to the finally tally page
    {
        finalTally();
    }
}
/*-------------------------------------------------------------------*/
/* Sends you to end of page to Tally Score*/
function finalTally()
{
    gameHTML = "<p class = 'text-center closer'> " + "Now lets see how you did..." + "</p>" + "<p class = 'text-center results'>" + "Correct: " + correct + "</p>" + "<p class = 'text-center results'>" + "Incorrect: " + inCorrect + "</p>" + "<p class = 'text-center results'>" + "Unanswered: " + unAnswered + "</p>"  + "<p class='button'><a class='btn btn-danger btn-lg btn-block reset-button ' href='#' role='button'>Encore?</a></p>";
    $('.mainContent').html(gameHTML);
}
/*-------------------------------------------------------------------*/
/* Reset Function*/
function reset()
{
    time = 30;
    currentQuestionNumber = 0;
    correct = 0;
    inCorrect = 0;
    unAnswered = 0;
    startGame();
}