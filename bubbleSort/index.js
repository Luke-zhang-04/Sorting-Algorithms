"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../utils"));
/**
 * Main bubble sort function
 * @param {Array.<number>} array - array to sort
 * @returns {void} void; sorts in place
 */
const bubbleSort = (array) => {
    let swaps, // Number of swaps
    temp; // For swapping
    for (let amt = 0; amt < array.length; amt++) {
        swaps = 0;
        for (let i = 0; i < array.length - 1 - amt; i++) { // Iterate through array
            if (array[i] > array[i + 1]) { // Swap if needed
                temp = array[i + 1];
                array[i + 1] = array[i];
                array[i] = temp;
                swaps++;
            }
        }
        if (swaps === 0) {
            break;
        }
    }
};
if (require.main === module) {
    let shuffledArray = utils_1.default(0, 1000);
    console.log("BUBBLE SORT");
    console.log(shuffledArray, "\n");
    bubbleSort(shuffledArray);
    console.log(shuffledArray);
}
exports.default = bubbleSort;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFEQUFxQztBQUVyQzs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLEdBQUcsQ0FBQyxLQUFlLEVBQVEsRUFBRTtJQUN6QyxJQUFJLEtBQWEsRUFBRSxrQkFBa0I7SUFDakMsSUFBWSxDQUFBLENBQUMsZUFBZTtJQUVoQyxLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUN6QyxLQUFLLEdBQUcsQ0FBQyxDQUFBO1FBRVQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLHdCQUF3QjtZQUN2RSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsaUJBQWlCO2dCQUM1QyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtnQkFDL0IsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ1gsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQTtnQkFDM0IsS0FBSyxFQUFHLENBQUE7YUFDQztTQUNKO1FBQ0QsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ2IsTUFBSztTQUNSO0tBQ0o7QUFFTCxDQUFDLENBQUE7QUFFRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO0lBQ3pCLElBQUksYUFBYSxHQUFHLGVBQWMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNoQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTtDQUM3QjtBQUVELGtCQUFlLFVBQVUsQ0FBQSJ9