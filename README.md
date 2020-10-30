# <img src="https://github.com/vivsnguyen/Tandem-Trivia/blob/main/static/images/logo.png" width="40%" alt="Trivia Trainer logo">
# Trivia Trainer app
* Tandem Software Engineer Apprenticeship Code Challenge
* One week sprint to build.
* The pdf file of full requirements can be found in the main project directory. 

## Contents
* [Tech Stack](#tech-stack)
* [Challenge Criteria](#challenge-criteria)
* [Features](#features)
* [Installation](#installation)
* [Testing](#testing)
* [Future Features](#future-features)
* [Resources](#resources)
* [Thanks](#thanks)

## <a name="tech-stack"></a>Technologies
* Python
* Flask
* Javascript
* jQuery, AJAX
* Bootstrap


## <a name="challenge-criteria"></a>Challenge Criteria
* A user can view questions.
* Questions with their multiple choice options must be displayed one at a time. Questions should not repeat in a round.
* A user can select only 1 answer out of the 4 possible answers.
* The correct answer must be revealed after a user has submitted their answer 
* A user can see the score they received at the end of the round

## <a name="features"></a>Features
![alt text](https://github.com/vivsnguyen/Tandem-Trivia/blob/main/static/images/home.gif "Trivia Trainer main homepage")

#### Randomized answer choices
Incorrect and correct answers are combined into one array and then randomized.
Code for this can be found in /static/script.js.

#### Current question number
The current question number is always visible, so users can keep track of the currect question number they are on.

#### Answer highlighting by color
Users click to select an answer. After selecting, the button with the correct answer will turn green. If an incorrect answer is selected, the selected button will turn grey. Other incorrect answer buttons will turn red.

![alt text](https://github.com/vivsnguyen/Tandem-Trivia/blob/main/static/images/incorrect-answer.gif "Selecting an incorrect answer")
Selecting an incorrect answer

![alt text](https://github.com/vivsnguyen/Tandem-Trivia/blob/main/static/images/correct-answer.gif "Selecting a correct answer")
Selecting a correct answer

#### Final score display
After 10 questions are completed, users can view their score percentage and restart the quiz.

#### New random questions when game restarts
New questions are chosen randomly using random.sample. This function specifically samples without replacement, so no questions are repeated in a round.
Code for this can be found in trivia.py.

![alt text](https://github.com/vivsnguyen/Tandem-Trivia/blob/main/static/images/final-score-restart.gif "Final Score and restart screen")

## <a name="installation"></a>Installation
To run Trivia Trainer on your own machine:

Clone or fork this repo:
```
https://github.com/vivsnguyen/Tandem-Trivia.git
```

Create and activate a virtual environment inside your Trivia Trainer directory:
```
virtualenv env
source env/bin/activate
```

Install the dependencies:
```
pip install -r requirements.txt
```

Run the app:

```
python3.6 app.py
```

You can now navigate to 'localhost:5000/' to access Trivia Trainer.

## <a name="testing"></a>Testing

#### Doctests
I used Doctests to test trivia.py.

To run Doctests, navigate to the Trivia Trainer directory and in your terminal run:
```
python3 -m doctest -v tests.txt
```

## <a name="future-features"></a>Future Features

* #### Improved accessibility
I tried to include certain features such as high contrast buttons, but would love to add alt-text to be read when an answer is chosen. 

* #### User Features
I want users to be able to save questions, view scores, and add their own questions to the trivia question bank. This is why I decided to send the question data to the front-end through the server. Later on, I would want to store the questions in a database.

* #### More testing
I want to add more testing, such as integration tests for my flask server and testing for my front end features.

## <a name="resources"></a>Resources
### Back End
* Deciding how to store data
    * [Making a quiz, how do I store the questions?](https://stackoverflow.com/questions/35588826/making-a-quiz-how-do-i-store-the-questions)

### Front End
* [Build A Quiz App With JavaScript](https://youtu.be/riDzcEQbX6k)
* MDN Web Docs

### Screenrecording
* Kap

## <a name="thanks"></a>Thanks

Hi Tandem! Thanks for this opportunity and for taking the time to view my project. 