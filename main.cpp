#include <ostream>
#include <vector>
#include <unordered_map>

#include "./bogoSort/main.h"
#include "./bubbleSort/main.h"
#include "./cocktailShakerSort/main.h"
#include "./combSort/main.h"
#include "./countingSort/main.h"

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
    };

    for (int i = 1; i < argc; i++) {
        string arg = string(argv[i]);
        std::vector<int> shuffledArray = randomSequenceUtil(0, 1000);

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
            printArrayUtil(shuffledArray);
            cout << endl;
            bubbleSort(shuffledArray);
            break;
        
        case 3:
            cout << "COCKTAIL SHAKER SORT" << endl;
            printArrayUtil(shuffledArray);
            cout << endl;
            cocktailShakerSort(shuffledArray);
            break;

        case 4:
            cout << "COMBSORT" << endl;
            printArrayUtil(shuffledArray);
            cout << endl;
            combSort(shuffledArray);
            break;
        
        case 5: {
            cout << "COUNTING SORT" << endl;
            printArrayUtil(shuffledArray);
            cout << endl;
            std::vector<int> sortedArray = countingSort(shuffledArray);
            printArrayUtil(sortedArray);
            continue;

        } default:
            cout << arg << " is not a sorting algorithm. Check your casing." << endl;
            continue;
        }

        printArrayUtil(shuffledArray);
    }

    return 0;
}
