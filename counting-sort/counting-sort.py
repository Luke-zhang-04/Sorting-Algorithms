def counting_sort(array):
    count = [0 for _ in range(max(array)+1)]

    for i in range(len(array)):
        count[array[i]] += 1

    for i in range(1, len(count)):
        count[i] += count[i-1]

    output = [None for _ in range(len(array))]
    for i in array:
        output[count[i]-1] = i
        count[i] -= 1

    return output


if __name__ == "__main__":
    import os, sys #import shuffler from parent directory
    dir_path = os.path.dirname(os.path.realpath(__file__))
    parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
    sys.path.insert(0, parent_dir_path)
    from shuffler import random_sequence

    print("COUNTING SORT")

    shuffled_array = random_sequence(0, 1000)

    print(shuffled_array, "\n")

    print(counting_sort(shuffled_array))