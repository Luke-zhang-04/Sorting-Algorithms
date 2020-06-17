"""Animated cocktail shaker sort
Copyright (C) Luke Zhang | MIT License | https://luke-zhang-04.github.io/
"""
from time import sleep
from typing import List
from tkinter import Tk

from animated import Animator


class CocktailShakerSort(Animator):
    def sort(self, array: List[int]) -> None:
        """Main cocktail shaker sort algorithm\n
        Sorts array in place; returns None.
        """

        for amt in range(
            len(array) // 2 + len(array) % 2
        ):  # Iterate for half the length of the array plus one if odd
            swaps = 0
            section = (
                len(array[amt:-amt]) if amt > 0 else len(array)
            )  # Keep narrowing down the search

            for i in range(section - 1):  # Iterate through the array
                if array[amt + i] > array[amt + i + 1]:  # Swap if needed
                    array[amt + i], array[amt + i + 1] = (
                        array[amt + i + 1],
                        array[amt + i],
                    )
                    swaps += 1
                    self.render(array, cur=(amt + i, amt + i + 1))
                    sleep(0.01)

            if swaps == 0:
                break  # Array is in order, this break statement could save time

            for i in range(section - 1, 0, -1):
                if array[amt + i] < array[amt + i - 1]:  # Swap if needed
                    array[amt + i], array[amt + i - 1] = (
                        array[amt + i - 1],
                        array[amt + i],
                    )
                    swaps += 1
                    self.render(array, cur=(amt + i, amt + i - 1))
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

    sorter = CocktailShakerSort(
        root,
        background="black",
        width=root.winfo_screenwidth(),
        height=root.winfo_screenheight(),
    )

    sorter.pack()

    sorter.sort(shuffledArray)

    sorter.finished()

    return 0
