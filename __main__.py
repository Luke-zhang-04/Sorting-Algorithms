#!/usr/bin/python
from bogoSort import bogoSort
from shuffler import randomSequence

import sys

args = sys.argv[1:]

for target in args:
    if target == "bogoSort":
        shuffledArray = randomSequence(0, 5)
        print(shuffledArray)
        bogoSort(shuffledArray)
        print(shuffledArray)
