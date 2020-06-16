# Quicksort #

Quicksort (sometimes called partition-exchange sort) is an efficient sorting algorithm. When implemented well, it can be about two or three times faster than its main competitors, merge sort and heapsort.

Quicksort works by selecting a pivot (in this case, the median of the first, middle, and last elements in an array), and moving array elements on the correct side of the pivot, and the recursively repeating the process until each side of the pivot is of length 1.

Quicksort has a worst case time complexity of `O(n^2)`, best case time complexity of `O(n log n)`, and an average time complexity of `O(n log n)`
