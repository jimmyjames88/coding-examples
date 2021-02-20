from flask import Flask, request, Response
import mariadb
import dbcreds
import json
app = Flask(__name__)

@app.route('/members', methods=['GET'])
def members():
    conn = mariadb.connect(
        host = dbcreds.host,
        port = dbcreds.port,
        username = dbcreds.username,
        password = dbcreds.password,
        database = dbcreds.database
    )
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM fitness_member")
    result = cursor.fetchall()
    cursor.close()
    conn.close()
    print(result)
    return Response(
        json.dumps(result, default=str),
        mimetype="application/json",
        status=200
    )



@app.route('/user', methods=['GET', 'POST'])
def user():
    if request.method == 'GET':
        print('get request')
        return "Yolo!"
    elif request.method == 'POST':
        client_data = request.json
        print("####CLIENTDATA", client_data)
        print(client_data.get('username'))
        print(client_data.get('password'))
        return "Hello!"