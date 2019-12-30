def cocktail_shaker_sort(array): #COCKTAIL SHAKER SORT
    for amt in range(len(array)//2 + len(array)%2): #iterate for half the length of the array plus one if odd
        swaps = 0
        section = len(array[amt:-amt]) if amt > 0 else len(array) #keep narrowing down the search

        for i in range(section-1): #iterate through the array
            if array[amt+i] > array[amt+i+1]: #swap if needed
                array[amt+i], array[amt+i+1] = array[amt+i+1], array[amt+i]
                swaps += 1

        if swaps == 0: break #array is in order, this break statement could save time

        for i in range(section-1, 0, -1):
            if array[amt+i] < array[amt+i-1]: #swap if needed
                array[amt+i], array[amt+i-1] = array[amt+i-1], array[amt+i]
                swaps += 1

        if swaps == 0: break #array is in order

    return array


if __name__ == "__main__":
    import os, sys #import shuffler from parent directory
    dir_path = os.path.dirname(os.path.realpath(__file__))
    parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
    sys.path.insert(0, parent_dir_path)
    from shuffler import random_sequence

    print("COCKTAIL SHAKER SORT")

    shuffled_array = random_sequence(0, 1000)

    print(shuffled_array, "\n")

    print(cocktail_shaker_sort(shuffled_array))