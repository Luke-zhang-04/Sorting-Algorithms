"""Animated insertion sort
Copyright (C) Luke Zhang | MIT License | https://luke-zhang-04.github.io/
"""
from time import sleep
from typing import List
from tkinter import Tk

from animated import Animator


class InsertionSort(Animator):
    def sort(self, array: List[int]) -> None:
        """Main insertion sort algorithm\n
        Sorts array in-place; returns None
        """
        for i in range(1, len(array)):  # Iterate through entire array
            comparator = array[i]  # Make comparison with this value
            for section in range(
                i - 1, -2, -1
            ):  # Iterate through array from i backwards
                if (
                    comparator > array[section]
                ):  # Insert comparator into the array, in its correct position
                    array[section + 1] = comparator
                    self.render(array, cur=section + 2)
                    sleep(0.01)
                    break
                else:
                    array[section + 1] = array[
                        section
                    ]  # If comparator <= array[section], move array[section] forward to make space
                    self.render(array, cur=section + 2)
                    sleep(0.01)
            else:
                array[
                    section + 1
                ] = comparator  # If loop wasn't broken, insert comparator in the right spot


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

    sorter = InsertionSort(
        root,
        background="black",
        width=root.winfo_screenwidth(),
        height=root.winfo_screenheight(),
    )

    sorter.pack()

    sorter.sort(shuffledArray)

    sorter.finished()

    return 0
