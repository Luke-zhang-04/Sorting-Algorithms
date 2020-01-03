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

def cocktail_shaker_sort(array): #COCKTAIL SHAKER SORT
    for amt in range(len(array)//2 + len(array)%2): #iterate for half the length of the array plus one if odd
        swaps = 0
        section = len(array[amt:-amt]) if amt > 0 else len(array) #keep narrowing down the search

        for i in range(section-1): #iterate through the array
            if array[amt+i] > array[amt+i+1]: #swap if needed
                array[amt+i], array[amt+i+1] = array[amt+i+1], array[amt+i]
                swaps += 1
                draw_graph(array, time = 0.01)

        if swaps == 0: break #array is in order, this break statement could save time

        for i in range(section-1, 0, -1):
            if array[amt+i] < array[amt+i-1]: #swap if needed
                array[amt+i], array[amt+i-1] = array[amt+i-1], array[amt+i]
                swaps += 1
                draw_graph(array, time = 0.01)

        if swaps == 0: break #array is in order

    return array

shuffled_array = random_sequence(0, 100)

draw_graph(shuffled_array)

sorted_array = cocktail_shaker_sort(shuffled_array)

draw_graph(sorted_array, finished = True)

screen.mainloop() 