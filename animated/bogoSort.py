"""Animated bogosort
Copyright (C) Luke Zhang | MIT License | https://luke-zhang-04.github.io/
"""
from random import shuffle
from time import sleep
from typing import List
from tkinter import Tk

from animated import Animator


class BogoSort(Animator):
    def issorted(self, array: List[int]) -> bool:
        """Checks if an array is sorted\n
        Param array is an array of numbers\n
        Returns true if sorted, false if not
        """
        for i in range(len(array) - 1):
            if array[i + 1] < array[i]:
                return False

        return True

    def sort(self, array: List[int]) -> None:
        """Main bogosort function\n
            Sorts array in place, returns void
            """
        shuffle(array)
        self.render(array)
        sleep(0.25)

        return (
            array if self.issorted(array) else self.sort(array)
        )  # Check if the array is sorted, otherwise recurse


def main() -> int:
    try:
        from utils import randomSequence
    except ModuleNotFoundError:
        import os, sys  # import shuffler from parent directory

        dir_path = os.path.dirname(os.path.realpath(__file__))
        parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
        sys.path.insert(0, parent_dir_path)
        from utils import randomSequence

    shuffledArray = randomSequence(0, 5)

    root = Tk()

    sorter = BogoSort(
        root,
        background="black",
        width=root.winfo_screenwidth(),
        height=root.winfo_screenheight(),
    )

    sorter.pack()

    sorter.sort(shuffledArray)

    sorter.finished()

    return 0
