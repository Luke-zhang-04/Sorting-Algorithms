def partition(array, pt): #moves array elements to the correct sides of pivot (pt)
    while True:
        swaps = 0 #keep track of the swaps made
        for i in range(pt): #start from left side of the pivot (if pivot point isn't 0)
            if array[pt] < array[i]: #swap if element is larger than pivot
                array[pt], array[i] = array[i], array[pt]
                pt = i
                swaps += 1
                break

        for i in range(len(array)-1, pt, -1): #start from right side of the pivot
            if array[pt] > array[i]: #swap if element is smaller than pivot
                array[pt], array[i] = array[i], array[pt]
                pt = i
                swaps += 1
                break 
        
        if swaps == 0: break #pivot is in the correct spot

    return array, pt

def quick_sort(array):
    if len(array) > 1:
        half = len(array) // 2 #midpoint of the array
        start, middle, end = array[0], array[half], array[-1]

        #choose pivot point (median of the first, middle, and last element) to avoid exponential running time
        if (start > end and start < middle) or (start < end and start > middle): pivot_pt = 0
        elif (end > start and end < middle) or (end < start and end > middle): pivot_pt = len(array)-1
        else: pivot_pt = half

        #move pivot to right spot, move elements onto the correct side of the pivot, and get the new pivot point
        array, pt = partition(array, pivot_pt)
        
        #quicksort the remaining subarrays
        right = quick_sort(array[pt:])
        left = quick_sort(array[:pt])

        #concatenate left and right
        array = left + right

    return array


if __name__ == "__main__":
    import os, sys #import shuffler from parent directory
    dir_path = os.path.dirname(os.path.realpath(__file__))
    parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
    sys.path.insert(0, parent_dir_path)
    from shuffler import random_sequence

    print("QUICK SORT")

    shuffled_array = random_sequence(0, 1000)

    print(shuffled_array, "\n")

    print(quick_sort(shuffled_array))