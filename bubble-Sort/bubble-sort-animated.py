import os, sys #import animator from parent directory
dir_path = os.path.dirname(os.path.realpath(__file__))
parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
sys.path.insert(0, parent_dir_path)

from animator import draw_graph
from shuffler import random_sequence
counter = 0

from tkinter import Tk, Canvas
myInterface = Tk()
screen = Canvas(myInterface, width=1000, height=800, background = "black")
screen.pack()

def bubble_sort(array): #BUBBLE SORT
    for amt in range(len(array)):
        swaps = 0
        for i in range(len(array)-1-amt): #iterate through the array
            if array[i] > array[i + 1]: #swap if needed
                array[i], array[i+1] = array[i+1], array[i]
                swaps += 1
                draw_graph(array)
        if swaps == 0: break #array is in order

    return array

shuffled_array = random_sequence(0, 100)

draw_graph(shuffled_array)

bubble_sort(shuffled_array)

screen.mainloop()