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
    .option("-merge, --mergeSort", 'Run merge sort algorithm')
    .option("-mergeIP, --mergeSortInPlace", 'Run in-place merge sort algorithm')
    .option("-quick, --quickSort", 'Run quickSort sort algorithm');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDBEQUFpQztBQUlqQywwREFBK0I7QUFDL0Isb0RBQW9DO0FBRXBDLG1CQUFPO0tBQ0YsTUFBTSxDQUFDLG1CQUFtQixFQUFFLHlCQUF5QixDQUFDO0tBQ3RELE1BQU0sQ0FBQyx1QkFBdUIsRUFBRSwyQkFBMkIsQ0FBQztLQUM1RCxNQUFNLENBQUMsaUNBQWlDLEVBQUUsb0NBQW9DLENBQUM7S0FDL0UsTUFBTSxDQUFDLG1CQUFtQixFQUFFLHlCQUF5QixDQUFDO0tBQ3RELE1BQU0sQ0FBQywyQkFBMkIsRUFBRSw2QkFBNkIsQ0FBQztLQUNsRSxNQUFNLENBQUMscUJBQXFCLEVBQUUsMEJBQTBCLENBQUM7S0FDekQsTUFBTSxDQUFDLDZCQUE2QixFQUFFLDhCQUE4QixDQUFDO0tBQ3JFLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSwwQkFBMEIsQ0FBQztLQUN6RCxNQUFNLENBQUMsOEJBQThCLEVBQUUsbUNBQW1DLENBQUM7S0FDM0UsTUFBTSxDQUFDLHFCQUFxQixFQUFFLDhCQUE4QixDQUFDLENBQUE7QUFFbEUsbUJBQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBRTNCOzs7R0FHRztBQUNILE1BQU0sVUFBVSxHQUFHLENBQUMsSUFBbUMsRUFBRSxFQUFFO0lBQ3ZELE1BQU0sYUFBYSxHQUFHLGVBQWMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUEsQ0FBQyxZQUFZO0lBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ2hDLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBQzVCLENBQUMsRUFDRyxZQUFZLEdBQUc7SUFDWCxVQUFVO0lBQ1YsY0FBYztJQUNkLFdBQVc7Q0FDZCxFQUNELGFBQWEsR0FBRztJQUNaLFNBQVM7SUFDVCxTQUFTO0lBQ1QsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sVUFBVTtJQUNWLFNBQVM7SUFDVCxRQUFRO0lBQ1IsU0FBUztDQUNaLENBQUE7QUFFTCxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxtQkFBTyxDQUFDLEVBQUU7SUFDaEQsSUFBSSxHQUFHLEtBQUssVUFBVSxJQUFJLEtBQUssRUFBRTtRQUM3QixNQUFNLGFBQWEsR0FBRyxlQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBLENBQUMsWUFBWTtRQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFBO1FBQ3BDLFNBQVE7S0FDWDtJQUVELElBQ0ksR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUc7UUFDZCxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1FBQzVCLEtBQUs7UUFDTCxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQzdCO1FBQ0UsTUFBTSxhQUFhLEdBQUcsZUFBYyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7UUFFMUIsSUFBSTtZQUNBLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFBO1lBQ3hDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtZQUVuQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1NBQzdCO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ25CO1FBRUQsU0FBUTtLQUVYO1NBQU0sSUFDSCxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRztRQUNkLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFDNUIsS0FBSztRQUNMLEdBQUcsS0FBSyxVQUFVLEVBQ3BCO1FBQ0UsSUFBSTtZQUNBLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFBO1lBQ3hDLFVBQVUsQ0FBQyxJQUFxQyxDQUFDLENBQUE7U0FDcEQ7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDbkI7UUFDRCxTQUFRO0tBQ1g7Q0FDSiJ9