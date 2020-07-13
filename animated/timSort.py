"""Animated tim sort
Copyright (C) Luke Zhang | MIT License | https://luke-zhang-04.github.io/
"""
from time import sleep
from typing import List
from tkinter import Tk

from animated import Animator


class TimSort(Animator):
    def insertionSort(self, array: List[int], start: int, end: int) -> None:
        """Main insertion sort algorithm\n
        Sorts array in-place; returns None
        """
        for i in range(start + 1, end):  # Iterate through entire array
            comparator = array[i]  # Make comparison with this value
            section = i - 1

            while (
                section >= start and array[section] > comparator
            ):  # Iterate through array from i to 0 backwards
                array[section + 1] = array[
                    section
                ]  # If comparator <= array[section], move array[section] forward to make space
                self.render(array, cur=section + 1)
                # sleep(0.01)
                section -= 1

            array[
                section + 1
            ] = comparator  # Insert comparator into the array, in its correct position

            self.render(array, cur=section + 1)
            sleep(0.01)

    def merge(self, array: List[int], start: int, mid: int, end: int) -> None:
        """Merges two arrays\n
        Merges array[start:mid] and array[mid:end] in place; returns None.
        """
        start2 = mid + 1

        if array[mid] <= array[start2]:
            return

        while start <= mid and start2 <= end:
            self.render(array, cur=(start, start2))
            sleep(0.01)

            if array[start] <= array[start2]:
                start += 1
            else:
                value = array[start2]
                index = start2

                while index != start:
                    array[index] = array[index - 1]
                    index -= 1

                array[start] = value

                start += 1
                mid += 1
                start2 += 1

    def sort(self, array: List[int], run: int = 32) -> None:
        """Main timsort function\n
        Sorts array in-place; returns None
        """
        # Run insertionsort
        for i in range(0, len(array), run):
            self.insertionSort(array, i, min(i + run, len(array)))

        # Run merges
        size = run
        while size < len(array):
            for left in range(0, len(array), 2 * size):
                mid = left + size - 1
                right = min((left + 2 * size - 1), (len(array) - 1))
                self.merge(array, left, mid, right)

            size *= 2


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

    root.title("Tim Sort")

    sorter = TimSort(
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
