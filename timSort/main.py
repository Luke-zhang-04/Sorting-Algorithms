from typing import List


def insertionSort(array: List[int], start: int, end: int) -> None:
    """Main insertion sort algorithm\n
    Sorts array in-place; returns None
    """
    for i in range(start + 1, end):  # Iterate through entire array
        comparator = array[i]  # Make comparison with this value
        section = i - 1

        while (
            section >= start and array[section] > comparator
        ):  # Iterate through array from i to 0 backwards
            array[section + 1] = array[
                section
            ]  # If comparator <= array[section], move array[section] forward to make space
            section -= 1

        array[
            section + 1
        ] = comparator  # Insert comparator into the array, in its correct position


def merge(array: List[int], start: int, mid: int, end: int) -> int:
    """Merges two arrays"""
    start2 = mid + 1

    if array[mid] <= array[start2]:
        return

    while start <= mid and start2 <= end:
        if array[start] <= array[start2]:
            start += 1
        else:
            value = array[start2]
            index = start2

            while index != start:
                array[index] = array[index - 1]
                index -= 1

            array[start] = value

            start += 1
            mid += 1
            start2 += 1


def timSort(array: List[int], run: int = 32) -> None:
    """Main timsort function\n
    Sorts array in-place; returns None
    """
    # Run insertionsort
    for i in range(0, len(array), run):
        insertionSort(array, i, min(i + run, len(array)))

    # Run merges
    size = run
    while size < len(array):
        for left in range(0, len(array), 2 * size):
            mid = left + size - 1
            right = min((left + 2 * size - 1), (len(array) - 1))
            merge(array, left, mid, right)

        size *= 2


if __name__ == "__main__":
    try:
        from utils import randomSequence
    except ModuleNotFoundError:
        import os, sys  # import shuffler from parent directory

        dir_path = os.path.dirname(os.path.realpath(__file__))
        parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
        sys.path.insert(0, parent_dir_path)
        from utils import randomSequence

    print("TIM SORT")

    shuffledArray = randomSequence(0, 1000)

    print(shuffledArray, "\n")

    timSort(shuffledArray)

    print(shuffledArray)
