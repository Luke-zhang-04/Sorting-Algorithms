#include <vector>

#include "./main.h"
#include "../utils/max.h"

int indexOf(std::vector<int> &array, int search) {
    for (unsigned int i = 0; i < array.size(); i++) {
        if (array[i] == search) {
            return i;
        }
    }

    return -1;
}

void selectionSort(std::vector<int> &array) {
    int ind;
    std::vector<int> slice;

    for (unsigned int i = 0; i < array.size(); i++) {
        slice = std::vector<int>(array.begin() + i, array.begin() + array.size());
        ind = indexOf(array, min(slice));
		std::swap(array[ind], array[i]);
    }

}
