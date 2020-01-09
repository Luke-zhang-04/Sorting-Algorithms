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

text = None

def shell_sort(array):
    global text

    length = len(array)
    gap = length//2
    text = screen.create_text(50, 50, text = "gap = " + str(gap), fill = 'white')
    while gap >= 1:
        for i in range(gap, length): #iterate through array, starting from gap
            comparator = array[i] #make comparisons with this

            if length > 250:
                if i % 10 == 0:
                    draw_graph(screen, array, current = i, changed = [i], time = 0.001)
            else: draw_graph(screen, array, current = i, changed = [i])

            for x in range(i, gap-2, -gap): #iterate through array with gap as the step
                if array[x-gap] <= comparator: break #break when correct spot is found
                else: array[x] = array[x-gap] #otherwise, move elements forward to make space
                if length > 250:
                    if x % 20 == 0:
                        draw_graph(screen, array, current = x, time = 0.0005)
                else: draw_graph(screen, array, current = x)
            array[x] = comparator #insert comparator in the correct spot
            
            if length > 250:
                if x % 10 == 0:
                    draw_graph(screen, array, current = x, time = 0.0005)
            else: draw_graph(screen, array, current = x)

        gap //= 2 #increment the gap

        screen.delete(text)
        text = screen.create_text(50, 50, text = "gap = " + str(gap), fill = 'white')

    draw_graph(screen, array)

    return array

numVals = 250

shuffled_array = random_sequence(0, min(numVals, screen.winfo_width()))

screen.update()

draw_graph(screen, shuffled_array)

sorted_array = shell_sort(shuffled_array)

screen.delete(text)
text = screen.create_text(50, 50, text = "finished", fill = 'white')

draw_graph(screen, sorted_array, finished = True)

screen.mainloop()