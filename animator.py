from time import sleep
from random import randint

def draw_graph(array, **kwargs):
    import __main__
    screen = __main__.screen
    screen.delete("all") #clear the canvas

    if "time" in kwargs: time = kwargs["time"] #check if time specified
    else: time = 0.05

    if "decrease_time" in kwargs and kwargs["decrease_time"]: decrease_time = True
    else: decrease_time = False

    if "decrease" in kwargs and decrease_time:
        decrease = kwargs["decrease"]
    else: decrease = 10
    
    #increments for each bar, and their resective heights
    yIncrement = (int(screen['height'])*0.975) / max(array)
    xIncrement = int(screen['width']) / len(array)

    if "finished" in kwargs: #get colours
        if kwargs["finished"]:
            colour = "green" 
            outline = "black"
        else:
            colour = "black" if screen['background'] == "white" else "white"
            outline = "white" if colour == "black" else "black"
    else:
        colour = "black" if screen['background'] == "white" else "white"
        outline = "white" if colour == "black" else "black"


    for i in range(len(array)): #drawing the rectangles themselves
        screen.create_rectangle(i*xIncrement, int(screen['height']), (i+1)*xIncrement, int(screen['height']) - array[i]*yIncrement, fill = colour, outline = outline, width = 0.1)
    
    screen.update()

    #determine sleep time
    if len(array) <= 100 and not decrease_time:
        sleep(time)

    elif len(array) <= 100 and decrease_time:
        __main__.counter += 1
        if __main__.counter % decrease == 0:
            sleep(time)

    elif decrease_time:
        __main__.counter += 1
        if __main__.counter % decrease == 0:
            if time != 0.05: sleep(time)
            else: sleep(0.001)

    elif not decrease_time:
        sleep(time)