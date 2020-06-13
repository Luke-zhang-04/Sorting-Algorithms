#include <vector>
#include <iostream>
using namespace std;

#include "../utils/slice.h"

#include "./main.h"

/**
 * Merges an array with indexes start, middle, and end in place
 * Merges arrays array[start:mid] and array[mid:end]
 * @param  array main array
 * @param start - starting point of segment to be merged
 * @param mid - middle point of segment to be merged
 * @param end - end point of segment to be merged
 * @returns void; merges in-place
 */
void merge(std::vector<int> &array, int start, int mid, int end) {
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
 * Main mergesort function
 * @param array - array to sort
 * @param left - beginning of segment to be sorted (pass in 0 if sorting entire array)
 * @param right - end of segment to be sorted (pass in array.size() - 1 if sorting entire array)
 * @returns void; sorts in-place
 */
void mergeSortInPlace(std::vector<int> &array, int left, int right) {
    std::cout << "WTF BRUH";
    if (right > left) {
        // Split array into halves
        int half = left + (right - left) / 2; // Halfway point

        mergeSortInPlace(array, left, half);
        mergeSortInPlace(array, half + 1, right);

        // Merge left and right sides
        merge(array, left, half, right);
    }
}
