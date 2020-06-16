from typing import List


def cocktailShakerSort(array: List[int]) -> None:
    """Main cocktail shaker sort algorithm\n
    Sorts array in place; returns None.
    """

    for amt in range(
        len(array) // 2 + len(array) % 2
    ):  # Iterate for half the length of the array plus one if odd
        swaps = 0
        section = (
            len(array[amt:-amt]) if amt > 0 else len(array)
        )  # Keep narrowing down the search

        for i in range(section - 1):  # Iterate through the array
            if array[amt + i] > array[amt + i + 1]:  # Swap if needed
                array[amt + i], array[amt + i + 1] = array[amt + i + 1], array[amt + i]
                swaps += 1

        if swaps == 0:
            break  # Array is in order, this break statement could save time

        for i in range(section - 1, 0, -1):
            if array[amt + i] < array[amt + i - 1]:  # Swap if needed
                array[amt + i], array[amt + i - 1] = array[amt + i - 1], array[amt + i]
                swaps += 1

        if swaps == 0:
            break  # Array is in order


if __name__ == "__main__":
    import os, sys  # Import shuffler from parent directory

    try:
        from utils import randomSequence
    except ModuleNotFoundError:
        dir_path = os.path.dirname(os.path.realpath(__file__))
        parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
        sys.path.insert(0, parent_dir_path)
        from utils import randomSequence

    print("COCKTAIL SHAKER SORT")

    shuffledArray = randomSequence(0, 1000)

    print(shuffledArray, "\n")

    cocktailShakerSort(shuffledArray)

    print(shuffledArray)
