"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../utils"));
/**
 * Finds smallest number in an array
 * @param {Array.<number>} array - array to find smallest number in
 * @returns {number} smallest number in array
 */
const min = (array) => Math.min.apply(Math, array), 
/**
 * Main selectionsort function
 * @param {Array.<number>} - array to search
 * @returns {void} void; sorts in-place
 */
selectionSort = (array) => {
    let ind;
    let temp;
    for (let i = 0; i < array.length; i++) {
        ind = array.indexOf(min(array.slice(i, array.length + 1)));
        temp = array[i];
        array[i] = array[ind];
        array[ind] = temp;
    }
};
if (require.main === module) {
    let shuffledArray = utils_1.default(0, 1000);
    console.log("SELECTON SORT");
    console.log(shuffledArray, "\n");
    selectionSort(shuffledArray);
    console.log(shuffledArray);
}
exports.default = selectionSort;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFEQUFxQztBQUVyQzs7OztHQUlHO0FBQ0gsTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFlLEVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7QUFFaEU7Ozs7R0FJRztBQUNILGFBQWEsR0FBRyxDQUFDLEtBQWUsRUFBUSxFQUFFO0lBQ3RDLElBQUksR0FBRyxDQUFBO0lBQ1AsSUFBSSxJQUFJLENBQUE7SUFDUixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNuQyxHQUFHLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDeEQsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNmLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDckIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQTtLQUNwQjtBQUVMLENBQUMsQ0FBQTtBQUVMLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7SUFDekIsSUFBSSxhQUFhLEdBQUcsZUFBYyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFBO0lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ2hDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0NBQzdCO0FBRUQsa0JBQWUsYUFBYSxDQUFBIn0=