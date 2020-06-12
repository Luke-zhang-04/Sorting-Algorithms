"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bogoSort_1 = __importDefault(require("./bogoSort"));
const commander_1 = __importDefault(require("commander"));
const shuffler_1 = __importDefault(require("./shuffler"));
commander_1.default
    .option("-bs, --bogoSort", 'Run bogosort algorithm');
commander_1.default.parse(process.argv);
if (commander_1.default.bogosort) {
    const shuffled_array = shuffler_1.default(0, 7); //max range
    console.log("BOGO SORT AKA STUPID SORT");
    console.log(shuffled_array);
    console.log(bogoSort_1.default(shuffled_array));
}
//# sourceMappingURL=index.js.map