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

std::vector<int> slice(std::vector<int> const &v, int m, int n) {
   auto first = v.begin() + m;
   auto last = v.begin() + n + 1;
   std::vector<int> vector(first, last);
   return vector;
}

std::vector<int> merge(std::vector<int> array1, std::vector<int> array2) {
    std::vector<int> array;
    int first = 0;
    int second = 0;

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

std::vector<int> merge_sort(std::vector<int> &array) {
    if (array.size() > 1) {
        //split array into two halves
        int half = array.size() / 2;
        std::vector<int> left = slice(array, 0, half-1);
        std::vector<int> right = slice(array, half, array.size()-1);

        //recursively call each merge sort for each half until array size is 1
        left = merge_sort(left);
        right = merge_sort(right);

        //merge left and right sides
        array = merge(left, right);
    }
    return array;
}

int main() {
    cout << "MERGE SORT" << endl;
    std::vector<int> shuffled_array = random_sequence(0, 1000);

    printArray(shuffled_array);
    cout << endl;

    std::vector<int> sorted_array = merge_sort(shuffled_array);
    printArray(sorted_array);
    return 0;
}