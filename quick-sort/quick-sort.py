def partition(array, pt):
    while True:
        swaps = 0 
        for i in range(pt):
            if array[pt] < array[i]:
                array[pt], array[i] = array[i], array[pt]
                pt = i
                swaps += 1
                break

        for i in range(len(array)-1, pt, -1):   
            if array[pt] >   array[i]:  
                array[pt], array[i] = array[i], array[pt]
                pt = i
                swaps += 1
                break 
        
        if swaps == 0: break

    return array, pt

def quick_sort(array):
    if len(array) > 1:
        half = len(array) // 2
        start, middle, end = array[0], array[half], array[-1]

        if (start > end and start < middle) or (start < end and start > middle): pivot_pt = 0
        elif (end > start and end < middle) or (end < start and end > middle): pivot_pt = len(array)-1
        else: pivot_pt = half

        array, pt = partition(array, pivot_pt)
        
        right = quick_sort(array[pt:])
        left = quick_sort(array[:pt])

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