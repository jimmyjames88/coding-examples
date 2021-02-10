from person import Person

# basic Employee class - inherits all attributes of a Person - in addition to it's own
# unique properties and methods
class Employee(Person):
    # notice in our constructor, we accept all the attributes of a Person, as well as a few extras...
    def __init__(self, name, age, savings, start_date, wage):
        # ... this lets us call the parent class constructor super().__init__ and pass in all the
        # arguments that are expected for the Person class from which an Employee inherits
        super().__init__(name, age, savings)

        self.start_date = start_date
        self.wage = wage
        self.hours_worked = 0

    # accumulate some hours_worked in order to be paid
    def work(self, hours):
        self.hours_worked = self.hours_worked + hours
        print(self.name + " worked for " + str(hours) + " hours")

    # get that money!
    def collect_paycheck(self):
        total = self.hours_worked * self.wage
        self.savings = self.savings + total
        self.hours_worked = 0
        print(self.name + " earned $" + str(total))
        self.balance()