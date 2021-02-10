class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self, amount):
        for x in range(amount):
            print('BARK!')


dog1 = Dog('Rover', 10)
dog2 = Dog('Buddy', 5)

dog1.bark(3)
dog2.bark(5)