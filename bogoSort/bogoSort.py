#if shuffled_array = random_sequence(0, x <= 5), the algorithm should work fine. Otherwise, a recursion error is likely

from random import shuffle

def issorted(array):
    """Checks if an array is sorted
    Param array is an array of numbers
    Returns true if sorted, false if not
    """
    for i in range(len(array)-1):
        if array[i+1] < array[i]: return False

    return True


def bogoSort(array):
    """Main bogosort function"""
    shuffle(array)
    return array if issorted(array) else bogoSort(array) # Check if the array is sorted, otherwise recurse

if __name__ == "__main__":
    from shuffler import random_sequence

    print("BOGO SORT AKA STUPID SORT")

    shuffled_array = random_sequence(0, 5)

    print(shuffled_array, "\n")

    print(bogoSort(shuffled_array))