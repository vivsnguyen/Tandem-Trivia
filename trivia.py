import json
import random

tandem_file = 'Apprentice_TandemFor400_Data.json'

def get_data_from_json(file_name):
    with open(file_name) as file:
        trivia_data = json.load(file)
    return trivia_data
    
def add_trivia_question():
    pass

def load_questions():
    """
    Add a batch of trivia questions and answers to bank.
    """
    pass

def select_random_questions(data, num_questions):
    """
    Select random questions from given data.

    Input
    data : list of dicts
    num_questions : int number of questions to be selected
    """
    return random.sample(data, num_questions)

def play(trivia_data):
    questions = select_random_questions(trivia_data, 10)
    score = 0

    for q in questions: 
        answer_choices = []
        answer_choices.extend(q.get('incorrect')) #gets a list of strings
        answer_choices.append(q.get('correct')) #gets a string
        random.shuffle(answer_choices)

        print(q.get('question'))
        for i, choice in enumerate(answer_choices):
            print(str(i) + ". " + choice)

        answer_index = int(input())

        if answer_index <= len(answer_choices)-1: 
            if answer_choices[answer_index] == q.get('correct'):
                print("You got it! The answer is " + q.get('correct') + "\n")
                score += 1
            else:
                print("Wrong, the answer is " + q.get('correct') + "\n")
        else:
            print("That's not a valid answer.")

    print("Your score is: " + str(score))

def start_game():
    data = get_data_from_json(tandem_file)
    play(data)


# Tests
# In a website address bar, what does WWW stand for?
# 0. Wild Wild West
# 1. World Wide Web
# 2. War World Web
# 3
# Traceback (most recent call last):
# File "<stdin>", line 1, in <module>
# File "app.py", line 40, in play
#     if answer_choices[answer_index] == q.get('correct'):
# IndexError: list index out of range