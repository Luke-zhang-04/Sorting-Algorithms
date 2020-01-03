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
screen = Canvas(myInterface, width=1000, height=800, background = "black")
screen.pack()
screen.update()

def insertion_sort(array):
    for i in range(1, len(array)): #iterate through entire array
        comparator = array[i] #make comparison with this value
        for section in range(i-1, -2, -1): #iterate through array from i backwards
            if comparator > array[section]: #insert comparator into the array, in its correct position
                array[section+1] = comparator
                if section + 1 >= 0:
                    changed = [section + 1]
                else:
                    changed = []
                draw_graph(screen, array, current = section+1, changed = [section+1])
                break
            else:
                array[section+1] = array[section] #if comparator <= array[section], move array[section] forward to make space
                if section + 1 >= 0:
                    changed = [section + 1]
                else:
                    changed = []
                draw_graph(screen, array, current = section+1, changed = [section+1])
        else:
            array[section+1] = comparator #if loop wasn't broken, insert comparator in the right spot
            if section + 1 >= 0:
                changed = [section + 1]
            else:
                changed = []
            draw_graph(screen, array, current = section+1, changed = changed)

    return array

numVals = 100

shuffled_array = random_sequence(0, min(numVals, screen.winfo_width()))

draw_graph(screen, shuffled_array)

sorted_array = insertion_sort(shuffled_array)

draw_graph(screen, sorted_array, finished = True)

screen.mainloop()