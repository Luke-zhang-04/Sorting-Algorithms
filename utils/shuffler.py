from random import shuffle
from typing import List, Union


def randomSequence(*args: Union[List[int], range]) -> List[int]:
    """Returns a shuffled array\n
    args can be either stop, start stop, and start stop step, or a range object
    """
    if isinstance(args[0], int):
        if (len(args)) == 1:
            array = [i for i in range(0, args[0])]
        elif len(args) == 2:
            array = [i for i in range(args[0], args[1])]
        elif len(args) == 3:
            array = [i for i in range(args[0], args[1], args[2])]
    elif isinstance(args[0], range):
        array = [i for i in args[0]]

    shuffle(array)

    return array
