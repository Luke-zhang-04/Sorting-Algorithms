#!/usr/bin/python
from bogoSort import bogoSort
from bubbleSort import bubbleSort
from cocktailShakerSort import cocktailShakerSort
from combSort import combSort
from countingSort import countingSort
from gnomeSort import gnomeSort
from insertionSort import insertionSort
from mergeSort import mergeSort

from utils import randomSequence

import sys

args = sys.argv[1:]


def notInPlace(sort):
    shuffledArray = randomSequence(0, 1000)
    print(shuffledArray, end="\n\n")
    sortedArray = sort(shuffledArray)
    print(sortedArray, end="\n\n")


for target in args:
    if target == "bogoSort":
        shuffledArray = randomSequence(0, 5)
        print(shuffledArray, end="\n\n")
        bogoSort(shuffledArray)
        print(shuffledArray, end="\n\n")
        continue
    elif target == "countingSort":
        notInPlace(countingSort)
        continue
    elif target == "mergeSort":
        notInPlace(mergeSort)
        continue

    shuffledArray = randomSequence(0, 1000)
    print(shuffledArray, end="\n\n")

    try:
        exec(f"{target}(shuffledArray)")
    except NameError:
        print(f"NameError: {target} is not a sorting algorithm. Check your casing.\n")
    else:
        print(shuffledArray, end="\n\n")
