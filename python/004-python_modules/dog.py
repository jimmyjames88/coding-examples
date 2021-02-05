import random

def bark():
    n = random.randint(0, 1)
    
    if (n == 1):
        print('WOOF!')
    else:
        print('BOWOW')