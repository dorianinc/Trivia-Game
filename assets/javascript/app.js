// Global Variables //
var timer = 30;
var currentQuestion = 0;
var correct = 0;
var inCorrect = 0;
var unAnswered = 0;

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
    // NEXT goes here
    
];

$(document).ready(function() {
    // Create a function that creates the start button and initial screen
    
    function startScreen() {
        startButton = "<p class = 'text-center welcome'>" + "&#169; Dorian Inc Presents..." + "</p>" + "<p class='button'><a class='btn btn-danger btn-lg btn-block start-button ' href='#' role='button'>A Trivia Game</a></p>";
        $(".mainContent").html(startButton);
    }
    
    startScreen();
});

$('body').on('click', '.start-button', function()
{
    mainScreen(); 
});

$("body").on("click", ".options", function()
{
    selectedOption = $(this).text();
    if(selectedOption === currentQuestion.answer)
    {
        winner();
        console.log(currentQuestion);
    }
    else
    {
        loser();
    }
});


function mainScreen()
{
    currentQuestion = questions[currentQuestion];
    mainHTML = "<p class = 'text-center question'> " + currentQuestion.text[0] + "</br>" + currentQuestion.text[1] + "</p>" + "<p class = 'text-center options'>" + "A: " + currentQuestion.options[0] + "</p>" + "<p class = 'text-center options'>" + "B: " + currentQuestion.options[1] + "</p>" + "<p class = 'text-center options'>" + "C: " + currentQuestion.options[2] + "</p>" + "<p class = 'text-center options'>" + "D: " + currentQuestion.options[3] + "</p>";
    $('.mainContent').html(mainHTML);
}

function winner()
{
    winImage = currentQuestion.rightImage;
    winHTML = "<p class = 'text-center options'>" + "Thats Correct!" + "</p>" + winImage;
    $('.mainContent').html(winHTML);
    correct++;
    console.log("You have " + correct + " correct answer(s)");    
}


function loser()
{
    loseImage = currentQuestion.wrongImage;
    winHTML = "<p class = 'text-center options'>" + "Thats Incorrect" + "</p>" + loseImage;
    $('.mainContent').html(winHTML);
    inCorrect++;
    console.log("You have " + inCorrect + " incorrect answer(s)")
}

function nextQuestion()
{
    currentQuestion = questions[currentQuestion];
    mainHTML = "<p class = 'text-center question'> " + currentQuestion.text[0] + "</br>" + currentQuestion.text[1] + "</p>" + "<p class = 'text-center options'>" + "A: " + currentQuestion.options[0] + "</p>" + "<p class = 'text-center options'>" + "B: " + currentQuestion.options[1] + "</p>" + "<p class = 'text-center options'>" + "C: " + currentQuestion.options[2] + "</p>" + "<p class = 'text-center options'>" + "D: " + currentQuestion.options[3] + "</p>";
    $('.mainContent').html(mainHTML);
    console.log(currentQuestion);
}
