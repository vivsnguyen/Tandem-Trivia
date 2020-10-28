from flask import (Flask, render_template, redirect, request, flash, session)
from flask_debugtoolbar import DebugToolbarExtension

import trivia

app = Flask(__name__)

app.secret_key = "ABC"

tandem_file = 'Apprentice_TandemFor400_Data.json'

@app.route("/", methods=["GET"])
def index():
    return render_template('index.html')

@app.route("/questions.json")
def get_questions():
    """Return JSON of questions."""

    return tandem_file

#??????
@app.route("/start-game", methods=["GET"])
def start_game():
    trivia.play()

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')