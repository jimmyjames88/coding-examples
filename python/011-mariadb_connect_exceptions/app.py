import mariadb
import dbcreds
import sys

def connect():
    return mariadb.connect(
        host = dbcreds.host,
        port = dbcreds.port,
        username = dbcreds.username,
        password = dbcreds.password,
        database = dbcreds.database
    )

def select_employees():
    conn = None
    cursor = None
    rows = []

    try:
        conn = connect()                                #1 - create connection
        cursor = conn.cursor()                          #2 - create cursor 

        cursor.execute("SELECT * FROM fitness_member")  #3 - execute statement
        # cursor.commit()                               #4 - commit changes (not needed for SELECT)
         
        rows = cursor.fetchall()                        #5 - collect results

    except mariadb.DataError as ex:
        print("Invalid data parameters", ex)
        end(conn, cursor)
    except mariadb.DatabaseError as ex:
        print("There was an error with the Database", ex)
        end(conn, cursor)
    except mariadb.InterfaceError as ex:
        print("There was an error with the Database Interface: ", ex)
        end(conn, cursor)
    except mariadb.Warning as ex:
        print("MariaDB warning: ", ex)
        end(conn, cursor)
    except mariadb.PoolError as ex:
        print("Connection pool error", ex)
        end(conn, cursor)
    except mariadb.OperationalError as ex:
        print("Error with database operation", ex)
        end(conn, cursor)
    except mariadb.IntegrityError as ex:
        print("Relational integrity error (foreign key check)", ex)
        end(conn, cursor)
    except mariadb.InternalError as ex:
        print("Internal DB error (possible invalid cursor)", ex)
        end(conn, cursor)
    except mariadb.ProgrammingError as ex:
        print("Programming error encountered", ex)
        end(conn, cursor)
    except mariadb.NotSupportedError as ex:
        print("Database API is not supported by this database", ex)
        end(conn, cursor)
    except:
        print("Unanticipated exception")
        end(conn, cursor)

    finally:
        if cursor != None:
            cursor.close()          #6 - close cursor
        if conn != None:
            conn.rollback()
            conn.close()            #7 - close connection
    
    return rows

def end(conn, cursor):
    if cursor != None:
        cursor.close()          #6 - close cursor
    if conn != None:
        conn.rollback()
        conn.close()            #7 - close connection
    sys.exit()


# iterate through results and print each row
result = select_employees()

if len(result) > 0:
    for row in result:
        print("#####", row)      

# no results
else:
    print("No results found!")