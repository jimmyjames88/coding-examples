from flask import Flask, request, Response
import json
import mariadb

app = Flask(__name__)

@app.route('/')
def homepage():
    return "Hello world"
    
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        login_dictionary = {"loginToken": "abc123"}
        return Response(
            json.dumps(login_dictionary, default=str),
            mimetype="application/json",
            status=200
        )
    elif request.method == 'GET':
        return Response(
            "You got my login",
            mimetype="text/html",
            status=200
        )