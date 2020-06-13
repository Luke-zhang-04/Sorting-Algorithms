#include <ostream>
#include <vector>
#include <unordered_map>

#include "./bogoSort/main.h"
#include "./bubbleSort/main.h"
#include "./cocktailShakerSort/main.h"
#include "./combSort/main.h"
#include "./countingSort/main.h"
#include "./gnomeSort/main.h"
#include "./insertionSort/main.h"
#include "./mergeSort/main.h"
#include "./mergeSortInPlace/main.h"

#include "./utils/utils.h"


using std::cout;
using std::endl;
using std::string;

int main(int argc, char* argv[]) {

    const static std::unordered_map<std::string, int> stringCase {
        {"bogoSort", 1}, {"bogo", 1},
        {"bubbleSort", 2}, {"bubble", 2},
        {"cocktailShakerSort", 3}, {"cocktailShaker", 3}, {"cocktail", 3},
        {"combSort", 4}, {"comb", 4},
        {"countingSort", 5}, {"counting", 5}, {"count", 5},
        {"gnomeSort", 6}, {"gnome", 6},
        {"insertionSort", 7}, {"insertion", 7}, {"insert", 7},
        {"mergeSort", 8}, {"merge", 8},
        {"mergeSortInPlace", 9}, {"mergeSortIP", 9}, {"mergeIP", 9}, {"IPMergeSort", 9}, {"IPMerge", 9},
    };

    for (int i = 1; i < argc; i++) {
        string arg = string(argv[i]);
        std::vector<int> shuffledArray = randomSequenceUtil(0, 1000);
        void (*sort)(std::vector<int> &array){};

        switch (stringCase.count(arg) ? stringCase.at(arg) : 0) {
        case 1:
            cout << "BOGO SORT AKA STUPID SORT" << endl;
            shuffledArray = randomSequenceUtil(0, 10);
            printArrayUtil(shuffledArray);
            cout << endl;

            if (!issorted(shuffledArray)) {
                printArrayUtil(bogoSort(shuffledArray));
            }

            continue;
        
        case 2:
            cout << "BUBBLE SORT" << endl;
            sort = bubbleSort;
            break;
        
        case 3:
            cout << "COCKTAIL SHAKER SORT" << endl;
            sort = cocktailShakerSort;
            break;

        case 4:
            cout << "COMBSORT" << endl;
            sort = combSort;
            break;
        
        case 5: {
            cout << "COUNTING SORT" << endl;
            printArrayUtil(shuffledArray);
            cout << endl;
            std::vector<int> sortedArray = countingSort(shuffledArray);
            printArrayUtil(sortedArray);
            continue;

        } case 6:
            cout << "GNOME SORT" << endl;
            sort = gnomeSort;
            break;
        
        case 7:
            cout << "INSERTION SORT" << endl;
            sort = insertionSort;
            break;
        
        case 8: {
            cout << "MERGE SORT" << endl;
            printArrayUtil(shuffledArray);
            cout << endl;
            std::vector<int> sortedArray = mergeSort(shuffledArray);
            printArrayUtil(sortedArray);
            continue;

        } case 9:
            cout << "IN PLACE MERGE SORT" << endl;
            printArrayUtil(shuffledArray);
            cout << endl;
            mergeSort(shuffledArray, 0, shuffledArray.size() - 1);
            printArrayUtil(shuffledArray);
            continue;
        
        default:
            cout << arg << " is not a sorting algorithm. Check your casing." << endl;
            continue;
        }

        printArrayUtil(shuffledArray);
        cout << endl;
        sort(shuffledArray);
        printArrayUtil(shuffledArray);
    }

    return 0;
}
