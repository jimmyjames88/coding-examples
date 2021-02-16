class ValueTooSmall(Exception):
    def __init__(self):
        # access the parent class constructor
        super().__init__("The value you entered is too small")

n = int(input("Please enter a number greater than 5"))
if n < 5:
    raise ValueTooSmall()