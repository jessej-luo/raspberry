from flask import Flask, render_template, request, response
from wtforms import Form, TextAreaField, validators
import entry as classifier

app = Flask(__name__)

@app.route('/api/results', methods=['POST'])
def results():
    if request.method == "POST":
        review = request.form['moviereview']
        y, proba = classifier.classify(review)
        data = {
            'prediction': y,
            'probability': proba
        }
        res = jsonify(data)
        res.status_code = 200
        return res
