#include <vector>

#include "main.h"
#include "../utils/max.h"

/**
 * Main countingsort function
 * @param array - array to sort
 * @returns void; sorts in-place
 */
void countingSort(std::vector<int> &array) {
    std::vector<int> count;
    std::vector<int> output; //create output array

    // Fill arrays
    for (unsigned int i = 0; i < max(array) + 1; i++) {
        count.push_back(0);
    } for (unsigned int i = 0; i < array.size(); i++) {
        count[array[i]]++;
    }    

    // Iterate through given array, and add 1 to the index which is the value of array[i]
    for (unsigned int i = 1; i < count.size(); i++) {
        count[i] += count[i-1];
    }

    // Go through array and add previous index's value to the current index
    for (unsigned int i = 0; i < array.size(); i++) {
        output.push_back(0);
    }

    // Iterate through array and plug in sorted values
    for (const int &i : array) {
        output[count[i]-1] = i;
        count[i]--;
    }

    array = output;
}
