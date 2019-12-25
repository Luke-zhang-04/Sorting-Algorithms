def gnome_sort(array): #GNOME SORT
    i = 1
    while i < len(array): #Iterate until end of array
        if array[i] > array[i-1] or i == 0: #move "gnome" forward if "pots" in  correct order
            i += 1
        else:
            array[i], array[i-1] = array[i-1], array[i] #swap if needed, go back
            i -= 1

    return array


if __name__ == "__main__":
    import os, sys #import shuffler from parent directory
    dir_path = os.path.dirname(os.path.realpath(__file__))
    parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
    sys.path.insert(0, parent_dir_path)
    from shuffler import random_sequence

    print("GNOME SORT")

    shuffled_array = random_sequence(0, 10)

    print(shuffled_array, "\n")

    print(gnome_sort(shuffled_array))