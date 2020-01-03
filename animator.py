from time import sleep
from random import randint

rects = []

red = "#E74C3C"
green = "#0FC818"

prev = None


def draw_graph(screen, array, finishedInd = -1, time = None, current = None, finished = False, changed = None):
    height = screen.winfo_height()
    width = screen.winfo_width()

    if len(array) >= width:
        xIncrement = 1
    else:
        #increments for each bar, and their resective heights
        xIncrement = width / len(array)
    
    yIncrement = (height*0.975) / max(array)

    dx = 1 if xIncrement > 1 else 0

    
    colour = "black" if screen['background'] == "white" else "white"
    outline = "white" if colour == "black" else "black"

    if changed is None or len(rects) < len(array):
        changed = [i for i in range(len(array))]

    for i in changed: #drawing the rectangles themselves
        if i < finishedInd:
            continue

        temp = colour

        if i == current:
            colour = red
        if i == finishedInd:
            colour = green

        if len(rects) > i:
            screen.coords(rects[i],i*xIncrement, height, (i+dx)*xIncrement, height - array[i]*yIncrement)
        else:
            r = screen.create_rectangle(i*xIncrement, height, (i+dx)*xIncrement, height - array[i]*yIncrement, fill = colour, outline = outline, width = 0.1)
            rects.append(r)

        screen.itemconfig(rects[i],fill = colour)
        if xIncrement > 2:
            screen.itemconfig(rects[i],outline = outline)
        else:
            screen.itemconfig(rects[i],outline = colour)
        colour = temp
    
    global prev
    if prev != current and not prev is None:
        screen.itemconfig(rects[prev],fill = colour)
        if xIncrement > 2:
            screen.itemconfig(rects[prev],outline = outline)
        else:
            screen.itemconfig(rects[prev],outline = colour)
    screen.update()

    prev = current

    if not time is None:
        sleep(time)
    
    if finished:
        for i in range(len(array)):
            draw_graph(screen, array,finishedInd=i, changed=[i])

