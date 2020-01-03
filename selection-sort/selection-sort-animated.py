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

def selection_sort(array):
    for i in range(len(array)): #iterate through entire array
        index = array.index(min(array[i:])) #get index of smallest item
        array[i], array[index] = array[index], array[i] #swap it to the correct spot
        draw_graph(screen, array, current = i, time = 0.02, changed=[i,index])
    return array

numVals = 100

shuffled_array = random_sequence(0, min(numVals, screen.winfo_width()))

draw_graph(screen, shuffled_array)

sorted_array = selection_sort(shuffled_array)

draw_graph(screen, sorted_array, finished = True)

screen.mainloop()