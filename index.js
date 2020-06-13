"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bogoSort_1 = __importDefault(require("./bogoSort"));
const commander_1 = __importDefault(require("commander"));
const utils_1 = __importDefault(require("./utils"));
commander_1.default
    .option("-bogo, --bogoSort", 'Run bogo sort algorithm')
    .option("-bubble, --bubbleSort", 'Run bubble sort algorithm')
    .option("-cocktail, --cocktailShakerSort", 'Run cocktail shaker sort algorithm')
    .option("-comb, --combSort", 'Run comb sort algorithm')
    .option("-counting, --countingSort", 'Run counting sort algorithm')
    .option("-gnome, --gnomeSort", 'Run gnome sort algorithm')
    .option("-insertion, --insertionSort", 'Run insertion sort algorithm')
    .option("-merge, --mergeSort", 'Run merge sort algorithm');
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
    "mergeSort"
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
if (commander_1.default.bogoSort) {
    const shuffledArray = utils_1.default(0, 7); // Max range
    console.log(shuffledArray);
    console.log(bogoSort_1.default(shuffledArray));
}
for (const [key, value] of Object.entries(commander_1.default)) {
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
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDBEQUFpQztBQUdqQywwREFBK0I7QUFDL0Isb0RBQW9DO0FBRXBDLG1CQUFPO0tBQ0YsTUFBTSxDQUFDLG1CQUFtQixFQUFFLHlCQUF5QixDQUFDO0tBQ3RELE1BQU0sQ0FBQyx1QkFBdUIsRUFBRSwyQkFBMkIsQ0FBQztLQUM1RCxNQUFNLENBQUMsaUNBQWlDLEVBQUUsb0NBQW9DLENBQUM7S0FDL0UsTUFBTSxDQUFDLG1CQUFtQixFQUFFLHlCQUF5QixDQUFDO0tBQ3RELE1BQU0sQ0FBQywyQkFBMkIsRUFBRSw2QkFBNkIsQ0FBQztLQUNsRSxNQUFNLENBQUMscUJBQXFCLEVBQUUsMEJBQTBCLENBQUM7S0FDekQsTUFBTSxDQUFDLDZCQUE2QixFQUFFLDhCQUE4QixDQUFDO0tBQ3JFLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSwwQkFBMEIsQ0FBQyxDQUFBO0FBRTlELG1CQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUUzQjs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsR0FBRyxDQUFDLElBQW1DLEVBQUUsRUFBRTtJQUN2RCxNQUFNLGFBQWEsR0FBRyxlQUFjLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBLENBQUMsWUFBWTtJQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNoQyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtBQUM1QixDQUFDLEVBQ0csWUFBWSxHQUFHO0lBQ1gsVUFBVTtJQUNWLGNBQWM7SUFDZCxXQUFXO0NBQ2QsRUFDRCxhQUFhLEdBQUc7SUFDWixTQUFTO0lBQ1QsU0FBUztJQUNULFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLFVBQVU7SUFDVixTQUFTO0lBQ1QsUUFBUTtJQUNSLFNBQVM7Q0FDWixDQUFBO0FBRUwsSUFBSSxtQkFBTyxDQUFDLFFBQVEsRUFBRTtJQUNsQixNQUFNLGFBQWEsR0FBRyxlQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBLENBQUMsWUFBWTtJQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFBO0NBQ3ZDO0FBRUQsS0FBSyxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsbUJBQU8sQ0FBQyxFQUFFO0lBQ2hELElBQ0ksR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUc7UUFDZCxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1FBQzVCLEtBQUs7UUFDTCxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQzdCO1FBQ0UsTUFBTSxhQUFhLEdBQUcsZUFBYyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7UUFFMUIsSUFBSTtZQUNBLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFBO1lBQ3hDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtZQUVuQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1NBQzdCO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ25CO0tBRUo7U0FBTSxJQUNILEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHO1FBQ2QsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUM1QixLQUFLO1FBQ0wsR0FBRyxLQUFLLFVBQVUsRUFDcEI7UUFDRSxJQUFJO1lBQ0EsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUE7WUFDeEMsVUFBVSxDQUFDLElBQXFDLENBQUMsQ0FBQTtTQUNwRDtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtTQUNuQjtLQUNKO0NBQ0oifQ==