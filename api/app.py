import os
from flask import Flask, render_template, request, jsonify
from wtforms import Form, TextAreaField, validators
from flask_cors import CORS, cross_origin
import entry as classifier


app = Flask(__name__)
db = os.path.join(os.path.dirname(__file__), 'reviews.sqlite')

CORS(app)

@app.route('/api/results', methods=['POST'])
def results():
    if request.method == "POST":
        review = request.get_json()['review']
        y, proba = classifier.classify(review)
        data = {
            'prediction': y,
            'probability': proba
        }
        res = jsonify(data)
        res.status_code = 200
        return res

@app.route('/api/feedback', methods=['POST'])
def feedback():
    if request.method == "POST":
        data = request.get_json()
        print(data)
        review = data['review']
        feedback = data['feedback']
        prediction = data['prediction']
        inv_label = {'negative': 0, 'positive': 1}
        y = inv_label[prediction]
        if feedback == "Incorrect":
            y = int(not y)
        classifier.train(review, y)
        classifier.sqlite_entry(db, review, y)
        return ('', 204)

if __name__ == '__main__':
    app.run(debug=True)
