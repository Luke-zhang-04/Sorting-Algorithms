def counting_sort(array, exp):
    count = [0 for _ in range(max(array)+1)]

    for i in range(len(array)):
        count[digit(array[i], exp)] += 1

    for i in range(1, len(count)):
        count[i] += count[i-1]

    output = [None for _ in range(len(array))]

    for i in range(len(array)-1 , -1, -1):
        output[count[digit(array[i], exp)]-1] = array[i]
        count[digit(array[i], exp)] -= 1

    return output

def digit(number, n): #indexes integer without type conversion (e.g digit(253, 1) returns 5)
    return number // 10**n % 10

def seperate(array, digit):
    digit = 10 ** digit
    output = []
    counter = 0
    minimum = list(str(min(array)))
    for i in range(len(minimum[1:])):
        minimum[i+1] = "0"

    minimum = int(''.join(minimum))

    #for i in range(minimum+(10*digit), max(array)+(10*digit), 10*digit):
    for i in range(minimum+digit, max(array)+digit+1, digit):
        beg = counter

        while counter <= len(array):
            if counter == len(array) or array[counter] >= i:
                if counter-beg > 0: output.append(array[beg:counter])
                break
            counter += 1

    return output

def radix_sort(array, **kwargs):
    if ('lsd' in kwargs and kwargs['lsd']) or ('msd' in kwargs and not kwargs['msd']): #LSD radix sort 
        for i in range(len(str(max(array)))):
            array = counting_sort(array, i)

        return array

    elif ('msd' in kwargs and kwargs['msd']) or ('msd' in kwargs and not kwargs['msd']): #MSD radix sort
        digit = len(str(max(array)))-1 if kwargs['digit'] == None else kwargs['digit']
        output = []

        if digit >= 0:
            array = counting_sort(array, digit)
            array = seperate(array, digit)

            for i in array:
                output += radix_sort(i, msd = True, digit = digit-1)
        else: output = array

        return output
    
    else:
        return radix_sort(array, lsd = True) #LSD by default

if __name__ == "__main__":
    import os, sys #import shuffler from parent directory
    dir_path = os.path.dirname(os.path.realpath(__file__))
    parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
    sys.path.insert(0, parent_dir_path)
    from shuffler import random_sequence

    print("RADIX SORT")
    shuffled_array = random_sequence(0, 1000)

    print(shuffled_array, "\n")

    print("LSD")
    print(radix_sort(shuffled_array, lsd = True), "\n")
    
    print("MSD")
    print(radix_sort(shuffled_array, msd = True, digit = None))