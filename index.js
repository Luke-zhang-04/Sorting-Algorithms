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
    .option("-msd, --radixMSD", "Run raidx sort most significant digit algorithm");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDBEQUFpQztBQUlqQyw0REFBbUM7QUFDbkMsMERBQStCO0FBQy9CLG9EQUFvQztBQUVwQyxtQkFBTztLQUNGLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSx5QkFBeUIsQ0FBQztLQUN0RCxNQUFNLENBQUMsdUJBQXVCLEVBQUUsMkJBQTJCLENBQUM7S0FDNUQsTUFBTSxDQUFDLGlDQUFpQyxFQUFFLG9DQUFvQyxDQUFDO0tBQy9FLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSx5QkFBeUIsQ0FBQztLQUN0RCxNQUFNLENBQUMsMkJBQTJCLEVBQUUsNkJBQTZCLENBQUM7S0FDbEUsTUFBTSxDQUFDLHFCQUFxQixFQUFFLDBCQUEwQixDQUFDO0tBQ3pELE1BQU0sQ0FBQyw2QkFBNkIsRUFBRSw4QkFBOEIsQ0FBQztLQUNyRSxNQUFNLENBQUMscUJBQXFCLEVBQUUsMEJBQTBCLENBQUM7S0FDekQsTUFBTSxDQUFDLDhCQUE4QixFQUFFLG1DQUFtQyxDQUFDO0tBQzNFLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSw4QkFBOEIsQ0FBQztLQUM3RCxNQUFNLENBQUMsa0JBQWtCLEVBQUUsa0RBQWtELENBQUM7S0FDOUUsTUFBTSxDQUFDLGtCQUFrQixFQUFFLGlEQUFpRCxDQUFDLENBQUE7QUFFbEYsbUJBQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBRTNCOzs7R0FHRztBQUNILE1BQU0sVUFBVSxHQUFHLENBQUMsSUFBbUMsRUFBRSxFQUFFO0lBQ3ZELE1BQU0sYUFBYSxHQUFHLGVBQWMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUEsQ0FBQyxZQUFZO0lBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ2hDLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxh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