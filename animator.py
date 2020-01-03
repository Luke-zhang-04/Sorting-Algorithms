from time import sleep
from random import randint

rects = {}

def draw_graph(screen, array, finishedInd = -1, time = None, current = None, finished = False):
    height = screen.winfo_height()
    width = screen.winfo_width()

    #increments for each bar, and their resective heights
    yIncrement = (height*0.975) / max(array)
    xIncrement = width / len(array)

    red = "#E74C3C"

    # if finished:
    #     colour = "#0FC818" 
    #     outline = "black"
    # else:
    colour = "black" if screen['background'] == "white" else "white"
    outline = "white" if colour == "black" else "black"

    for i in range(len(array)): #drawing the rectangles themselves
        if i < finishedInd:
            continue
        temp = colour
        if i == current:
            colour = red
        if i == finishedInd:
            colour = "#0FC818"
        val = array[i]
        if val in rects:
            screen.coords(rects[val],i*xIncrement, height, (i+1)*xIncrement, height - array[i]*yIncrement)
        else:
            rects[val] =  screen.create_rectangle(i*xIncrement, height, (i+1)*xIncrement, height - array[i]*yIncrement, fill = colour, outline = outline, width = 0.1)
        screen.itemconfig(rects[val],fill = colour)
        
        colour = temp
    screen.update()

    if not time is None:
        sleep(time)
    
    if finished:
        for i in range(len(array)):
            draw_graph(screen, array,finishedInd=i)

