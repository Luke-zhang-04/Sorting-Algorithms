from typing import List


def bubbleSort(array: List[int]) -> None:
    """Main bubble sort algorithm
    Sorts array in-place, returns None
    """

    for amt in range(len(array)):
        swaps = 0

        for i in range(len(array) - 1 - amt):  # Iterate through the array
            if array[i] > array[i + 1]:  # Swap if needed
                array[i], array[i + 1] = array[i + 1], array[i]
                swaps += 1

        if swaps == 0:
            break  # Array is in order


if __name__ == "__main__":
    try:
        from utils import randomSequence
    except ModuleNotFoundError:
        import os, sys  # Import shuffler from parent directory

        dir_path = os.path.dirname(os.path.realpath(__file__))
        parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
        sys.path.insert(0, parent_dir_path)
        from utils import randomSequence

    print("BUBBLE SORT")

    shuffledArray = randomSequence(0, 1000)

    print(shuffledArray, "\n")

    bubbleSort(shuffledArray)

    print(shuffledArray)
