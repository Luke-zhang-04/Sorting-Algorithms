# if shuffled_array = randomSequence(0, x <= 5), the algorithm should work fine. Otherwise, a recursion error is likely

from random import shuffle
from typing import List


def issorted(array: List[int]) -> bool:
    """Checks if an array is sorted\n
    Param array is an array of numbers\n
    Returns true if sorted, false if not
    """
    for i in range(len(array) - 1):
        if array[i + 1] < array[i]:
            return False

    return True


def bogoSort(array: List[int]) -> None:
    """Main bogosort function\n
    Sorts array in place, returns void
    """
    shuffle(array)
    return (
        array if issorted(array) else bogoSort(array)
    )  # Check if the array is sorted, otherwise recurse


if __name__ == "__main__":
    try:
        from utils import randomSequence
    except ModuleNotFoundError:
        import os, sys  # import shuffler from parent directory

        dir_path = os.path.dirname(os.path.realpath(__file__))
        parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
        sys.path.insert(0, parent_dir_path)
        from utils import randomSequence

    print("BOGO SORT AKA STUPID SORT")

    shuffled_array = randomSequence(0, 5)

    print(shuffled_array, "\n")

    print(bogoSort(shuffled_array))
