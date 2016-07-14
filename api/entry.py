import pickle
import os
import argparse
import numpy as np
from vectorizer import vect

parser = argparse.ArgumentParser()
parser.add_argument("document", type=string, help="document required")
parser.add_argument("-c", "--classify", action="count", help="classify the document", default=0)
args = parser.parse_args()

if args.classify:
    classify(document)

if args.train:
    train(document, input)

curr_dir = os.path.dirname(__file__)
clf = pickle.load(open(os.path.join(curr_dir, "pkl_objects/classifier.pkl"), 'rb'))

def classify(document):
    label = {0: 'negative', 1: 'positive'}
    X = vect.transform([document])
    y = clf.predict(X)[0]
    probability = np.max(clf.predict_proba(X))
    return label[y], probability

def train(document, y):
    X = vect.transform([document])
    clf.partial_fit(X, [y])