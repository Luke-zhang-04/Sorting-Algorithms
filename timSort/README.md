# Tim Sort #

Tim sort is a hybrid between [merge sort](https://github.com/Luke-zhang-04/Sorting-Algorithms/tree/master/mergeSort) and [insertions sort](https://github.com/Luke-zhang-04/Sorting-Algorithms/tree/master/insertionSort).

Tim sort works by splitting the array into groups called "runs". Within these runs, insertion sort is performed. After all segments have been sorted in this way, they are merged with the merge function from merge sort. Because merging is most efficient when the number of runs is equal to, or slightly less than, a power of two, and notably less efficient when the number of runs is slightly more than a power of two, Timsort chooses minrun to try to ensure the former condition. Minrun is chosen from the range 32 to 64 inclusive. 

Tim sort has a worst case and average time complexity of `O(n log n)`, and a best case time complexity of `O(n)`. It has a worst case space complexity of `O(n)`
