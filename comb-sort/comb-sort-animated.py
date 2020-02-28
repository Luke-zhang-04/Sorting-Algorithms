import os, sys #import animator from parent directory
dir_path = os.path.dirname(os.path.realpath(__file__))
parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
sys.path.insert(0, parent_dir_path)

from animator2 import draw_graph
from shuffler import random_sequence
counter = 0

from random import shuffle
from tkinter import Tk, Canvas
myInterface = Tk()
screen = Canvas(myInterface, width=1250, height=800, background = "black")
screen.pack()
screen.update()

def nextGap(gap): 
    gap = (gap * 10)//13
    if gap < 1: 
        return 1
    return gap 

def comb_sort(array):
    gap = len(array)
    swapped = True
    while gap > 1 or not swapped:
        gap = nextGap(gap)
        swapped = False

        for i in range(len(array)-gap): #iterate through the whole array
            if array[i] > array[i + gap]: #swap if needed
                array[i], array[i + gap] = array[i + gap], array[i] 
                swapped = True
                draw_graph(screen, array, current = i if i % 2 == 0 else i + gap, time = 0.0005)
    return array

numVals = 250

shuffled_array = random_sequence(0, min(numVals, screen.winfo_width()))

draw_graph(screen, shuffled_array)

sorted_array = comb_sort(shuffled_array)

draw_graph(screen, sorted_array, finished = True)

screen.mainloop()