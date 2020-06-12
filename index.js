"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bogoSort_1 = __importDefault(require("./bogoSort"));
const commander_1 = __importDefault(require("commander"));
const utils_1 = __importDefault(require("./utils"));
commander_1.default
    .option("-bogo, --bogoSort", 'Run bogosort algorithm')
    .option("-bubble, --bubbleSort", 'Run bubblesort algorithm')
    .option("-cocktail, --cocktailShakerSort", 'Run bubblesort algorithm');
commander_1.default.parse(process.argv);
const commanderArgs = [
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
    const shuffledArray = utils_1.default(0, 7); //max range
    console.log(shuffledArray);
    console.log(bogoSort_1.default(shuffledArray));
}
for (const [key, value] of Object.entries(commander_1.default)) {
    if (key[0] !== "_" && !commanderArgs.includes(key) && value && key !== "bogoSort") {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDBEQUFpQztBQUNqQywwREFBK0I7QUFDL0Isb0RBQW9DO0FBRXBDLG1CQUFPO0tBQ0YsTUFBTSxDQUFDLG1CQUFtQixFQUFFLHdCQUF3QixDQUFDO0tBQ3JELE1BQU0sQ0FBQyx1QkFBdUIsRUFBRSwwQkFBMEIsQ0FBQztLQUMzRCxNQUFNLENBQUMsaUNBQWlDLEVBQUUsMEJBQTBCLENBQUMsQ0FBQTtBQUUxRSxtQkFBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7QUFFM0IsTUFBTSxhQUFhLEdBQUc7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCxRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixVQUFVO0lBQ1YsU0FBUztJQUNULFFBQVE7SUFDUixTQUFTO0NBQ1osQ0FBQTtBQUVELElBQUksbUJBQU8sQ0FBQyxRQUFRLEVBQUU7SUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUN2QixNQUFNLGFBQWEsR0FBRyxlQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBLENBQUMsV0FBVztJQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFBO0NBQ3ZDO0FBRUQsS0FBSyxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsbUJBQU8sQ0FBQyxFQUFFO0lBQ2hELElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxJQUFJLEdBQUcsS0FBSyxVQUFVLEVBQUU7UUFDL0UsTUFBTSxhQUFhLEdBQUcsZUFBYyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7UUFFMUIsSUFBSTtZQUNBLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFBO1lBQ3hDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtZQUVuQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1NBQzdCO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ25CO0tBRUo7Q0FDSiJ9