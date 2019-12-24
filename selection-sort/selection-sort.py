def selection_sort(array):
    for i in range(len(array)): #iterate through entire array
        index = array.index(min(array[i:len(array)])) #get index of smallest item
        array[i], array[index] = array[index], array[i] #swap it to the correct spot
    return array

if __name__ == "__main__":
    import os, sys #import shuffler from parent directory
    dir_path = os.path.dirname(os.path.realpath(__file__))
    parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
    sys.path.insert(0, parent_dir_path)
    from shuffler import random_sequence

    print("BUBBLE SORT")

    shuffled_array = random_sequence(0, 1000)

    print(shuffled_array, "\n")

    print(selection_sort(shuffled_array))