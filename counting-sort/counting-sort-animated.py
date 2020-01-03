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

def counting_sort(array): #BUBBLE SORT
    count = [0 for _ in range(max(array)+1)]

    for i in range(len(array)):
        count[array[i]] += 1

    for i in range(1, len(count)):
        count[i] += count[i-1]

    output = [None for _ in range(len(array))]
    draw_output = [0 for _ in range(len(array))]
    for i in array:
        output[count[i]-1] = i
        draw_output[count[i]-1] = i
        count[i] -= 1
        draw_graph(screen, draw_output, current = i, time = 0.03,changed=[i])

    return output

shuffled_array = random_sequence(0, 100)

draw_graph(screen, shuffled_array)

sorted_array = counting_sort(shuffled_array)

draw_graph(screen, sorted_array, finished = True)

screen.mainloop()