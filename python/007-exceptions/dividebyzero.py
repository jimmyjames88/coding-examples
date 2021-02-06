#if
try:
    print(10/1)

except ZeroDivisionError:
    print('You cannot divide by zero')

#elseif
except BufferError:
    print("Some other exception")

#else / catch-all
except:
    print('ELSE!')

finally:
    print('Once complete!')

