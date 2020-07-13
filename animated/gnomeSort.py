"""Animated gnome sort
Copyright (C) Luke Zhang | MIT License | https://luke-zhang-04.github.io/
"""
from time import sleep
from typing import List
from tkinter import Tk

from animated import Animator


class GnomeSort(Animator):
    def sort(self, array: List[int]) -> None:
        """Main gnome sort function"""
        i = 1
        while i < len(array):  # Iterate until end of array
            if (
                array[i] > array[i - 1] or i == 0
            ):  # move "gnome" forward if "pots" in  correct order
                self.render(array, cur=(i - 1, i - 2))
                sleep(0.01)
                i += 1
            else:
                array[i], array[i - 1] = (
                    array[i - 1],
                    array[i],
                )  # swap if needed, go back
                self.render(array, cur=(i - 1, i - 2))
                sleep(0.01)
                i -= 1


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

    root.title("Gnome Sort")

    sorter = GnomeSort(
        root,
        background="black",
        width=root.winfo_screenwidth(),
        height=root.winfo_screenheight(),
    )

    sorter.pack()

    sorter.sort(shuffledArray)

    sorter.finished()

    return 0
