from flask import Flask, request, Response
import mariadb
import dbcreds
import json
import uuid
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def connect():
    return mariadb.connect(
        host=dbcreds.host,
        port=dbcreds.port,
        username=dbcreds.username,
        password=dbcreds.password,
        database=dbcreds.database
    )

conn = None
cursor = None

def resolveLoginToken(loginToken):
    conn = connect()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT userId from userSessions WHERE loginToken=?", [loginToken])
    userId = cursor.fetchone().get('userId')
    if cursor != None:
        cursor.close()
    if conn != None:
        conn.close()
    return userId

@app.route('/api/login', methods=['POST', 'DELETE'])
def login():
    if request.method == 'POST':
        conn = connect()
        cursor = conn.cursor(dictionary=True)
        success = False
        email = request.json.get('email')
        password = request.json.get('password')
        cursor.execute('SELECT id FROM users WHERE email=? AND password=? LIMIT 1', [email, password])
        userId = cursor.fetchone().get('id')
        if userId:
            loginToken = str(uuid.uuid4())
            cursor.execute('INSERT INTO userSessions (userId, loginToken) VALUES (?, ?)', [userId, loginToken])
            conn.commit()
            print('ROWCOUNT', cursor.rowcount)
            if cursor.rowcount > 0:
                success = True
                result = { "userId": userId, "loginToken": loginToken }


        if cursor != None:
            cursor.close()
        if conn != None:
            conn.close()

        if success:
            return Response(
                json.dumps(result, default=str),
                mimetype="application/json",
                status=201
            )
        return Response(
            status=400
        )


@app.route('/api/follows', methods=['GET', 'POST', 'DELETE'])
def follows():
    if request.method == 'GET':
        conn = connect()
        cursor = conn.cursor(dictionary=True)
        userId = request.args.get('userId')
        cursor.execute('SELECT userId, email, username, bio, birthdate FROM follows JOIN users ON users.id = follows.followsId WHERE users.id=?', [userId])
        result = cursor.fetchall()
        if cursor != None:
            cursor.close()
        if conn != None:
            conn.close()
        return Response(
            json.dumps(result, default=str),
            mimetype="application/json",
            status=200
        )
    
    elif request.method == 'POST':
        conn = connect()
        cursor = conn.cursor(dictionary=True)
        userId = resolveLoginToken(request.json.get('loginToken'))
        followsId = request.json.get('followId')
        print('#####', userId, followsId)
        cursor.execute('INSERT INTO follows (userId, followsId) VALUES (?, ?)', [userId, followsId])
        conn.commit()
        if cursor != None:
            cursor.close()
        if conn != None:
            conn.close()
        return Response(
            status=204
        )

    elif request.method == 'DELETE':
        conn = connect()
        cursor = conn.cursor(dictionary=True)
        userId = resolveLoginToken(request.json.get('loginToken'))
        followsId = request.json.get('followId')
        cursor.execute('DELETE FROM follows WHERE userId=? AND followsId=?', [userId, followsId])
        conn.commit()
        if cursor != None:
            cursor.close()
        if conn != None:
            conn.close()
        return Response(
            status=204
        )

@app.route('/api/users', methods=['GET'])
def users():
    conn = connect()
    cursor = conn.cursor(dictionary=True)
    userId = request.args.get('userId')
    cursor.execute('SELECT id as userId, email, username, bio, birthdate FROM users WHERE id=? LIMIT 1', [userId])
    result = cursor.fetchall()
    if cursor != None:
        cursor.close()
    if conn != None:
        conn.close()
    return Response(
        json.dumps(result, default=str),
        mimetype="application/json",
        status=200
    )

@app.route('/api/tweets', methods=['GET', 'POST'])
def tweets():
    if request.method == 'GET':
        conn = connect()
        cursor = conn.cursor(dictionary=True)
        cursor.execute('SELECT tweets.id as tweetId, tweets.userId, users.username, tweets.content, tweets.createdAt FROM tweets JOIN users ON tweets.userId = users.id')
        result = cursor.fetchall()

        if cursor != None:
            cursor.close()
        if conn != None:
            conn.close()

        return Response(
            json.dumps(result, default=str),
            mimetype="application/json",
            status=200
        )
    
    elif request.method == 'POST':
        tweet = request.get_json()
        userId = resolveLoginToken(tweet['loginToken'])

        conn = connect()
        cursor = conn.cursor(dictionary=True)
        cursor.execute('INSERT INTO tweets (content, userId) VALUES (?, ?)', [tweet['content'], userId])
        conn.commit()

        cursor.execute('SELECT tweets.id as tweetId, content, tweets.createdAt, userId, username  FROM tweets JOIN users ON tweets.userId = users.id WHERE tweets.id=?', [cursor.lastrowid])
        result = cursor.fetchone()
        print(result)

        if cursor != None:
            cursor.close()
        if conn != None:
            conn.close()

        return Response(
            json.dumps(result, default=str),
            mimetype="application/json",
            status=201
        )