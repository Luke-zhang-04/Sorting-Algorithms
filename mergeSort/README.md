# Merge Sort #

Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves.

Merge sort works by recursively splitting the array into halves, until each halve is of length 1, before performing a "merge" on the two halves, whereby each array is iterated through and merged in the correct order. This process is then continued with the next set of arrays with length 1, before the two arrays are merged together again, and so on.

Merge sort has a best, average, and worst case time complexity of `O(n log n)`. It has a worst case memory complexity of `O(n)`, with `O(1)` auxillary memory.
