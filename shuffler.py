from random import shuffle

def random_sequence(minimum, maximum): #returns a shuffled array
    array = [i for i in range(minimum, maximum)]
    shuffle(array)
    return array