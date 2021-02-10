class Person:
    # constructor
    def __init__(self, alias, howold):
        self.name = alias
        self.age = howold

    def greet(self):
        print(self.name + " says 'Hello there!'")

# instantiate james and john as Person objects
james = Person('James', 32)
john = Person('John', 25)

james.greet()   # call greet method defined on Person class
print(james.name, james.age)    # access properties defined on Person class
print(john.name, john.age)