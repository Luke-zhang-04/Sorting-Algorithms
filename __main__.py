#!/usr/bin/python
from shuffler import randomSequence

import sys

args = sys.argv[1:]

for target in args:
    exec(f"from {target} import {target}")

    if target == "bogoSort":
        shuffledArray = randomSequence(0, 5)
        print(shuffledArray)
        bogoSort(shuffledArray)
        print(shuffledArray)
