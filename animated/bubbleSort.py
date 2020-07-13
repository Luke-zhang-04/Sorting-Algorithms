"""Animated bogosort
Copyright (C) Luke Zhang | MIT License | https://luke-zhang-04.github.io/
"""
from time import sleep
from typing import List
from tkinter import Tk

from animated import Animator


class BubbleSort(Animator):
    def sort(self, array: List[int]) -> None:
        """Main bubble sort algorithm
        Sorts array in-place, returns None
        """

        for amt in range(len(array)):
            swaps = 0

            for i in range(len(array) - 1 - amt):  # Iterate through the array
                if array[i] > array[i + 1]:  # Swap if needed
                    array[i], array[i + 1] = array[i + 1], array[i]
                    swaps += 1
                    self.render(array, cur=(i, i + 1))
                    sleep(0.01)

            if swaps == 0:
                break  # Array is in order


def main() -> int:
    try:
        from utils import randomSequence
    except ModuleNotFoundError:
        import os, sys  # import shuffler from parent directory

        dir_path = os.path.dirname(os.path.realpath(__file__))
        parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
        sys.path.insert(0, parent_dir_path)
        from utils import randomSequence

    shuffledArray = randomSequence(0, 100)

    root = Tk()

    root.title("Bubble Sort")

    sorter = BubbleSort(
        root,
        background="black",
        width=root.winfo_screenwidth(),
        height=root.winfo_screenheight(),
    )

    sorter.pack()

    sorter.sort(shuffledArray)

    sorter.finished()

    return 0
