from typing import List


def nextGap(gap: int) -> int:
    """Finds the next gap to increment the sort by"""
    newGap = (gap * 10) // 13

    return 1 if newGap < 1 else newGap


def combSort(array: List[int]) -> None:
    """Main combsort function\n
    Sorts array in place; returns None
    """
    gap, swapped = len(array), True

    while gap > 1 or (gap > 1 and not swapped):
        gap = nextGap(gap)
        swapped = False

        for i in range(len(array) - gap):  # Iterate through the whole array
            if array[i] > array[i + gap]:  # Swap if needed
                array[i], array[i + gap] = array[i + gap], array[i]
                swapped = True


if __name__ == "__main__":
    try:
        from utils import randomSequence
    except ModuleNotFoundError:
        import os, sys  # Import shuffler from parent directory

        dir_path = os.path.dirname(os.path.realpath(__file__))
        parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
        sys.path.insert(0, parent_dir_path)
        from utils import randomSequence

    print("COMB SORT")

    shuffledArray = randomSequence(0, 1000)

    print(shuffledArray, "\n")

    combSort(shuffledArray)

    print(shuffledArray)
