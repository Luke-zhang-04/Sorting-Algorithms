def merge(array1, array2): #merge two arrays
    array = [] #merged array
    first = second = 0 #starting points

    while first < len(array1) and second < len(array2):
        if array1[first] > array2[second]:
            array.append(array2[second])
            second += 1
        elif array1[first] < array2[second]:
            array.append(array1[first])
            first += 1
    
    while first < len(array1):
        array.append(array1[first])
        first += 1

    while second < len(array2):
        array.append(array2[second])
        second += 1

    return array

def merge_sort(array):
    if len(array) > 1:
        #split array into to halves
        half = len(array) // 2 #halfway point
        left = array[:half]
        right = array[half:]

        #recursively call each merge sort for each half until array size is 1
        left = merge_sort(left)
        right = merge_sort(right)
        
        #merge left and right sides
        array = merge(left, right)

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

    print(merge_sort(shuffled_array))