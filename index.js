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
    .option("-shell, --shellSort", "Run raidx sort most significant digit algorithm");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDBEQUFpQztBQUlqQyw0REFBbUM7QUFDbkMsMERBQStCO0FBQy9CLG9EQUFvQztBQUVwQyxtQkFBTztLQUNGLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSx5QkFBeUIsQ0FBQztLQUN0RCxNQUFNLENBQUMsdUJBQXVCLEVBQUUsMkJBQTJCLENBQUM7S0FDNUQsTUFBTSxDQUFDLGlDQUFpQyxFQUFFLG9DQUFvQyxDQUFDO0tBQy9FLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSx5QkFBeUIsQ0FBQztLQUN0RCxNQUFNLENBQUMsMkJBQTJCLEVBQUUsNkJBQTZCLENBQUM7S0FDbEUsTUFBTSxDQUFDLHFCQUFxQixFQUFFLDBCQUEwQixDQUFDO0tBQ3pELE1BQU0sQ0FBQyw2QkFBNkIsRUFBRSw4QkFBOEIsQ0FBQztLQUNyRSxNQUFNLENBQUMscUJBQXFCLEVBQUUsMEJBQTBCLENBQUM7S0FDekQsTUFBTSxDQUFDLDhCQUE4QixFQUFFLG1DQUFtQyxDQUFDO0tBQzNFLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSw4QkFBOEIsQ0FBQztLQUM3RCxNQUFNLENBQUMsa0JBQWtCLEVBQUUsa0RBQWtELENBQUM7S0FDOUUsTUFBTSxDQUFDLGtCQUFrQixFQUFFLGlEQUFpRCxDQUFDO0tBQzdFLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxpREFBaUQsQ0FBQyxDQUFBO0FBRXJGLG1CQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUUzQjs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsR0FBRyxDQUFDLElBQW1DLEVBQUUsRUFBRTtJQUN2RCxNQUFNLGFBQWEsR0FBRyxlQUFjLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBLENBQUMsWUFBWTtJQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENB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