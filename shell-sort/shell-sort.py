def shell_sort(array):
    gap = len(array)//2
    while gap >= 1:
        for i in range(gap, len(array)): #iterate through array, starting from gap
            comparator = array[i] #make comparisons with this

            for x in range(i, gap-2, -gap): #iterate through array with gap as the step
                if array[x-gap] <= comparator: break #break when correct spot is found
                else: array[x] = array[x-gap] #otherwise, move elements forward to make space
            array[x] = comparator #insert comparator in the correct spot

        gap //= 2 #increment the gap

    return array


if __name__ == "__main__":
    import os, sys #import shuffler from parent directory
    dir_path = os.path.dirname(os.path.realpath(__file__))
    parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
    sys.path.insert(0, parent_dir_path)
    from shuffler import random_sequence

    print("SHELL SORT")

    shuffled_array = random_sequence(0, 1000)

    print(shuffled_array, "\n")

    print(shell_sort(shuffled_array))
