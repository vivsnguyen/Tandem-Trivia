# Trivia Trainer app
* Tandem Software Engineer Apprenticeship Code Challenge
* One week sprint to build and deploy

## Contents
* [Tech Stack](#tech-stack)
* [Challenge Criteria](#challenge-criteria)
* [Features](#features)
* [Future Features](#future)
* [Testing](#testing)
* [Installation](#installation)
* [Future Features](#future-features)
* [Resources](#resources)

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

#### Randomized answer choices
Answers are shown in a random order using random.shuffle.

#### New Random Questions on Game Restart

#### Answer highlighting by color


## <a name="testing"></a>Testing

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

## <a name="future-features"></a>Future Features

* #### Improved accessibility
I tried to include certain features such as high contrast buttons, but would love to add alt-text to be read when an answer is chosen. 

* #### User Features
I want users to be able to save questions, view scores, and add their own questions to the trivia question bank. This is why I decided to send the question data to the front-end through the server. Later on, I would want to store the questions in a database.


## <a name="resources"></a>Resources
### Back End
* Deciding how to store data
    * [Making a quiz, how do I store the questions?](https://stackoverflow.com/questions/35588826/making-a-quiz-how-do-i-store-the-questions)

### Front End
* [Build A Quiz App With JavaScript](https://youtu.be/riDzcEQbX6k)