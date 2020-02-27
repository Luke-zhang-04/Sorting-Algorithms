def nextGap(gap): 
    gap = (gap * 10)//13
    if gap < 1: 
        return 1
    return gap 

def comb_sort(array):
    gap = len(array)
    swapped = True
    while gap > 1 or not swapped:
        gap = nextGap(gap)
        swapped = False

        for i in range(len(array)-gap): #iterate through the whole array
            if array[i] > array[i + gap]: #swap if needed
                array[i], array[i + gap]=array[i + gap], array[i] 
                swapped = True
    return array

if __name__ == "__main__":
    import os, sys #import shuffler from parent directory
    dir_path = os.path.dirname(os.path.realpath(__file__))
    parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
    sys.path.insert(0, parent_dir_path)
    from shuffler import random_sequence

    print("COMB SORT")

    shuffled_array = random_sequence(0, 1000)

    print(shuffled_array, "\n")

    print(comb_sort(shuffled_array))
