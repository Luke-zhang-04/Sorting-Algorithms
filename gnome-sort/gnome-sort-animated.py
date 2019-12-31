import os, sys #import animator from parent directory
dir_path = os.path.dirname(os.path.realpath(__file__))
parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
sys.path.insert(0, parent_dir_path)

from animator import draw_graph
from shuffler import random_sequence
counter = 0

from random import shuffle
from tkinter import Tk, Canvas
myInterface = Tk()
screen = Canvas(myInterface, width=1000, height=800, background = "black")
screen.pack()

def gnome_sort(array): #GNOME SORT
    i = 1
    while i < len(array): #Iterate until end of array
        if array[i] > array[i-1] or i == 0: #move "gnome" forward if "pots" in  correct order
            i += 1
        else:
            array[i], array[i-1] = array[i-1], array[i] #swap if needed, go back
            i -= 1
            draw_graph(array, time = 0.001)

    return array

shuffled_array = random_sequence(0, 100)

draw_graph(shuffled_array)

sorted_array = gnome_sort(shuffled_array)

draw_graph(sorted_array, finished = True)

screen.mainloop()