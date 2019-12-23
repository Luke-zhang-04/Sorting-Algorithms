#if shuffled_array = random_sequence(0, x <= 5), the algorithm should work fine. Otherwise, a recursion error is likely

from random import shuffle

def is_sorted(array):
    for i in range(len(array)-1):
        if array[i+1] < array[i]: return False

    return True

def bogo_sort(array):
    shuffle(array) #shuffles the array
    return array if is_sorted(array) == True else bogo_sort(array) #check if the array is sorted, otherwise recurse

if __name__ == "__main__":
    import os, sys #import shuffler from parent directory
    dir_path = os.path.dirname(os.path.realpath(__file__))
    parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
    sys.path.insert(0, parent_dir_path)
    from shuffler import random_sequence

    print("BOGO SORT AKA STUPID SORT")

    shuffled_array = random_sequence(0, 5)

    print(shuffled_array, "\n")

    print(bogo_sort(shuffled_array))