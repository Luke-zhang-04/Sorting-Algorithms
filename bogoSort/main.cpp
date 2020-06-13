#include <vector>
#include <algorithm>
#include <random>

#include "main.h"
#include "../utils/utils.h"

/**
 * Check if array is sorted
 * @param array - pointer to desired array
 * @returns boolean true if sorted
 */
bool issorted(std::vector<int> &array) {
    for (unsigned int i = 0; i < array.size() - 1; i++) {
        if (array[i + 1] < array[i]) {
            return false;
        }
    }

    return true;
}

/**
 * Main bogosort algorithm
 * @param array - pointer to shuffled array
 * @returns shuffled array (maybe, or recursion error)
 */
void bogoSort(std::vector<int> &array) {
    while (!issorted(array)){
        util::shuffle(array);
    }
}
