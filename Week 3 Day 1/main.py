### print('Hello World')
Adjectives = ['Good', 'Great', 'Amazing', 'Stellar', 'Wonderful']

def moodcheck(x):
    if x in Adjectives:
        print("That's amazing")
    else:
        print("Damn that's rough, I hope your day gets better")

name = input("Yo what's your name? ")
print(f"Wsg {name}, I am jarvis.")
mood = input("How's your day been? ").capitalize()
moodcheck(mood)


