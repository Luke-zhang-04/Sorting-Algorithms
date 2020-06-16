#!/usr/bin/python
from bogoSort import bogoSort
from bubbleSort import bubbleSort
from cocktailShakerSort import cocktailShakerSort
from combSort import combSort
from countingSort import countingSort
from gnomeSort import gnomeSort
from insertionSort import insertionSort
from mergeSort import mergeSort
import mergeSortInPlace as IPMergeSort
from quickSort import quickSort
from radixSort import radixSort
from selectionSort import selectionSort
from shellSort import shellSort
from timSort import timSort

from typing import Callable, List
from utils import randomSequence

import sys

args = sys.argv[1:]


def notInPlace(sort: Callable[[List[int]], List[int]]) -> None:
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
    elif target == "mergeSort":
        notInPlace(mergeSort)
        continue
    elif target in ("mergeSortInPlace", "mergeSortIP", "IPMergeSort"):
        shuffledArray = randomSequence(0, 1000)
        print(shuffledArray, end="\n\n")
        IPMergeSort.mergeSort(shuffledArray)
        print(shuffledArray, end="\n\n")
        continue
    elif target in ("radix", "radixLSD", "radixSortLSD"):
        shuffledArray = randomSequence(0, 1000)
        print(shuffledArray, end="\n\n")
        radixSort(shuffledArray)
        print(shuffledArray, end="\n\n")
    elif target in ("radixMSD", "radixSortMSD"):
        shuffledArray = randomSequence(0, 1000)
        print(shuffledArray, end="\n\n")
        radixSort(shuffledArray, msd=True, digit=None)
        print(shuffledArray, end="\n\n")
        continue

    shuffledArray = randomSequence(0, 1000)
    print(shuffledArray, end="\n\n")

    try:
        exec(f"{target}(shuffledArray)")
    except NameError:
        print(f"NameError: {target} is not a sorting algorithm. Check your casing.\n")
    else:
        print(shuffledArray, end="\n\n")
