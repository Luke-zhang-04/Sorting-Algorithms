#include <ostream>
#include <vector>

#include "./bogoSort/main.h"
#include "./bubbleSort/main.h"
#include "./cocktailShakerSort/main.h"

#include "./utils/utils.h"


using std::cout;
using std::endl;
using std::string;

int main(int argc, char* argv[]) {

    for (int i = 1; i < argc; i++) {
        string arg = string(argv[i]);
        std::vector<int> shuffledArray = randomSequenceUtil(0, 1000);

        if (arg == "bogoSort" || arg == "bogo") {
            cout << "BOGO SORT AKA STUPID SORT" << endl;
            shuffledArray = randomSequenceUtil(0, 10);
            printArrayUtil(shuffledArray);
            cout << endl;

            if (!issorted(shuffledArray)) {
                printArrayUtil(bogoSort(shuffledArray));
            }

            continue;
        } else if (arg == "bubbleSort" || arg == "bubble") {
            cout << "BUBBLE SORT" << endl;
            printArrayUtil(shuffledArray);
            cout << endl;
            bubbleSort(shuffledArray);
        } else if (arg == "cocktailShakerSort" || arg == "cocktail") {
            cout << "COCKTAIL SHAKER SORT" << endl;
            printArrayUtil(shuffledArray);
            cout << endl;
            cocktailShakerSort(shuffledArray);
        }

        printArrayUtil(shuffledArray);
    }

    return 0;
}
