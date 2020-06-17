"""Animated quick sort
Copyright (C) Luke Zhang | MIT License | https://luke-zhang-04.github.io/
"""
from time import sleep
from typing import List
from tkinter import Tk

from animated import Animator


class QuickSort(Animator):
    def partition(self, array: List[int], left: int, right: int, pt: int) -> int:
        """Moves array elements to the correct sides of pivot (pt)\n
        Returns new pivot point after partition\n
        Performs partition in place
        """
        while True:
            swaps = 0  # Keep track of the swaps made

            for i in range(
                left, pt
            ):  # Start from left side of the pivot (if pivot point isn't 0)
                if array[pt] < array[i]:  # Swap if element is larger than pivot
                    array[pt], array[i] = array[i], array[pt]

                    self.render(array, cur=(pt, i))
                    sleep(0.01)

                    pt = i
                    swaps += 1
                    break

            for i in range(right, pt, -1):  # Start from right side of the pivot
                if array[pt] > array[i]:  # Swap if element is smaller than pivot
                    array[pt], array[i] = array[i], array[pt]

                    self.render(array, cur=(pt, i))
                    sleep(0.01)

                    pt = i
                    swaps += 1
                    break

            if swaps == 0:
                break  # Pivot is in the correct spot

        return pt

    def sort(self, array: List[int], *args: List[int]) -> None:
        """Main quicksort function\n
        *args: leave blank to sort whole array, otherwise define start and end\n
        Sorts array in-place; returns None
        """

        left, right = 0, len(array) - 1

        if len(args) == 2:
            left, right = args

        if left < right - 1:
            half = (left + right) // 2  # Midpoint of the array
            start, middle, end = array[left], array[half], array[right]

            # Choose pivot point (median of the first, middle, and last element) to avoid exponential running time
            if (start > end and start < middle) or (start < end and start > middle):
                pivotPt = left
            elif (end > start and end < middle) or (end < start and end > middle):
                pivotPt = right - 1
            else:
                pivotPt = half

            # Move pivot to right spot, move elements onto the correct side of the pivot, and get the new pivot point
            pt = self.partition(array, left, right, pivotPt)

            self.render(array, cur=(left, right, pivotPt))
            sleep(0.01)

            # Recursively quicksort the remaining subarrays
            self.sort(array, left, pt)
            self.render(array, cur=(pt, left))
            sleep(0.01)

            self.sort(array, pt, right)
            self.render(array, cur=(pt, right))
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

    shuffledArray = randomSequence(0, 200)

    root = Tk()

    sorter = QuickSort(
        root,
        background="black",
        width=root.winfo_screenwidth(),
        height=root.winfo_screenheight(),
    )

    sorter.pack()

    sorter.sort(shuffledArray)

    sorter.finished()

    return 0
