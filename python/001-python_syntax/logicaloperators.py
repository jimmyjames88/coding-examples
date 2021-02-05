import operator

if (True or True):
    print('1 - true')

if ((1 == 1) and (2 < 1)):
    print('2 - true')

a = True
b = False
if ((a or b) and (a != b)):
    print('3 - true')

if (operator.xor(a,b)):
    print('4 - wowza')