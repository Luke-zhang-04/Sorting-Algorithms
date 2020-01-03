import os, sys #import animator from parent directory
dir_path = os.path.dirname(os.path.realpath(__file__))
parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
sys.path.insert(0, parent_dir_path)

from animator import draw_graph
from shuffler import random_sequence

from random import shuffle
from tkinter import Tk, Canvas
myInterface = Tk()
screen = Canvas(myInterface, width=1200, height=800, background = "black")
screen.pack()
screen.update()

#Base to use for sorting
base = 10
if len(sys.argv) > 1:
    try:
        base = int(sys.argv[1])
    except:
        pass

#Get the int log by dividing a bunch of times
def simpleLog(n,base):
    log = 0
    while n >= base:
        n//=base
        log += 1
    return log 

def radixSort(array,base):
    maxDig = 0
    for i in array: #finds how many times to do the sort
        maxDig = max(maxDig, simpleLog(i,base))

    for exp in range(maxDig+1): #for each digit
        limitInd = len(array) #Says what index corresponds to the unsorted part
        for d in range(base): #for each digits
            i = 0
            while i < limitInd: #go up to the limiting index
                while (array[i]//(base**exp))%base == d and i < limitInd: #while the current digit is the one to look for, push it to the back of the array and reduce limitInd
                    array.append(array.pop(i))
                    changed = [ind for ind in range(i,len(array))]
                    limitInd-=1
                    draw_graph(screen, array, current = i, changed = changed)
                i+=1 #means we are continuing on from the last index
    
    #This function could return something but the way it is implemented and how the array is passed in,
    #it'll change the values in the actual array. If you don't want this, you can simply copy everything
    #to a new array and return that at the end

numVals = 1000

shuffled_array = random_sequence(0, min(numVals, screen.winfo_width()))

draw_graph(screen, shuffled_array)

radixSort(shuffled_array,base)

draw_graph(screen, shuffled_array, finished = True)

screen.mainloop()