const quizdata = [
    {
        strand: "Tools and Equipment", 
        question: "Which tool is used for measuring length accurately?", 
        choices: ["Hammer", "Ruler", "Screwdriver", "Pliers"], 
        answer: "Ruler"
    },
    {
        strand: "Safety in Workshop", 
        question: "What should you wear to protect your eyes in the workshop?", 
        choices: ["Gloves", "Helmet", "Goggles", "Boots"], 
        answer: "Goggles"
    },
    {
        strand: "Materials", 
        question: "Which of the following is a natural material?", 
        choices: ["Plastic", "Glass", "Nylon", "Wood"], 
        answer: "Wood"
    },
    {
        strand: "Drawing and Design", 
        question: "What is used to draw perfect circles?", 
        choices: ["Set square", "Compass", "Protractor", "Ruler"], 
        answer: "Compass"
    },
    {
        strand: "Simple Machines", 
        question: "Which of the following is an example of a lever?", 
        choices: ["Wheelbarrow", "Pulley", "Screw", "Wedge"], 
        answer: "Wheelbarrow"
    },
];

let currentQuestion = 0;
let score = 0;
let timeUp = false;

function runQuiz() {
    const question = quizdata(currentQuestion);

    console.log(question.question);
    console.log(question.choices);

    timeUp = false;

    setTimeout(() => {
        timeUp = true;
        console.log('Times up! The correct answer is ${question.answer}');

        currentQuestion++;

        if (currentQuestion < quizdata.length) {
            runQuiz();
        } else {
            endGame();
        }
    }, 60000);

    const userAnswer = "Ruler";

    if (!timeUp) {
        if (userAnswer === question.answer) {
          console.log("Correct!");
          score++;
        } else {
            console.log('Incorrect! The correct answer is ${question.answer}');
        }

        currentQuestion++;

        if (currentQuestion < quizdata.length) {
            runQuiz();
        } else {
            endGame();
        }
    }
}

function endGame() {
    console.log("Game Over!");
    console.log('Final Score: ${score}/${quizdata.length');
}

runQuiz();





