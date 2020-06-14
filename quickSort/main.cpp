#include <vector>

#include "./main.h"

int partition(std::vector<int> &array, int left, int right, int pt) {
    int swaps; // Keep track of the swaps made

    while (true) {
        swaps = 0;

        for (unsigned int i = left; i < pt; i++) { // Start from left side of the pivot (if pivot point isn't 0)
			if (array[pt] < array[i]) { // Swap if element is larger than pivot
				std::swap(array[i], array[pt]);
                pt = i;
                swaps ++;
                break;
			}
		}

		for (unsigned int i = right; i > pt; i--) { // Start from right side of the pivot
			if (array[pt] > array[i]) { // Swap if element is smaller than pivot
				std::swap(array[i], array[pt]);
                pt = i;
                swaps ++;
                break;
			}
		}

		if (swaps == 0) { //pivot is in the correct spot
			break;
		}
    }

    return pt;
}

/**
 * Main quicksort function
 * @param array - array to sort
 * @param left - start of array segment to sort, leave 0 for whole array
 * @param right - end of array segment to sort, leave -1 for whole aray
 * @returns void; sorts in-place
 */
void quickSort(std::vector<int> &array, int left, int right) {
    if (left == 0 && right == -1) {
        right = array.size() - 1;
    }

    if (left < right - 1) {
        int half = (right + left) / 2;
        int start = array[left];
        int middle = array[half];
        int end = array[right];
        int pivotPt;

        // Choose pivot point (median of the first, middle, and last element) to avoid exponential running time
		if ((start > end && start < middle) || (start < end && start > middle)) {
			pivotPt = left;
		} else if ((end > start && end < middle) || (end < start && end > middle)) {
			pivotPt = right - 1;
		} else {
			pivotPt = half;
		}

        // Move pivot to right spot, move elements onto the correct side of the pivot, and get the new pivot point
        int pt = partition (
            array,
            left,
            right,
            pivotPt
        );

        

        // Recursively quicksort the remaining subarrays
        quickSort(array, pt, right);
        quickSort(array, left, pt);
    }
}