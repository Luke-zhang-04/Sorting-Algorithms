"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bogoSort_1 = __importDefault(require("./bogoSort"));
const radixSort_1 = __importDefault(require("./radixSort"));
const commander_1 = __importDefault(require("commander"));
const utils_1 = __importDefault(require("./utils"));
commander_1.default
    .option("-bogo, --bogoSort", "Run bogo sort algorithm")
    .option("-bubble, --bubbleSort", "Run bubble sort algorithm")
    .option("-cocktail, --cocktailShakerSort", "Run cocktail shaker sort algorithm")
    .option("-comb, --combSort", "Run comb sort algorithm")
    .option("-counting, --countingSort", "Run counting sort algorithm")
    .option("-gnome, --gnomeSort", "Run gnome sort algorithm")
    .option("-insertion, --insertionSort", "Run insertion sort algorithm")
    .option("-merge, --mergeSort", "Run merge sort algorithm")
    .option("-mergeIP, --mergeSortInPlace", "Run in-place merge sort algorithm")
    .option("-quick, --quickSort", "Run quickSort sort algorithm")
    .option("-lsd, --radixLSD", "Run radix sort least significant digit algorithm")
    .option("-msd, --radixMSD", "Run raidx sort most significant digit algorithm")
    .option("-shell, --shellSort", "Run raidx sort algorithm")
    .option("-tim, --timSort", "Run tim sort algorithm");
commander_1.default.parse(process.argv);
/**
 * Function to run sorting algorithms that don't sort in-place
 *
 */
const notInPlace = (sort) => {
    const shuffledArray = utils_1.default(0, 1000); // Max range
    console.log(shuffledArray, "\n");
    const sortedArray = sort(shuffledArray);
    console.log(sortedArray);
}, specialCases = [
    "bogoSort",
    "countingSort",
    "mergeSort",
    "radixMSD"
], commanderArgs = [
    "program",
    "Command",
    "Option",
    "CommanderError",
    "args",
    "commands",
    "options",
    "parent",
    "rawArgs",
];
for (const [key, value] of Object.entries(commander_1.default)) {
    if (key === "bogoSort" && value) {
        const shuffledArray = utils_1.default(0, 7); // Max range
        console.log(shuffledArray);
        console.log(bogoSort_1.default(shuffledArray));
        continue;
    }
    else if (key === "radixMSD") {
        const shuffledArray = utils_1.default(0, 1000);
        console.log(shuffledArray);
        radixSort_1.default(shuffledArray, "msd");
        console.log(shuffledArray);
        continue;
    }
    else if (key === "radixLSD") {
        const shuffledArray = utils_1.default(0, 1000);
        console.log(shuffledArray);
        radixSort_1.default(shuffledArray);
        console.log(shuffledArray);
        continue;
    }
    if (key[0] !== "_" &&
        !commanderArgs.includes(key) &&
        value &&
        !specialCases.includes(key)) {
        const shuffledArray = utils_1.default(0, 1000);
        console.log(key);
        console.log(shuffledArray);
        try {
            const sort = require(`./${key}`).default;
            sort(shuffledArray);
            console.log(shuffledArray);
        }
        catch (err) {
            console.log(err);
        }
        continue;
    }
    else if (key[0] !== "_" &&
        !commanderArgs.includes(key) &&
        value &&
        key !== "bogoSort") {
        try {
            const sort = require(`./${key}`).default;
            notInPlace(sort);
        }
        catch (err) {
            console.log(err);
        }
        continue;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDBEQUFpQztBQUlqQyw0REFBbUM7QUFDbkMsMERBQStCO0FBQy9CLG9EQUFvQztBQUVwQyxtQkFBTztLQUNGLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSx5QkFBeUIsQ0FBQztLQUN0RCxNQUFNLENBQUMsdUJBQXVCLEVBQUUsMkJBQTJCLENBQUM7S0FDNUQsTUFBTSxDQUFDLGlDQUFpQyxFQUFFLG9DQUFvQyxDQUFDO0tBQy9FLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSx5QkFBeUIsQ0FBQztLQUN0RCxNQUFNLENBQUMsMkJBQTJCLEVBQUUsNkJBQTZCLENBQUM7S0FDbEUsTUFBTSxDQUFDLHFCQUFxQixFQUFFLDBCQUEwQixDQUFDO0tBQ3pELE1BQU0sQ0FBQyw2QkFBNkIsRUFBRSw4QkFBOEIsQ0FBQztLQUNyRSxNQUFNLENBQUMscUJBQXFCLEVBQUUsMEJBQTBCLENBQUM7S0FDekQsTUFBTSxDQUFDLDhCQUE4QixFQUFFLG1DQUFtQyxDQUFDO0tBQzNFLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSw4QkFBOEIsQ0FBQztLQUM3RCxNQUFNLENBQUMsa0JBQWtCLEVBQUUsa0RBQWtELENBQUM7S0FDOUUsTUFBTSxDQUFDLGtCQUFrQixFQUFFLGlEQUFpRCxDQUFDO0tBQzdFLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSwwQkFBMEIsQ0FBQztLQUN6RCxNQUFNLENBQUMsaUJBQWlCLEVBQUUsd0JBQXdCLENBQUMsQ0FBQTtBQUV4RCxtQkFBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7QUFFM0I7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFtQyxFQUFFLEVBQUU7SUFDdkQsTUFBTSxhQUFhLEdBQUcsZUFBYyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQSxDQUFDLFlBQVk7SUFD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