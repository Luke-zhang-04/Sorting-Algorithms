#include <iostream>
#include <vector>
#include <algorithm>
#include <random>
#include <string>

using std::cout;
using std::endl;
using std::string;

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
    int smallest = array[0];
    for (const int &i : array) {
        if (i < smallest) {
            smallest = i;
        }
    }
    return smallest;
}

int max(std::vector<int> &array) {
    int largest = array[0];
    for (const int &i : array) {
        if (i > largest) {
            largest = i;
        }
    }
    return largest;
}

int digit(int number, int n) {
    int res = number / int(pow(10, n)) % 10;
    return res;
}

std::string charsToString(std::vector<char> &chars) {
    int i; 
    std::string s = ""; 
    for (i = 0; i < chars.size(); i++) { 
        s = s + chars[i];
    } 
    return s; 
}

std::vector<char> list(std::string str) {
    std::vector<char> res;
    for (const char &i : str) {
        res.push_back(i);
    }
    return res;
}

std::vector<std::vector<int>> seperate(std::vector<int> &array, int digit) {
    digit = int(pow(10, digit));
    std::vector<std::vector<int>> output;
    unsigned int counter = 0;
    std::vector<char> smallest = list(std::to_string(min(array)));
    std::vector<char> slice = std::vector<char>(smallest.begin() + 1, smallest.end());

    for (unsigned int i = 0; i < slice.size(); i++) {
        smallest[i+1] = '0';
    }

    int minimum = std::stoi(charsToString(smallest));
    int beg;

    for (unsigned int i = minimum+digit; i < max(array)+digit+1; i += digit) {
        beg = counter;

		while (counter <= array.size()) {
			if (counter == array.size() || array[counter] >= i) {
				if (counter-beg > 0) {
                    std::vector<int> part = std::vector<int>(array.begin() + beg, array.begin() + counter);
					output.push_back(part);
				}
                break;
			}
			counter++;
		}
    }
    return output;
}

std::vector<int> counting_sort(std::vector<int> &array, int exp) {
    std::vector<int> count;
    std::vector<int> output;
    for (unsigned int i = 0; i < max(array) + 1; i++) {
        count.push_back(0);
    }
    for (unsigned int i = 0; i < array.size(); i++) {
        output.push_back(0);
    }

    for (unsigned int i = 0; i < array.size(); i++) {
        count[digit(array[i], exp)]++;
    }    

    for (unsigned int i = 1; i < count.size(); i++) {
        count[i] += count[i-1];
    }
    for (int i = array.size()-1; i > -1; i--) {
        output[count[digit(array[i], exp)]-1] = array[i];
        count[digit(array[i], exp)]--;
    }

    return output;
}

std::vector<int> combine(std::vector<int> &array1, std::vector<int> &array2) {
    std::vector<int> array = array1;
    array.insert(array.end(), array2.begin(), array2.end());
    return array;
}

std::vector<int> radix_sort(std::vector<int> &array, string mode, int digit = -3) {
    if (mode == "lsd") {
        if (digit == -3) {
            digit = 0;
        }

		for (unsigned int i = 0; i < std::to_string(max(array)).size(); i++) {
			array = counting_sort(array, i);
		}
		return array;
    } else if (mode == "msd") {
        if (digit == -3) {
            digit = std::to_string(max(array)).size();
        }

		if (digit == -2) {
			digit = std::to_string(max(array)).size();
		}
		std::vector<int> output;

		if (digit >= 0) {
			auto arr = counting_sort(array, digit);
			std::vector<std::vector<int>> array = seperate(arr, digit);
			for (std::vector<int> &i : array) {
                auto foo = radix_sort(i, "msd", digit-1);
                output = combine(output, foo);
			}
		} else {
			output = array;
		}

		return output;

	} else {
		return radix_sort(array, "lsd", 0);
	}
}

int main() {
    cout << "RADIX SORT" << endl;
    std::vector<int> shuffled_array = random_sequence(0, 1000);

    printArray(shuffled_array);
    cout << endl;

    cout << "LSD" << endl;
    std::vector<int> sorted_array1 = radix_sort(shuffled_array, "lsd");
    printArray(sorted_array1);

    cout << "\nMSD" << endl;
    std::vector<int> sorted_array2 = radix_sort(shuffled_array, "msd");
    printArray(sorted_array2);
    return 0;
}