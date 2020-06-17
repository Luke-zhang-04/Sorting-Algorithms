"""Animated comb sort
Copyright (C) Luke Zhang | MIT License | https://luke-zhang-04.github.io/
"""
from time import sleep
from typing import List
from tkinter import Tk

from animated import Animator


class CombSort(Animator):
    @staticmethod
    def nextGap(gap: int) -> int:
        """Finds the next gap to increment the sort by"""
        newGap = (gap * 10) // 13

        return 1 if newGap < 1 else newGap

    def sort(self, array: List[int]) -> None:
        """Main combsort function\n
        Sorts array in place; returns None
        """
        gap, swapped = len(array), True

        while gap >= 1 or (gap >= 1 and not swapped):
            gap = CombSort.nextGap(gap)
            swapped = False

            for i in range(len(array) - gap):  # Iterate through the whole array
                self.render(array, cur=(i, i + gap))
                sleep(0.01)

                if array[i] > array[i + gap]:  # Swap if needed
                    array[i], array[i + gap] = array[i + gap], array[i]
                    swapped = True

            if not swapped and gap == 1:
                break


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

    sorter = CombSort(
        root,
        background="black",
        width=root.winfo_screenwidth(),
        height=root.winfo_screenheight(),
    )

    sorter.pack()

    sorter.sort(shuffledArray)

    sorter.finished()

    return 0
