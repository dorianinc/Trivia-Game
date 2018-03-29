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
        rightImage: ["<img src='../images/will.jpg'>"]
    },
    {
        text: ["Finish This Quote:", "\"Rule number one [blank] and that's it!\""],
        answer: "B: No touching of the hair or face",
        options: ["Don't talk about Fight Club", "No touching of the hair or face", "Don't be a hero", "There are no rules"],
    },
    {
        text: ["What Film Is This Line From?", "\"What she lacks in age, she makes up for in madness.\""],
        answer: "D: Kill Bill Vol. 1",
        options: ["Ruby Sparks", "Titanic", "Black Swan", "Kill Bill Vol. 1"],
    },
    {
        text: ["What is the answer to life the universe and everything?", ""],
        answer: "A: 42",
        options: ["42", "Banana", "22", "Apple"],
    },
    {
        text: ["What Film Is This Line From?", "\"Momma always told me life is like a box of chocolates\""],
        answer: "C: Forrest Gump",
        options: ["Big Fish", "Silver Linings Playbook", "Forrest Gump", "Billy Madison"],
    },
    // NEXT goes here
    
];

$(document).ready(function() {
    // Create a function that creates the start button and initial screen
    
    function startScreen() {
        startButton = "<p class='button'><a class='btn btn-danger btn-lg btn-block start-button ' href='#' role='button'>Start Trivia Game</a></p>";
        $(".mainContent").html(startButton);
    }
    
    startScreen();
});

$('body').on('click', '.start-button', function()
{
    mainScreen(); 

console.log("button working");
});

$("body").on("click", ".options", function()
{
    selectedOption = $(this).text();
    if(selectedOption === currentQuestion.answer)
    {
        alert("correct")
        winner();
    }
    console.log(questions[0].answer)
    console.log(selectedOption);
});


function mainScreen()
{
    currentQuestion = questions[currentQuestion];
    mainHTML = "<p class = 'text-center question'> " + currentQuestion.text[0] + "</br>" + currentQuestion.text[1] + "</p>" + "<p class = 'text-center options'>" + "A: " + currentQuestion.options[0] + "</p>" + "<p class = 'text-center options'>" + "B: " + currentQuestion.options[1] + "</p>" + "<p class = 'text-center options'>" + "C: " + currentQuestion.options[2] + "</p>" + "<p class = 'text-center options'>" + "D: " + currentQuestion.options[3] + "</p>";
    $('.mainContent').html(mainHTML);
    console.log(questions[0]);
}


function winner()
{
    winImage = currentQuestion.rightImage;
    winHTML =  winImage;
    $('.mainContent').html(winHTML);
}


function loser()
{
    loseHTML = "<p class = ' text-center question'> " + questions[0].text[0] + "</br>" + questions[0].text[1] + "</p>" + "<p class = 'text-center options'>" + "A: " + questions[0].options[0] + "</p>" + "<p class = 'text-center options'>" + "B: " + questions[0].options[1] + "</p>" + "<p class = 'text-center options'>" + "C: " + questions[0].options[2] + "</p>" + "<p class = 'text-center options'>" + "D: " + questions[0].options[3] + "</p>";
    $('.mainContent').html(mainHTML);
    console.log(mainHTML);
}
