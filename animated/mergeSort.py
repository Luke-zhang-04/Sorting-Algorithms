"""Animated merge sort
Copyright (C) Luke Zhang | MIT License | https://luke-zhang-04.github.io/
"""
from time import sleep
from typing import List
from tkinter import Tk

from animated import Animator


class MergeSort(Animator):
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

    def sort(self, array: List[int], *args: List[int]) -> None:
        """Main merge sort algorithm\n
        *args: left and right indexes (optional, leave blank for whole array)\n
        Sorts array in-place; returns None.
        """

        if len(args) == 2:
            left, right = args
        else:
            left, right = 0, len(array) - 1

        if right > left:
            # Split array into to halves
            half = left + (right - left) // 2  # Halfway point

            self.sort(array, left, half)
            self.render(array, cur=(left, half))
            sleep(0.01)

            self.sort(array, half + 1, right)
            self.render(array, cur=(half + 1, right))
            sleep(0.01)

            # Merge left and right sides
            self.merge(array, left, half, right)
            self.render(array, cur=(left, half + 1, right))
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

    sorter = MergeSort(
        root,
        background="black",
        width=root.winfo_screenwidth(),
        height=root.winfo_screenheight(),
    )

    sorter.pack()

    sorter.sort(shuffledArray)

    sorter.finished()

    return 0
