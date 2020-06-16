def insertionSort(array):
    """Main insertion sort algorithm
    Returns void; sorts in-place
    """
    for i in range(1, len(array)):  # Iterate through entire array
        comparator = array[i]  # Make comparison with this value
        for section in range(i - 1, -2, -1):  # Iterate through array from i backwards
            if (
                comparator > array[section]
            ):  # Insert comparator into the array, in its correct position
                array[section + 1] = comparator
                break
            else:
                array[section + 1] = array[
                    section
                ]  # If comparator <= array[section], move array[section] forward to make space
        else:
            array[
                section + 1
            ] = comparator  # If loop wasn't broken, insert comparator in the right spot


if __name__ == "__main__":
    try:
        from utils import randomSequence
    except ModuleNotFoundError:
        import os, sys  # Import shuffler from parent directory

        dir_path = os.path.dirname(os.path.realpath(__file__))
        parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
        sys.path.insert(0, parent_dir_path)
        from utils import randomSequence

    print("INSERTION SORT")

    shuffledArray = randomSequence(0, 1000)

    print(shuffledArray, "\n")

    insertionSort(shuffledArray)

    print(shuffledArray)
