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

def insertion_sort(array):
    for i in range(1, len(array)): #iterate through entire array
        comparator = array[i] #make comparison with this value
        for section in range(i-1, -2, -1): #iterate through array from i backwards
            if comparator > array[section]: #insert comparator into the array, in its correct position
                array[section+1] = comparator
                break
            else: array[section+1] = array[section] #if comparator <= array[section], move array[section] forward to make space
        else: array[section+1] = comparator #if loop wasn't broken, insert comparator in the right spot
    return array

def merge(array1, array2): #merge two arrays
    array = [] #merged array
    first = second = 0 #starting points

    while first < len(array1) and second < len(array2):
        if array1[first] > array2[second]:
            array.append(array2[second])
            second += 1
        elif array1[first] < array2[second]:
            array.append(array1[first])
            first += 1
        else:
            array.append(array1[first])
            first += 1
            array.append(array2[second])
            second += 1
    
    while first < len(array1):
        array.append(array1[first])
        first += 1

    while second < len(array2):
        array.append(array2[second])
        second += 1

    return array

def tim_sort(array, run = 32):
    parts = []

    for i in range(0, len(array), run):
        parts.append(array[i:i+run])
    
    for index, elem in enumerate(parts):
        parts[index] = insertion_sort(elem)
    
    while len(parts) > 1:
        array = []
        for i in range(0, len(parts), 2):
            array.append(merge(parts[i], parts[i+1]))
        parts = array

    return parts[0]

numVals = 250

shuffled_array = random_sequence(0, min(numVals, screen.winfo_width()))

screen.update()

draw_graph(screen, shuffled_array)

sorted_array = tim_sort(shuffled_array)

draw_graph(screen, sorted_array, finished = True)

screen.mainloop()