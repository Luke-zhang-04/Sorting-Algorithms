#include <vector>
#include <iostream>

#include "../utils/slice.h"

#include "./main.h"

/**
 * Merges two vectors together
 * @param array1 - first array to merge
 * @param array2 - second array to merge
 * @returns merged array
 */
std::vector<int> merge(std::vector<int> array1, std::vector<int> array2) {
    std::vector<int> array;
    int first = 0;
    int second = 0;

    std::cout << "BOOMER";

    while (first < array1.size() && second < array2.size()) {
        if (array1[first] > array2[second]) {
            array.push_back(array2[second]);
			second++;
		} else if (array1[first] < array2[second]) {
            array.push_back(array1[first]);
			first++;
        } else {
            array.push_back(array1[first]);
			first++;
            array.push_back(array2[second]);
			second++;
        }

    }

    while (first < array1.size()) {
		array.push_back(array1[first]);
        first++;
	}

	while (second < array2.size()) {
        array.push_back(array2[second]);
		second++;
	}

	return array;
}

/**
 * Main mergesort function
 * @param array - array to sort
 * @returns sorted vector; does not sort in-place
 */
std::vector<int> mergeSort(std::vector<int> &array) {
    if (array.size() > 1) {
        // Split array into two halves
        const int half = array.size() / 2;
        std::vector<int> left = slice(array, 0, half - 1);
        std::vector<int> right = slice(array, half, array.size() - 1);

        // Recursively call each merge sort for each half until array size is 1
        left = mergeSort(left);
        right = mergeSort(right);

        // Merge left and right sides
        array = merge(left, right);
    }
    return array;
}
