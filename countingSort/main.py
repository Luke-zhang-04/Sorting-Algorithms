def countingSort(array):
    """Main countingsort algorith"""
    count = [0 for _ in range(max(array) + 1)]  # create array with zeros

    for i in range(
        len(array)
    ):  # Iterate through given array, and add 1 to the index which is the value of array[i]
        count[array[i]] += 1

    for i in range(
        1, len(count)
    ):  # Go through array and add previous index's value to the current index
        count[i] += count[i - 1]

    output = [None for _ in range(len(array))]  # Create output array with none types
    for i in array:  # Iterate through array and turn none types into sorted values
        output[count[i] - 1] = i
        count[i] -= 1

    return output


if __name__ == "__main__":
    try:
        from utils import randomSequence
    except ModuleNotFoundError:
        import os, sys  # Import shuffler from parent directory

        dir_path = os.path.dirname(os.path.realpath(__file__))
        parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
        sys.path.insert(0, parent_dir_path)
        from utils import randomSequence

    print("COUNTING SORT")

    shuffledArray = randomSequence(0, 1000)

    print(shuffledArray, "\n")

    sortedArray = countingSort(shuffledArray)

    print(sortedArray)
