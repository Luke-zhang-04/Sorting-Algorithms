def insertion_sort(array, start, stop):
    for i in range(1+start, stop): #iterate through entire array
        comparator = array[i] #make comparison with this value
        for section in range(i-1, -2, -1): #iterate through array from i backwards
            if comparator > array[section]: #insert comparator into the array, in its correct position
                array[section+1] = comparator
                break
            else: array[section+1] = array[section] #if comparator <= array[section], move array[section] forward to make space
        else: array[section+1] = comparator #if loop wasn't broken, insert comparator in the right spot

def merge(inputArray, left, middle, right):#)array1, array2): #merge two arrays
    array1, array2 = inputArray[left:middle], inputArray[middle:right]
    array = [] #merged array
    first = second = 0 #starting points

    while first < len(array1) and second < len(array2):
        if array1[first] > array2[second]:
            array.append(array2[second])
            second += 1
        elif array1[first] < array2[second]:
            array.append(array1[first])
            first += 1
        else:
            array.append(array1[first])
            first += 1
            array.append(array2[second])
            second += 1
    
    while first < len(array1):
        array.append(array1[first])
        first += 1

    while second < len(array2):
        array.append(array2[second])
        second += 1

    for i in range(left, right):
        inputArray[i] = array[i-left]

def tim_sort(array, run = 100):
    for i in range(0, len(array), run):
        insertion_sort(array, i, min(i+run, len(array)))

    return array


if __name__ == "__main__":
    import os, sys #import shuffler from parent directory
    dir_path = os.path.dirname(os.path.realpath(__file__))
    parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
    sys.path.insert(0, parent_dir_path)
    from shuffler import random_sequence

    print("TIM SORT")

    shuffled_array = random_sequence(0, 100)

    print(shuffled_array, "\n")

    print(tim_sort(shuffled_array))