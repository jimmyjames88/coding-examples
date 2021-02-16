from flask import Flask
import mariadb

app = Flask(__name__)

@app.route('/')
def homepage():
    return "Hello world"