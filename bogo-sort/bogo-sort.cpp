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

bool is_sorted(std::vector<int> &array) {
    for (unsigned int i = 0; i < array.size()-1; i++) {
        if (array[i+1] < array[i]) {
            return false;
        }
    }
    return true;
}

std::vector<int> bogo_sort(std::vector<int> &array) {
    std::shuffle(std::begin(array), std::end(array), std::default_random_engine());
    if (is_sorted(array)) {
        return array;
    } else {
        return bogo_sort(array);
    }
}

int main() {
    cout << "BOGO SORT AKA STUPID SORT" << endl;
    std::vector<int> shuffled_array = random_sequence(0, 10);

    printArray(shuffled_array);
    cout << endl;

    std::vector<int> sorted_array = bogo_sort(shuffled_array);
    printArray(sorted_array);
    return 0;
}