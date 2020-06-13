# if shuffled_array = random_sequence(0, x <= 5), the algorithm should work fine. Otherwise, a recursion error is likely

import os, sys  # import animator from parent directory

dir_path = os.path.dirname(os.path.realpath(__file__))
parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
sys.path.insert(0, parent_dir_path)

from animator2 import draw_graph
from shuffler import random_sequence

counter = 0

from random import shuffle
from tkinter import Tk, Canvas

myInterface = Tk()
screen = Canvas(myInterface, width=1000, height=800, background="black")
screen.pack()


def is_sorted(array):  # if array is sorted
    for i in range(len(array) - 1):
        if array[i + 1] < array[i]:
            return False

    return True


def bogo_sort(array):
    shuffle(array)  # shuffles the array
    draw_graph(screen, array, time=0.15)
    return (
        array if is_sorted(array) else bogo_sort(array)
    )  # check if the array is sorted, otherwise recurse


shuffled_array = random_sequence(0, 5)

draw_graph(screen, shuffled_array)

sorted_array = bogo_sort(shuffled_array)

draw_graph(screen, sorted_array, finished=True)

screen.mainloop()
