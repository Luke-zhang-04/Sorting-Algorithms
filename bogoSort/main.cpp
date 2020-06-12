#include <iostream>
#include <vector>
#include <algorithm>
#include <random>

#include "../utils/utils.h"

using std::cout;
using std::endl;

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
std::vector<int> bogoSort(std::vector<int> &array) {
    std::shuffle(std::begin(array), std::end(array), std::default_random_engine());

    return issorted(array) ? array : bogoSort(array);
}

int main() {
    cout << "BOGO SORT AKA STUPID SORT" << endl;
    std::vector<int> shuffled_array = randomSequenceUtil(0, 10);

    printArrayUtil(shuffled_array);
    cout << endl;

    std::vector<int> sorted_array = !issorted(shuffled_array) ? bogoSort(shuffled_array) : shuffled_array;
    printArrayUtil(sorted_array);
    return 0;
}
