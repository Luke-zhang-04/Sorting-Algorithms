from random import shuffle

def random_sequence(minimum, maximum):
    array = [i for i in range(minimum, maximum)]
    shuffle(array)
    return array