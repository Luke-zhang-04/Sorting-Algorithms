def bubble_sort(array): #BUBBLE SORT
    while True:
        swaps = 0
        for i in range(len(array)-1): #iterate through the array
            if array[i] > array[i + 1]: #swap if needed
                array[i], array[i+1] = array[i+1], array[i]
                swaps += 1
        if swaps == 0: break #array is in order
        
    return array


if __name__ == "__main__":
    from shuffler import random_sequence

    shuffled_array = random_sequence(0, 1000)

    print(shuffled_array, "\n")

    print(bubble_sort(shuffled_array))