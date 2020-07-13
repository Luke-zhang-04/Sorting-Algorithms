"""Animated shell sort
Copyright (C) Luke Zhang | MIT License | https://luke-zhang-04.github.io/
"""
from time import sleep
from typing import List
from tkinter import Tk

from animated import Animator


class ShellSort(Animator):
    def sort(self, array: List[int]) -> None:
        """Main shellsort algorithm\n
        Sorts array in-place; returns None.
        """
        gap = (
            len(array) // 2
        )  # Alternate gap sequence 4**iterations + 3 * 2**iterations + 1
        while gap >= 1:
            for i in range(gap, len(array)):  # Iterate through array, starting from gap
                comparator = array[i]  # Make comparisons with this

                for x in range(
                    i, gap - 2, -gap
                ):  # Iterate through array with gap as the step
                    if array[x - gap] <= comparator:
                        break  # Break when correct spot is found
                    else:
                        array[x] = array[
                            x - gap
                        ]  # Otherwise, move elements forward to make space
                        self.render(array, cur=(x, x - gap))
                        sleep(0.01)
                array[x] = comparator  # Insert comparator in the correct spot
                self.render(array)
                sleep(0.01)

            gap //= 2  # Increment the gap


def main() -> int:
    try:
        from utils import randomSequence
    except ModuleNotFoundError:
        import os, sys  # import shuffler from parent directory

        dir_path = os.path.dirname(os.path.realpath(__file__))
        parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
        sys.path.insert(0, parent_dir_path)
        from utils import randomSequence

    shuffledArray = randomSequence(0, 125)

    root = Tk()

    root.title("Shell Sort")

    sorter = ShellSort(
        root,
        background="black",
        width=root.winfo_screenwidth(),
        height=root.winfo_screenheight(),
    )

    sorter.pack()

    sorter.sort(shuffledArray)

    sorter.render(shuffledArray)
    sorter.finished()

    return 0
