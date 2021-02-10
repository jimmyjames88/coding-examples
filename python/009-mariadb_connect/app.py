import dbcreds
import mariadb
import sys

# I decided to define a function for connection to the db for ease of use
def connect():
    return mariadb.connect(
        user=dbcreds.user, 
        password=dbcreds.password, 
        host=dbcreds.host, 
        port=dbcreds.port, 
        database=dbcreds.database


# this method prints a list of members from the fitness_member table
def view_members():
    try:
        conn = connect()                                    # 1. connect to db
        cursor = conn.cursor()                              # 2. create a cursor
        cursor.execute("SELECT * FROM fitness_member")      # 3. execute a SQL query
        #conn.commit()                                      # 4. commit the change (not required for a SELECT statement)
        result = cursor.fetchall()   
        row_count = cursor.rowcount                       
        hr()
        print("Returned " + str(row_count) + " results")
        hr()
        for row in result:
            print(row)

    except:
        hr()
        print("DB Error")
        hr()
        sys.exit    # stop the script
    
    finally:
        if (cursor != None):
            cursor.close()
        if (conn != None):
            conn.rollback()
            conn.close()

# this method prompts you for information, and then INSERTs a new member in to the fitness_member table
def add_member():
    first = input("First name: ")
    last = input("Last name: ")
    joined = input("Join date: ")
    type = input("Member type: ")

    conn = connect()                        # 1. connect to db
    cursor = conn.cursor()                  # 2. create a cursor
    cursor.execute(                         # 3. execute a SQL query
        "INSERT INTO fitness_member (first_name, last_name, join_date, member_type) VALUES (?, ?, ?, ?)",
        [first, last, joined, type]         # We've used a "prepared statement" here to prevent SQL injection attacks
    ) 
    conn.commit()                           # 4. commit the change (not required for a select statement)  
    
    # check the row count to make sure 1 row was added/affected
    # this is how we can be sure our INSERT statement worked
    if (cursor.rowcount == 1):
        hr()
        print("New member added successfully!!!")
    else:
        hr()
        print("There was an error")

    cursor.close()                          # 5. close the cursor
    conn.close()                            # 6. close the connection


# little helper function to add whitespace and a horizontal divider
def hr():
    print()
    print("------------------------------")
    print()


# set connection and cursor as global variables
conn = None
cursor = None

# endless loop to keep our program running in the command line until we exit (break)
while True:
    hr()
    print("1. View members")
    print("2. Add new member")
    print("3. Exit")
    hr()
    choice = int(input("Choice: "))
    if choice == 1:
        view_members()
    elif choice == 2:
        add_member()
    elif choice == 3:
        hr()
        print("Goodbye!")
        break