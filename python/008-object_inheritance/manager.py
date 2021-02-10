from employee import Employee

# Manager class inherits all attributes of an Employee, and thus a Person
class Manager(Employee):
    def __init__(self, name, age, savings, start_date, wage):
        # again, calling the parent constructors and passing in all attributes needed for an Employee and Person
        super().__init__(name, age, savings, start_date, wage)
        self.rrsp = 0

    def rrsp_match(self):
        amount = int(input("How much would you like to contribute to your RRSP?"))
        self.savings = self.savings - amount
        self.rrsp = self.rrsp + (2 * amount)
        print("Contributed $" + str(amount) + " to RRSP, and company matched it!!!")
        print("New RRSP balance: $" + str(self.rrsp))
        self.balance()

    # you can override parent class methods by redefining them in the child class
    def collect_paycheck(self):
        # however in this case, look how we use super() to call the collect_paycheck method from our parent class,
        # Employee.  This will run all of the code from the parent class' collect_paycheck(), and then we've added some
        # extra code of our own below --- essentially we've "customized" a Manager's collect_paycheck() method
        super().collect_paycheck()
        self.rrsp_match()