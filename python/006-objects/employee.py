# define a class (blueprint)
class Employee:
    # constructor! always pass self as first argument
    def __init__(self, f_name, l_name, pay, title, hire_day):
         self.first_name = f_name
         self.last_name = l_name
         self.salary = pay
         self.position = title
         self.start_date = hire_day

    def tiny_pay_raise(self):
        self.salary = self.salary + 0.01

    def custom_pay_raise(self, amount):
        self.salary = self.salary + amount

# instantiate an Employee object
employee_one = Employee('James', 'Allen', 10000000, 'Jr. Hack', '2020-02-02')

# call custom methods on employees
employee_one.tiny_pay_raise()
employee_one.custom_pay_raise(100000)

# output employee pay
print(employee_one.first_name + " " + employee_one.last_name + "is now paid: " + str(employee_one.salary))
