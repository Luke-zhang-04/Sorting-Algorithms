#include <vector>

#include "./main.h"

/**
 * Returns the smaller of two numbers
 * @param first - first number to compare
 * @param second - second number to compare
 * @returns smallest number
 */
int smaller(int first, int second) {
    if (first < second) {
        return first;
    }
    
    return second;
}

/**
 * Main insertionsort algorithm
 * @param array - array to sort
 * @param start - start of array segment
 * @param end - end of array segment
 * @returns void; sorts in-place
 */
void insertionSort(std::vector<int> &array, int start, int end) {
    for (unsigned int i = start + 1; i < end; i++) { // Iterate through entire array segment
        int comparator = array[i]; // Make comparison with this value
        int section = i - 1;

        while (section >= start && comparator < array[section]) {
            array[section+1] = array[section]; // If comparator <= array[section], move array[section] forward to make space
			section --;
        }
        array[section + 1] = comparator; // Insert comparator into the array, in its correct position
    }
}

/**
 * Merges an array with indexes start, middle, and end in place
 * Merges arrays array[start:mid] and array[mid:end]
 * @param  array main array
 * @param start - starting point of segment to be merged
 * @param mid - middle point of segment to be merged
 * @param end - end point of segment to be merged
 * @returns void; merges in-place
 */
void mergeInPlace(std::vector<int> &array, int start, int mid, int end) {
    int start2 = mid + 1;

    if (array[mid] <= array[start2]) {
        return;
    }

    while (start <= mid && start2 <= end) {
        if (array[start] <= array[start2]) {
            start ++;
        } else {
            int value = array[start2];
            int index = start2;

            while (index != start) {
                array[index] = array[index - 1];
                index --;
            }

            array[start] = value;

            start ++;
            mid ++;
            start2 ++;
        }
    }
}

/**
 * Main timsort function
 * @param array - array to sort
 * @param run - blocks to seperated into; default to 32. Best if is a power of 2
 * @returns void; sorts in-place
 */
void timSort(std::vector<int> &array, int run) {
    // Run insertion sort
    for (unsigned int i = 0; i < array.size(); i += run) {
        insertionSort(array, i, smaller(i + run, array.size()));
    }

    // Run merges
    int size = run;
    while (size < array.size()) {
        for (unsigned int left = 0; left < array.size(); left += size * 2) {
            const int mid = left + size - 1;
            const int right = smaller((left + 2 * size - 2), (array.size() - 2));

            mergeInPlace(array, left, mid, right);
        }

        size *= 2;
    }
}
