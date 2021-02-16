class MyCustomException(Exception):
    def __init__(self):
        super().__init__("NO JAMES' ALLOWED")

def collectSomeInput():
    try:
        name = input("What's your name? ")
        if name == "James":
            raise MyCustomException()
    except MyCustomException:
        print("GET LOST!")
        collectSomeInput()
        return

    print("WELCOME!")

collectSomeInput()
