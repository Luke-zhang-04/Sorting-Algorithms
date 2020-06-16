from typing import List


def selectionSort(array: List[int]) -> None:
    """Main selectionsort algorithm\n
    Sorts array in-place; returns None
    """
    for i in range(len(array)):  # Iterate through entire array
        index = array.index(min(array[i:]))  # Get index of smallest item
        array[i], array[index] = array[index], array[i]  # Swap it to the correct spot


if __name__ == "__main__":
    try:
        from utils import randomSequence
    except ModuleNotFoundError:
        import os, sys  # import shuffler from parent directory

        dir_path = os.path.dirname(os.path.realpath(__file__))
        parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
        sys.path.insert(0, parent_dir_path)
        from utils import randomSequence

    print("SELECTION SORT")

    shuffled_array = randomSequence(0, 1000)

    print(shuffled_array, "\n")

    selectionSort(shuffled_array)

    print(shuffled_array)
