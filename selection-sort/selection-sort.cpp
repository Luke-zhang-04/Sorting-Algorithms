#include <iostream>
#include <vector>
#include <algorithm>
#include <random>

using std::cout;
using std::endl;

std::vector<int> random_sequence(int minimum, int maximum) { //returns a shuffled array
    std::vector<int> array;
    for (int i = minimum; i < maximum; i++) { //create array and append numbers to it
        array.push_back(i);
    }
    std::shuffle(std::begin(array), std::end(array), std::default_random_engine()); //shuffle the array
    return array;
}

void printArray(std::vector<int> &array) {
    std::cout << "[";
    for (unsigned int i = 0; i < array.size()-1; i++) {
        std::cout << std::to_string(array[i]) << ", ";
    }
    std::cout << std::to_string(array[array.size()-1]) << "]" << std::endl;
}

int min(std::vector<int> &array) {
    int minimum = array[0];
    for (const int &i : array) {
        if (i < minimum) {
            minimum = i;
        }
    }
    return minimum;
}

int indexOf(std::vector<int> &array, int search) {
    for (unsigned int i = 0; i < array.size(); i++) {
        if (array[i] == search) {
            return i;
        }
    }
    return -1;
}

std::vector<int> selection_sort(std::vector<int> &array) {
    int ind;
    std::vector<int> slice;

    for (unsigned int i = 0; i < array.size(); i++) {
        slice = std::vector<int>(array.begin() + i, array.begin() + array.size());
        ind = indexOf(array, min(slice));
		std::swap(array[ind], array[i]);
    }
    return array;
}

int main() {
    cout << "SELECTION SORT" << endl;
    std::vector<int> shuffled_array = random_sequence(0, 1000);

    printArray(shuffled_array);
    cout << endl;

    std::vector<int> sorted_array = selection_sort(shuffled_array);
    printArray(sorted_array);
    return 0;
}