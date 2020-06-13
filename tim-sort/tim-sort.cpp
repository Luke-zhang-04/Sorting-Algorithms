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

std::vector<int> tim_sort(std::vector<int> &array, int run) {
    std::vector<std::vector<int>> parts;
    for (unsigned int i = 0; i < array.size(); i += run) {
        parts.push_back(std::vector<int>(array.begin() + i, array.begin() + i + run));
    }
    
    for (unsigned int i = 0; i < parts.size(); i++) {
        parts[i] = insertion_sort(parts[i]);
    }

    while (parts.size() > 1) {
        std::vector<std::vector<int>> out;
        for (unsigned int i = 0; i < parts.size(); i += 2) {
            out.push_back(merge(parts[i], parts[i+1]));
        }
        parts = out;
    }
    return parts[0];
}

int main() {
    cout << "TIM SORT" << endl;
    std::vector<int> shuffled_array = random_sequence(0, 1000);

    printArray(shuffled_array);
    cout << endl;

    std::vector<int> sorted_array = tim_sort(shuffled_array, 32);
    printArray(sorted_array);
    return 0;
}