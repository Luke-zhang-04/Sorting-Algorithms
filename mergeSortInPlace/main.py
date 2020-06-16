from typing import List


def merge(array: List[int], start: int, mid: int, end: int) -> None:
    """Merges two arrays\n
    Merges array[start:mid] and array[mid:end] in place; returns None.
    """
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


def mergeSort(array: List[int], *args: List[int]) -> None:
    """Main merge sort algorithm\n
    *args: left and right indexes (optional, leave blank for whole array)\n
    Sorts array in-place; returns None.
    """

    if len(args) == 2:
        left, right = args
    else:
        left, right = 0, len(array) - 1

    if right > left:
        # Split array into to halves
        half = left + (right - left) // 2  # Halfway point

        mergeSort(array, left, half)
        mergeSort(array, half + 1, right)

        # Merge left and right sides
        merge(array, left, half, right)


if __name__ == "__main__":
    try:
        from utils import randomSequence
    except ModuleNotFoundError:
        import os, sys  # Import shuffler from parent directory

        dir_path = os.path.dirname(os.path.realpath(__file__))
        parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
        sys.path.insert(0, parent_dir_path)
        from utils import randomSequence

    print("MERGE SORT")

    # shuffledArray = randomSequence(0, 1000)
    shuffledArray = [7, 3, 6, 9, 4, 8, 1, 0, 5, 2]

    print(shuffledArray, "\n")

    mergeSort(shuffledArray)

    print(shuffledArray)
