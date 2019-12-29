from random import shuffle

def random_sequence(*args): #returns a shuffled array
    if len(args) == 2: array = [i for i in range(args[0], args[1])]
    elif len(args) == 3: array = [i for i in range(args[0], args[1], args[2])]
    shuffle(array)
    return array