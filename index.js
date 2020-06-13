"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bogoSort_1 = __importDefault(require("./bogoSort"));
const countingSort_1 = __importDefault(require("./countingSort"));
const commander_1 = __importDefault(require("commander"));
const utils_1 = __importDefault(require("./utils"));
commander_1.default
    .option("-bogo, --bogoSort", 'Run bogo sort algorithm')
    .option("-bubble, --bubbleSort", 'Run bubble sort algorithm')
    .option("-cocktail, --cocktailShakerSort", 'Run cocktail shaker sort algorithm')
    .option("-comb, --combSort", 'Run comb sort algorithm')
    .option("-counting, --countingSort", 'Run counting sort algorithm')
    .option("-gnome, --gnomeSort", 'Run gnome sort algorithm')
    .option("-insertion, --insertionSort", 'Run insertion sort algorithm');
commander_1.default.parse(process.argv);
const specialCases = [
    "bogoSort",
    "countingSort",
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
    console.log("BOGOSORT");
    const shuffledArray = utils_1.default(0, 7); // Max range
    console.log(shuffledArray);
    console.log(bogoSort_1.default(shuffledArray));
}
if (commander_1.default.countingSort) {
    console.log("COUNTING SORT");
    const shuffledArray = utils_1.default(0, 1000); // Max range
    console.log(shuffledArray, "\n");
    const sortedArray = countingSort_1.default(shuffledArray);
    console.log(sortedArray);
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDBEQUFpQztBQUNqQyxrRUFBeUM7QUFDekMsMERBQStCO0FBQy9CLG9EQUFvQztBQUVwQyxtQkFBTztLQUNGLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSx5QkFBeUIsQ0FBQztLQUN0RCxNQUFNLENBQUMsdUJBQXVCLEVBQUUsMkJBQTJCLENBQUM7S0FDNUQsTUFBTSxDQUFDLGlDQUFpQyxFQUFFLG9DQUFvQyxDQUFDO0tBQy9FLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSx5QkFBeUIsQ0FBQztLQUN0RCxNQUFNLENBQUMsMkJBQTJCLEVBQUUsNkJBQTZCLENBQUM7S0FDbEUsTUFBTSxDQUFDLHFCQUFxQixFQUFFLDBCQUEwQixDQUFDO0tBQ3pELE1BQU0sQ0FBQyw2QkFBNkIsRUFBRSw4QkFBOEIsQ0FBQyxDQUFBO0FBRTFFLG1CQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUUzQixNQUFNLFlBQVksR0FBRztJQUNqQixVQUFVO0lBQ1YsY0FBYztDQUNqQixFQUNHLGFBQWEsR0FBRztJQUNaLFNBQVM7SUFDVCxTQUFTO0lBQ1QsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sVUFBVTtJQUNWLFNBQVM7SUFDVCxRQUFRO0lBQ1IsU0FBUztDQUNaLENBQUE7QUFFTCxJQUFJLG1CQUFPLENBQUMsUUFBUSxFQUFFO0lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDdkIsTUFBTSxhQUFhLEdBQUcsZUFBYyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFDLFlBQVk7SUFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQTtDQUN2QztBQUVELElBQUksbUJBQU8sQ0FBQyxZQUFZLEVBQUU7SUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQTtJQUM1QixNQUFNLGFBQWEsR0FBRyxlQUFjLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBLENBQUMsWUFBWTtJQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNoQyxNQUFNLFdBQVcsR0FBRyxzQkFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7Q0FDM0I7QUFFRCxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxtQkFBTyxDQUFDLEVBQUU7SUFDaEQsSUFDSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRztRQUNkLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFDNUIsS0FBSztRQUNMLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFDN0I7UUFDRSxNQUFNLGFBQWEsR0FBRyxlQUFjLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUUxQixJQUFJO1lBQ0EsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUE7WUFDeEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1lBRW5CLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7U0FDN0I7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDbkI7S0FFSjtDQUNKIn0=