const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let questions = getQuestions();
// just getQuestions in startGame -> questions = undefined
let currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function getQuestions() {
    $.get('/questions.json', (res) => {
        questions = res;
      });
}

function startGame() {
    console.log('Started');
    startButton.classList.add('hide');
    getQuestions();
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    setAnswerChoices(questions[currentQuestionIndex]);
    showQuestion(questions[currentQuestionIndex]);
}

function setAnswerChoices(question) {
    let answerChoices = [];
    // Concat returns a copy of the new array
    answerChoices = answerChoices.concat(question.incorrect, question.correct);
    answerChoices.sort(() => Math.random() - 0.5);
    // check randomness
    question['answerChoices'] = answerChoices;
}

function showQuestion(question) {
    questionElement.innerText = question.question;

    question.answerChoices.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn');
        if (answer === question.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}

function resetState() {
    clearStatusClass(document.body); 
    // for color of page

    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(evt) {
    const selectedButton = evt.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if (questions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        alert("Game Over!");
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

// const questions = [
//     {
//         question: 'What is 2 + 2?',
//         answers: [
//             { 'text': '4', 'correct': true },
//             { 'text': '22', 'correct': false }
//         ]
//     },
//     {
//         question: 'What is 2 * 6?',
//         answers: [
//             { 'text': '12', 'correct': true },
//             { 'text': '22', 'correct': false }
//         ]
//     }
// ]