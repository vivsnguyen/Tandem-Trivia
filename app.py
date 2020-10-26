# from flask import (Flask, render_template, redirect, request, flash, session)
# from flask_debugtoolbar import DebugToolbarExtension
import json
import random

file_name = 'Apprentice_TandemFor400_Data.json'

def get_data_from_json():
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

def play(trivia_data):
    num_questions = 10

    while num_questions > 0:
        q = random.sample(trivia_data, 1)[0] #still repeats questions

        
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
                print("You got it")
            else:
                print("Wrong")
        else:
            print("That's not a valid answer.")

        num_questions -= 1

        # if answer == 'q':
        #     playing = False


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