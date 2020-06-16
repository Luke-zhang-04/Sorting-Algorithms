# Counting Sort #

Counting sort is an integer sorting algorithm. It does not make any comparisons, but instead uses array indicies and other methods to sort an array.

Consider an array with `[4, 2, 6, 3, 1, 9, 5, 8, 7, 0, 3, 6, 1]`

1.  Take a count array to store the count of each unique object
    Index: 0  1  2  3  4  5  6  7  8  9
    Count: 1  2  1  2  1  1  2  1  1  1

2.  Modify the count array such that each element at each index 
    stores the sum of previous counts. 
    Index: 0  1  2  3  4  5  6  7  8  9
    Count: 1  3  4  6  7  8  10 11 12 13

    The modified count array indicates the position of each object in the output sequence.
 
3.  Output each object from the input sequence followed by decreasing its count by 1.
    Process the input data: `[4, 2, 6, 3, 1, 9, 5, 8, 7, 0, 3, 6, 1]`.
    The posiiton of 4 is 7 (as seen in point number 2)
    Put data 4 at index 7 in output.
    Decrease count by 1

    The posiiton of 2 is 4 (as seen in point number 2)
    Put data 2 at index 4 in output.
    Decrease count by 1

    And so on


Counting sort has a worst case time complexity of `O(n+k)` where, k is the range of input, and uses `O(n+k)` auxillary space in the worst case.
