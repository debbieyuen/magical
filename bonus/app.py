from flask import Flask, request
from flask import jsonify
import json

app = Flask(__name__)

@app.route("/", methods=['POST'])
def hello_world():
    # dic = jsonify(request.json)
    # print(data)
    if request.json['drive'] == 'park':
        return "drive", 200
    else:
        return "reverse", 400
    # return data, 200