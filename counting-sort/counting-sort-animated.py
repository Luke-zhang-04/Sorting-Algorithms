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

def counting_sort(array):
    count = [0 for _ in range(max(array)+1)] #create array with zeros

    for i in range(len(array)): #iterate through given array, and add 1 to the index which is the value of array[i]
        count[array[i]] += 1

    for i in range(1, len(count)): #go through array and add previous index's value to the current index
        count[i] += count[i-1]

    output = [None for _ in range(len(array))] #create output array with none types
    draw_output = [0 for _ in range(len(array))] #create draw output array with zeros
    for i in array: #iterate through array and turn none types and zeros into sorted values
        output[count[i]-1] = i
        draw_output[count[i]-1] = i
        count[i] -= 1
        draw_graph(draw_output)

    return output

shuffled_array = random_sequence(0, 100)

draw_graph(shuffled_array, time = 1)

sorted_array = counting_sort(shuffled_array)

draw_graph(sorted_array, finished = True)

screen.mainloop() 