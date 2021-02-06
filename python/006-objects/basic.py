# define your class or "blueprint"
class Student:
    # __init__ is our constructor method, self must be the first argument
    def __init__(self, name, age, grade):
        self.name = name
        self.age = age
        self.grade = grade

    # custom methods must also include self as the first argument
    def complete_assignment(self):
        self.grade = self.grade + 5
        print(self.name + "'s grade is: " + str(self.grade))

# instantiate Student object by assigning to a variable
student1 = Student('John', 25, 85)
student2 = Student('Dave', 30, 70)

# call some methods on the objects
student1.complete_assignment()
student2.complete_assignment()
