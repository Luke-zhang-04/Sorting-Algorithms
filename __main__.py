#!/usr/bin/python
from bogoSort import bogoSort
from bubbleSort import bubbleSort
from utils import randomSequence

import sys

args = sys.argv[1:]

for target in args:
    if target == "bogoSort":
        shuffledArray = randomSequence(0, 5)
        print(shuffledArray)
        bogoSort(shuffledArray)
        print(shuffledArray)

    else:
        shuffledArray = randomSequence(0, 1000)
        print(shuffledArray, end="\n\n")

        try:
            exec(f"{target}(shuffledArray)")
        except NameError:
            print(
                f"NameError: {target} is not a sorting algorithm. Check your casing.\n"
            )
        else:
            print(shuffledArray)
