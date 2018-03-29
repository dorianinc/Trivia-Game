// Global Variables //
var timer = 30;
var correct = 0;
var inCorrect = 0;
var unAnswered = 0;

var questions =
[
    {
        text: ["What Film Is This Line From?", "\"Little did he know that this simple, seemingly innocuous act would result in his imminent death.\""],
        answer: "Stranger Than Fiction",
        options: ["Semi-Pro", "Disjointed", "Stranger Than Fiction", "Life"],
    },
    {
        text: ["Finish This Quote:", "\"Rule number one [blank] and that's it!\""],
        answer: "No touching of the hair or face",
        options: ["Don't talk about Fight Club", "No touching of the hair or face", "Don't be a hero", "There are no rules"],
    },
    {
        text: ["What Film Is This Line From?", "\"What she lacks in age, she makes up for in madness.\""],
        answer: "Kill Bill Vol. 1",
        options: ["Ruby Sparks", "Titanic", "Black Swan", "Kill Bill Vol. 1"],
    },
    {
        text: ["\"What is the answer to life the universe and everything?\""],
        answer: "42",
        options: ["42", "Banana", "22", "Apple"],
    },
    {
        text: ["What Film Is This Line From?", "\"Momma always told me life is like a box of chocolates\""],
        answer: "Forrest Gump",
        options: ["Big Fish", "Silver Linings Playbook", "Forrest Gump", "Billy Madison"],
    },
    // NEXT goes here
    
];

$(document).ready(function() {
    // Create a function that creates the start button and initial screen
    
    function initialScreen() {
        startScreen = "<p class='text-center'>All done, here's how you did!" + "</p>";
        $(".mainContent").html(startScreen);
    }
    
    initialScreen();

