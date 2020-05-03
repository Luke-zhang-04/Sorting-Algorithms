#include <iostream>
#include <vector>
#include <algorithm>
#include <random>
#include <tuple>

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

std::tuple<std::vector<int>, int> partition(std::vector<int> &array, int pt) {
    int swaps;
    while (true) {
        swaps = 0;
        for (unsigned int i = 0; i < pt; i++) { //start from left side of the pivot (if pivot point isn't 0)
			if (array[pt] < array[i]) { //swap if element is larger than pivot
				std::swap(array[i], array[pt]);
                pt = i;
                swaps ++;
                break;
			}
		}
		for (unsigned int i = array.size()-1; i > pt; i--) { //start from right side of the pivot
			if (array[pt] > array[i]) { //swap if element is smaller than pivot
				std::swap(array[i], array[pt]);
                pt = i;
                swaps ++;
                break;
			}
		}

		if (swaps == 0) { //pivot is in the correct spot
			break;
		}
    }
    return std::make_tuple(array, pt);
}

std::vector<int> combine(std::vector<int> &array1, std::vector<int> &array2) {
    std::vector<int> array = array1;
    array.insert(array.end(), array2.begin(), array2.end());
    return array;
}

std::vector<int> quick_sort(std::vector<int> &array) {
    if (array.size() > 1) {
        int half = array.size() / 2;
        int start = array[0];
        int middle = array[half];
        int end = array[array.size()-1];
        int pivot_pt;

        //choose pivot point (median of the first, middle, and last element) to avoid exponential running time
		if ((start > end && start < middle) || (start < end && start > middle)) {
			pivot_pt = 0;
		} else if ((end > start && end < middle) || (end < start && end > middle)) {
			pivot_pt = array.size()-1;
		} else {
			pivot_pt = half;
		}

        std::tuple<std::vector<int>, int> part = partition(array, pivot_pt);
        std::vector<int> partArray = std::get<0>(part);
        int pt = std::get<1>(part);

        //recursively quicksort the remaining subarrays
        std::vector<int> left = std::vector<int>(partArray.begin(), partArray.begin() + pt);
        std::vector<int> right = std::vector<int>(partArray.begin() + pt, partArray.end());
        std::vector<int> leftArr = quick_sort(left);
		std::vector<int> rightArr = quick_sort(right);

		array = combine(leftArr, rightArr); //combine left and right 
    }
    return array;
}

int main() {
    cout << "QUICK SORT" << endl;
    std::vector<int> shuffled_array = random_sequence(0, 1000);

    printArray(shuffled_array);
    cout << endl;

    std::vector<int> sorted_array = quick_sort(shuffled_array);
    printArray(sorted_array);
    return 0;
}