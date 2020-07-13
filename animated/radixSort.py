"""Animated radix sort
Copyright (C) Luke Zhang | MIT License | https://luke-zhang-04.github.io/
"""
from time import sleep
from typing import List
from tkinter import Tk

from animated import Animator


class RadixSort(Animator):
    def countingSort(self, array: List[int], exp: int, render: bool = True) -> None:
        """Counting sort for radix sort\n
        exp indexes the digit to sort with\n
        Returns None; sets array to new array.
        """

        count = [0 for _ in range(max(array) + 1)]

        for i in range(len(array)):
            count[RadixSort.digit(array[i], exp)] += 1
            if render:
                self.render(array, cur=i)
                sleep(0.01)

        for i in range(1, len(count)):
            count[i] += count[i - 1]
            if render:
                self.render(array, cur=i)

        output = [0 for _ in range(len(array))]

        for i in range(len(array) - 1, -1, -1):
            output[count[RadixSort.digit(array[i], exp)] - 1] = array[i]
            count[RadixSort.digit(array[i], exp)] -= 1
            if render:
                self.render(
                    output,
                    cur=(
                        count[RadixSort.digit(array[i], exp)] + 1,
                        count[RadixSort.digit(array[i], exp)],
                    ),
                )
                sleep(0.01)

        array[:] = output
        self.render(array)
        sleep(0.01)

    @staticmethod
    def digit(number: int, n: int) -> int:
        """Indexes integer without type conversion (e.g digit(253, 1) returns 5)\n
        Index of number is n
        """
        return number // 10 ** n % 10

    def seperate(self, array: List[int], digit: int) -> None:
        """Seperates numbers in an array by digit while grouping them accordingly"""

        digit = 10 ** digit
        output = []
        counter = 0
        minimum = list(str(min(array)))
        for i in range(len(minimum[1:])):
            minimum[i + 1] = "0"

        minimum = int("".join(minimum))

        for i in range(minimum + digit, max(array) + digit + 1, digit):
            beg = counter

            while counter <= len(array):
                if counter == len(array) or array[counter] >= i:
                    self.render(array, cur=(counter, beg, counter - beg))
                    if counter - beg > 0:
                        output.append(array[beg:counter])
                    break
                counter += 1

        array[:] = output

    def sort(
        self, array: List[int], lsd: bool = False, msd: bool = False, **kwargs
    ) -> None:
        """Main radix sort function\n
        Set lsd or msd to true. If none are set, LSD is automatically executed\n
        Leave kwargs as-is for normal sorting\n
        Sorts array in-place; returns None
        """

        if lsd:  # LSD radix sort
            for i in range(len(str(max(array)))):
                self.countingSort(array, i)
                self.render(array)
                sleep(0.01)

        elif msd:  # MSD radix sort
            if "digit" not in kwargs:
                kwargs["digit"] = None

            digit = (
                len(str(max(array))) - 1 if kwargs["digit"] == None else kwargs["digit"]
            )
            output = []

            if digit >= 0:
                self.countingSort(array, digit, render=True)
                self.seperate(array, digit)

                for i in array:
                    self.sort(i, msd=True, digit=digit - 1)
                    output += i

            else:
                output = array

            array[:] = output

        else:
            self.sort(array, lsd=True)  # LSD by default


def main(type: str) -> int:
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

    root.title("Radix Sort")

    sorter = RadixSort(
        root,
        background="black",
        width=root.winfo_screenwidth(),
        height=root.winfo_screenheight(),
    )

    sorter.pack()

    if type == "msd":
        sorter.sort(shuffledArray, msd=True)
    else:
        sorter.sort(shuffledArray)

    sorter.render(shuffledArray)
    sorter.finished()

    return 0
