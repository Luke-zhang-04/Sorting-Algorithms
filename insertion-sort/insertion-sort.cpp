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

std::vector<int> insertion_sort(std::vector<int> &array) {
    for (unsigned int i = 0; i < array.size(); i++) { //iterate through entire array
        int comparator = array[i]; //make comparison with this value
        int section = i - 1;

        while (section >= 0 && comparator < array[section]) {
            array[section+1] = array[section]; //if comparator <= array[section], move array[section] forward to make space
			section --;
        }
        array[section+1] = comparator; //insert comparator into the array, in its correct position
    }
    return array;
}

int main() {
    cout << "INSERTION SORT" << endl;
    std::vector<int> shuffled_array = random_sequence(0, 1000);

    printArray(shuffled_array);
    cout << endl;

    std::vector<int> sorted_array = insertion_sort(shuffled_array);
    printArray(sorted_array);
    return 0;
}