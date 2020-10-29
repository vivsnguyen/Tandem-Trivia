const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');

const answerResultElement = document.getElementById('answer-result');

const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

const resultForm = document.getElementById('form-result');

let correctAnswersCount = 0;
let currentQuestionIndex;
let currentQuestion = 1;

let questions = getQuestions();

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    answerButtonsElement.classList.remove('no-click'); 
    currentQuestionIndex++;
    setNextQuestion();

    currentQuestion++; 
    document.getElementById('current-question').innerHTML = currentQuestion;
});

function getQuestions() {
    $.get('/questions.json', (res) => {
        questions = res;
      });
}

function startGame() {
    console.log('Started');

    startButton.classList.add('hide');
    resultForm.classList.add('hide');

    getQuestions();

    currentQuestionIndex = 0;

    currentQuestion = 1;
    document.getElementById('current-question').innerHTML = currentQuestion;
    
    correctAnswersCount = 0;

    questionContainerElement.classList.remove('hide');
    answerButtonsElement.classList.remove('no-click'); 

    document.getElementById('all-questions2').innerHTML = questions.length;
    document.getElementById('all-questions').innerHTML = questions.length;

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
    answerResultElement.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(evt) {
    const selectedButton = evt.target;
    const correct = selectedButton.dataset.correct;

    setStatusClass(document.body, correct);
    
    Array.from(answerButtonsElement.children).forEach(button => {
        if (!(selectedButton.dataset = correct)) {
            selectedButton.classList.add('chosen');
        }
        setStatusClass(button, button.dataset.correct);
    })
    if (questions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        // end result page
        resultForm.classList.remove('hide');
        questionContainerElement.classList.add('hide');

        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }

    // why just one equals works ???
    if (selectedButton.dataset = correct) {
        correctAnswersCount++; 
    }

    // show score at the end
    document.getElementById('right-answers').innerHTML = correctAnswersCount; 
    document.getElementById('answers-percent').innerHTML = ((100 * correctAnswersCount)/questions.length).toFixed(0);
    
    //prevent multiclicking 
    document.getElementById('answer-buttons').classList.add('no-click');
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
    
    element.classList.remove('chosen');
}