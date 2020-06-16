"""Animated sorting algorithms
Copyright (C) Luke Zhang | MIT License | https://luke-zhang-04.github.io/
"""

from tkinter import Tk, Button, Label
from animated.animator import Animator

import animated.bogoSort as bogoSort
import animated.bubbleSort as bubbleSort


class Menu:
    """Menu class"""

    sorts = {
        "bogosort": {
            "title": "Bogo sort",
            "col": 0,
            "row": 1,
            "colour": "brown",
            "callback": lambda: bogoSort.main(),
        },
        "bubblesort": {
            "title": "Bubble sort",
            "col": 1,
            "row": 1,
            "colour": "skyblue",
            "callback": lambda: bubbleSort.main(),
        },
        "cocktailshakersort": {
            "title": "Cocktail sort",
            "col": 2,
            "row": 1,
            "colour": "red",
            "callback": lambda: print(),
        },
        "combsort": {
            "title": "Comb sort",
            "col": 3,
            "row": 1,
            "colour": "grey10",
            "callback": lambda: print(),
        },
        "countingsort": {
            "title": "Counting sort",
            "col": 4,
            "row": 1,
            "colour": "yellow",
            "callback": lambda: print(),
        },
        "gnomesort": {
            "title": "Gnome sort",
            "col": 5,
            "row": 1,
            "colour": "green",
            "callback": lambda: print(),
        },
        "insetionsort": {
            "title": "Insertion sort",
            "col": 0,
            "row": 2,
            "colour": "blue",
            "callback": lambda: print(),
        },
        "mergesort": {
            "title": "Merge sort",
            "col": 1,
            "row": 2,
            "colour": "steelBlue3",
            "callback": lambda: print(),
        },
        "mergesortIP": {
            "title": "In place merge sort",
            "col": 2,
            "row": 2,
            "colour": "steelBlue1",
            "callback": lambda: print(),
        },
        "quicksort": {
            "title": "Quick sort",
            "col": 3,
            "row": 2,
            "colour": "grey70",
            "callback": lambda: print(),
        },
        "radixsortlsd": {
            "title": "Radix LSD sort",
            "col": 4,
            "row": 2,
            "colour": "green",
            "callback": lambda: print(),
        },
        "radixsort MSD": {
            "title": "Radix MSD sort",
            "col": 5,
            "row": 2,
            "colour": "red",
            "callback": lambda: print(),
        },
        "selectionsort": {
            "title": "Selection sort",
            "col": 1.5,
            "row": 3,
            "colour": "ivory3",
            "callback": lambda: print(),
        },
        "shellsort": {
            "title": "Shell sort",
            "col": 2.5,
            "row": 3,
            "colour": "mistyRose2",
            "callback": lambda: print(),
        },
        "timsort": {
            "title": "Tim sort",
            "col": 3.5,
            "row": 3,
            "colour": "blue",
            "callback": lambda: print(),
        },
    }

    def __init__(self):
        """Constructor and setup for the Menu class"""
        self.root = Tk()
        self.root.title("Animated Sorts Menu")
        self.root.configure(bg="black")

    def render(self):
        """Render menu"""
        Label(  # Title
            self.root,
            text="Animated Sorts",
            bg="black",
            fg="white",
            font="Helvetica, 50",
        ).grid(row=0, column=2, columnspan=8)

        for _, (_, sort) in enumerate(self.sorts.items()):
            Button(
                self.root,
                text=sort["title"],
                command=sort["callback"],
                bg=sort["colour"],
                highlightbackground=sort["colour"],
            ).grid(
                row=sort["row"] * 2,
                pady=10,
                column=int(sort["col"] * 2),
                columnspan=2,
                sticky="n",
            )

        self.root.mainloop()
