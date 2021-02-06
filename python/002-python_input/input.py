# input() will collect a string value from the user
name = input('What is your name?')
print('What is your favorite color?')
color = input()

# notice how we use the int() function to cast the user's
# string input as an integer...
age = input('How old are you?')
age = int(age)

# ... since age is an integer, we can do calculations with it
# notice how we immediately cast the result back to a string with str()
dogyears = age * 7
dogyears = str(dogyears)

print('Hello ' + name + '. I also like the color ' + color + '.')

# since we cast dogyears as a string, we can concatenate it with other strings
print('You would be ' + dogyears + ' in dog years!')