import os, sys #import animator from parent directory
dir_path = os.path.dirname(os.path.realpath(__file__))
parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
sys.path.insert(0, parent_dir_path)

from animator2 import draw_graph
from shuffler import random_sequence
counter = 0

from tkinter import Tk, Canvas
myInterface = Tk()
screen = Canvas(myInterface, width=1000, height=800, background = "black")
screen.pack()
screen.update()

def bubble_sort(array): #BUBBLE SORT
    for amt in range(len(array)):
        swaps = 0
        for i in range(len(array)-1-amt): #iterate through the array
            if array[i] > array[i + 1]: #swap if needed
                array[i], array[i+1] = array[i+1], array[i]
                swaps += 1
                draw_graph(screen, array, current = i+1, changed = [i,i+1])
        if swaps == 0: break #array is in order

    return array

numVals = 50

shuffled_array = random_sequence(0, min(numVals, screen.winfo_width()))

draw_graph(screen, shuffled_array)

sorted_array = bubble_sort(shuffled_array)

draw_graph(screen, sorted_array, finished = True)

screen.mainloop()