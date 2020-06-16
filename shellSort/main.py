def shellSort(array):
    """Main shellsort algorithm

    returns void; sorts in-place
    """
    gap = len(array) // 2
    while gap >= 1:
        for i in range(gap, len(array)):  # Iterate through array, starting from gap
            comparator = array[i]  # Make comparisons with this

            for x in range(
                i, gap - 2, -gap
            ):  # Iterate through array with gap as the step
                if array[x - gap] <= comparator:
                    break  # Break when correct spot is found
                else:
                    array[x] = array[
                        x - gap
                    ]  # Otherwise, move elements forward to make space
            array[x] = comparator  # Insert comparator in the correct spot

        gap //= 2  # Increment the gap


if __name__ == "__main__":
    try:
        from utils import randomSequence
    except ModuleNotFoundError:
        import os, sys  # import shuffler from parent directory

        dir_path = os.path.dirname(os.path.realpath(__file__))
        parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
        sys.path.insert(0, parent_dir_path)
        from utils import randomSequence

    print("SHELL SORT")

    shuffledArray = randomSequence(0, 1000)

    print(shuffledArray, "\n")

    shellSort(shuffledArray)

    print(shuffledArray)
