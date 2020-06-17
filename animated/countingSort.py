"""Animated cocktail shaker sort
Copyright (C) Luke Zhang | MIT License | https://luke-zhang-04.github.io/
"""
from time import sleep
from typing import List
from tkinter import Tk

from animated import Animator


class CountingSort(Animator):
    def sort(self, array: List[int]) -> None:
        """Main countingsort algorith\n
        Sorts in-place; returns None.
        """
        count = [0 for _ in range(max(array) + 1)]  # create array with zeros

        for i in range(
            len(array)
        ):  # Iterate through given array, and add 1 to the index which is the value of array[i]
            count[array[i]] += 1
            self.render(array, cur=i)
            sleep(0.01)

        for i in range(
            1, len(count)
        ):  # Go through array and add previous index's value to the current index
            count[i] += count[i - 1]
            self.render(count, cur=i)
            sleep(0.01)

        output = [0 for _ in range(len(array))]  # Create output array with none types
        for i in array:  # Iterate through array and turn none types into sorted values
            output[count[i] - 1] = i
            count[i] -= 1
            self.render(output, cur=count[i] - 1)
            sleep(0.01)

        array[:] = output
        self.render(array)
        sleep(0.01)


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

    sorter = CountingSort(
        root,
        background="black",
        width=root.winfo_screenwidth(),
        height=root.winfo_screenheight(),
    )

    sorter.pack()

    sorter.sort(shuffledArray)

    sorter.finished()

    return 0
