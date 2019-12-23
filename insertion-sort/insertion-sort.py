def insertion_sort(array):
    for i in range(1, len(array)): #iterate through entire array
        comparator = array[i] #make comparison with this value
        for section in range(i-1, -2, -1): #iterate through array from i backwards
            if comparator > array[section]: #insert comparator into the array, in its correct position
                array[section+1] = comparator
                break
            else: array[section+1] = array[section] #if comparator <= array[section], move array[section] forward to make space
        else: array[section+1] = comparator #if loop wasn't broken, insert comparator in the right spot

    return array

if __name__ == "__main__":
    import os, sys #import shuffler from parent directory
    dir_path = os.path.dirname(os.path.realpath(__file__))
    parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
    sys.path.insert(0, parent_dir_path)
    from shuffler import random_sequence

    print("INSERTION SORT")

    shuffled_array = random_sequence(0, 1000)

    print(shuffled_array, "\n")

    print(insertion_sort(shuffled_array))