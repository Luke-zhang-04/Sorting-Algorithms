def countingSort(array, exp):
    """Counting sort for radix sort

    exp indexes the digit to sort with
    """

    count = [0 for _ in range(max(array) + 1)]

    for i in range(len(array)):
        count[digit(array[i], exp)] += 1

    for i in range(1, len(count)):
        count[i] += count[i - 1]

    output = [None for _ in range(len(array))]

    for i in range(len(array) - 1, -1, -1):
        output[count[digit(array[i], exp)] - 1] = array[i]
        count[digit(array[i], exp)] -= 1

    array[:] = output


def digit(number, n):
    """Indexes integer without type conversion (e.g digit(253, 1) returns 5)"""
    return number // 10 ** n % 10


def seperate(array, digit):
    """Seperates numbers in an array by digit while grouping them accordingly"""

    digit = 10 ** digit
    output = []
    counter = 0
    minimum = list(str(min(array)))
    for i in range(len(minimum[1:])):
        minimum[i + 1] = "0"

    minimum = int("".join(minimum))

    # for i in range(minimum+(10*digit), max(array)+(10*digit), 10*digit):
    for i in range(minimum + digit, max(array) + digit + 1, digit):
        beg = counter

        while counter <= len(array):
            if counter == len(array) or array[counter] >= i:
                if counter - beg > 0:
                    output.append(array[beg:counter])
                break
            counter += 1

    array[:] = output


def radixSort(array, lsd=False, msd=False, **kwargs):
    if lsd:  # LSD radix sort
        for i in range(len(str(max(array)))):
            countingSort(array, i)

    elif msd:  # MSD radix sort
        digit = len(str(max(array))) - 1 if kwargs["digit"] == None else kwargs["digit"]
        output = []

        if digit >= 0:
            countingSort(array, digit)
            seperate(array, digit)

            for i in array:
                radixSort(i, msd=True, digit=digit - 1)
                output += i

        else:
            output = array

        array[:] = output

    else:
        radixSort(array, lsd=True)  # LSD by default


if __name__ == "__main__":
    try:
        from utils import randomSequence
    except ModuleNotFoundError:
        import os, sys  # import shuffler from parent directory

        dir_path = os.path.dirname(os.path.realpath(__file__))
        parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
        sys.path.insert(0, parent_dir_path)
        from utils import randomSequence

    print("RADIX SORT")
    shuffledArray1 = randomSequence(0, 1000)
    shuffledArray2 = shuffledArray1.copy()

    print(shuffledArray1, "\n")

    print("LSD")
    radixSort(shuffledArray1, lsd=True)
    print(shuffledArray1, "\n")

    print("MSD")
    radixSort(shuffledArray2, msd=True, digit=None)
    print(shuffledArray2)
