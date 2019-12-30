from time import sleep
from random import randint

def draw_graph(array, **kwargs):
    import __main__
    screen = __main__.screen
    screen.delete("all")

    try: time = kwargs["time"]
    except: time = 0.05
    
    yIncrement = (int(screen['height'])*0.975) / max(array)
    xIncrement = int(screen['width']) / len(array)
    try:
        if kwargs["finished"] == True: colour = "green" 
        else:
            colour = "black" if screen['background'] == "white" else "white"
            outline = "white" if colour == "black" else "black"
    except:
        colour = "black" if screen['background'] == "white" else "white"
        outline = "white" if colour == "black" else "black"


    for i in range(len(array)):
        screen.create_rectangle(i*xIncrement, int(screen['height']), (i+1)*xIncrement, int(screen['height']) - array[i]*yIncrement, fill = colour, outline = outline, width = 0.1)
    
    screen.update()

    if len(array) <= 100:
        sleep(time)
    else:
        __main__.counter += 1
        if __main__.counter % 10 == 0:
            if time != 0.05: sleep(time)
            else: sleep(0.001)