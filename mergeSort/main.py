def merge(array1, array2):
    """Merges two arrays"""
    array = [] # Merged array
    first = second = 0 # Starting points

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

    return array

def mergeSort(array):
    """Main merge sort algorithm

    Returns sorted array; does not sort in-place
    """
    if len(array) > 1:
        # Split array into to halves
        half = len(array) // 2 #halfway point
        left = array[:half]
        right = array[half:]

        #recursively call each merge sort for each half until array size is 1
        left = mergeSort(left)
        right = mergeSort(right)
        
        #merge left and right sides
        array = merge(left, right)
    
    return array

if __name__ == "__main__":
    try:
        from utils import randomSequence
    except ModuleNotFoundError:
        import os, sys # Import shuffler from parent directory
        dir_path = os.path.dirname(os.path.realpath(__file__))
        parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
        sys.path.insert(0, parent_dir_path)
        from utils import randomSequence

    print("MERGE SORT")

    shuffledArray = randomSequence(0, 1000)

    print(shuffledArray, "\n")

    sortedArray = mergeSort(shuffledArray)

    print(sortedArray)
