"""Animated selection sort
Copyright (C) Luke Zhang | MIT License | https://luke-zhang-04.github.io/
"""
from time import sleep
from typing import List
from tkinter import Tk

from animated import Animator


class SelectionSort(Animator):
    def min(self, array: List[int], start) -> int:
        """Seperate min function for animation"""
        smallest = array[start]
        for i in range(start, len(array)):
            self.modColour(i, color="red")
            self.modColour(i-1, color="white")
            if array[i] < smallest:
                smallest = array[i]
        
        return smallest

    def sort(self, array: List[int]) -> None:
        """Main selectionsort algorithm\n
        Sorts array in-place; returns None
        """
        self.render(array)
        sleep(0.01)

        for i in range(len(array)):  # Iterate through entire array
            index = array.index(self.min(array, i))  # Get index of smallest item
            array[i], array[index] = array[index], array[i]  # Swap it to the correct spot
            self.render(array, cur=(i, index))
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

    shuffledArray = randomSequence(0, 225)

    root = Tk()

    sorter = SelectionSort(
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
