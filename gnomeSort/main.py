def gnomeSort(array: [ list ]):
    """Main gnome sort function"""
    i = 1
    while i < len(array): #Iterate until end of array
        if array[i] > array[i-1] or i == 0: #move "gnome" forward if "pots" in  correct order
            i += 1
        else:
            array[i], array[i-1] = array[i-1], array[i] #swap if needed, go back
            i -= 1


if __name__ == "__main__":
    try:
        from utils import randomSequence
    except ModuleNotFoundError:
        import os, sys #import shuffler from parent directory
        dir_path = os.path.dirname(os.path.realpath(__file__))
        parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
        sys.path.insert(0, parent_dir_path)
        from utils import randomSequence

    print("GNOME SORT")

    shuffledArray = randomSequence(0, 1000)

    print(shuffledArray, "\n")

    gnomeSort(shuffledArray)

    print(shuffledArray)