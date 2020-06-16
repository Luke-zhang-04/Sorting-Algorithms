# Bogo Sort #

Bogosort, also known as stupid sort is one of the most efficient sorting algorithms. It is often the sorting algorithm of choice for people who like very slow programs and recursion depth errors.

Bogo sort works by checking if the array is sorted, then randomly shuffling the array and checking again, and so on.

Because it checks for whether the array is sorted or not first, it has a best case time complexity of `O(1)`, and a worst case of `O(n!)`.
