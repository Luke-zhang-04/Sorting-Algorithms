def insertion_sort(array):
    for i in range(1, len(array)):
        comparator = array[i]
        for section in range(i-1, -2, -1):
            if comparator > array[section]:
                array[section+1] = comparator
                break
            else: array[section+1] = array[section]
        else: array[section+1] = comparator
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