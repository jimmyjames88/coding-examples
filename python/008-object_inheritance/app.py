from person import Person
from employee import Employee
from manager import Manager

# general helper function, not in a class, for adding line breaks
def hr():
    print()
    print('----------------------------')
    print()

# procedural set of instructions (run top to bottom)
hr()
james = Person('James', 32, 1000)
james.spend(100, 'food')
hr()
cathy = Employee('Cathy', 40, 5000, '2021-02-09', 20)
cathy.work(40)
cathy.collect_paycheck()
hr()
roy = Manager('Roy', 45, 10000, '2005-02-01', 30)
roy.work(40)
roy.collect_paycheck()
hr()