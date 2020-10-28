from flask import (Flask, render_template, redirect, request, flash, session, jsonify)
from flask_debugtoolbar import DebugToolbarExtension

import trivia

app = Flask(__name__)

app.secret_key = "ABC"

tandem_file = 'Apprentice_TandemFor400_Data.json'

@app.route("/", methods=["GET"])
def index():
    return render_template('index.html')

@app.route("/questions.json")
def get_set_of_questions():
    """Return JSON of 10 randomly selected questions."""
    data = trivia.get_data_from_json(tandem_file)
    questions = trivia.select_random_questions(data, 10)

    return jsonify(questions)


#??????
@app.route("/start-game", methods=["GET"])
def start_game():
    trivia.play()

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')