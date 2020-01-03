from time import sleep
from random import randint

def draw_graph(screen, array, **kwargs):
    screen.delete("all") #clear the canvas

    if "time" in kwargs: 
        time = kwargs["time"] #check if time specified
    else: time = None

    # if "decrease_time" in kwargs and kwargs["decrease_time"]: decrease_time = True
    # else: decrease_time = False

    # if "decrease" in kwargs and decrease_time:
    #     decrease = kwargs["decrease"]
    # else: decrease = 10

    if "current" in kwargs:
        current = kwargs["current"]
    else:
        current = None

    height = screen.winfo_height()
    width = screen.winfo_width()

    
    #increments for each bar, and their resective heights
    yIncrement = (height*0.975) / max(array)
    xIncrement = width / len(array)

    red = "#E74C3C"

    if "finished" in kwargs: #get colours
        if kwargs["finished"]:
            colour = "#0FC818" 
            outline = "black"
        else:
            colour = "black" if screen['background'] == "white" else "white"
            outline = "white" if colour == "black" else "black"
    else:
        colour = "black" if screen['background'] == "white" else "white"
        outline = "white" if colour == "black" else "black"


    for i in range(len(array)): #drawing the rectangles themselves
        temp = colour
        if i == current:
            colour = red
        screen.create_rectangle(i*xIncrement, height, (i+1)*xIncrement, height - array[i]*yIncrement, fill = colour, outline = outline, width = 0.1)
        colour = temp
    screen.update()

    if not time is None:
        sleep(time)
