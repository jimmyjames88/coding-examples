# basic person class
class Person:
    # __init__ is our constructor method, this runs when an object is instantiated using our class
    def __init__(self, name, age, savings):
        self.name = name
        self.age = age
        self.savings = savings

    # spend some savings
    def spend(self, amount, item):
        self.savings = self.savings - amount

        print(self.name + " spent " + str(amount) + " on " + item)
        self.balance()

    # a helpful function to print our savings balance
    def balance(self):
        print(self.name + "'s balance: $" + str(self.savings))