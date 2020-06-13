"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../utils"));
/**
 * Main countingsort function
 * @param {Array.<number>} array - array to sort
 * @returns {Array.<number | null>} sorted array; does not sort in-place
 */
const countingSort = (array) => {
    //create array with zeros
    const count = [];
    for (let i = 0; i < Math.max(...array) + 1; i++) {
        count.push(0);
    }
    for (let i = 0; i < array.length; i++) { //iterate through given array, and add 1 to the index which is the value of array[i]
        count[array[i]]++;
    }
    for (let i = 1; i < count.length; i++) { //go through array and add previous index's value to the current index
        count[i] += count[i - 1];
    }
    //create output array filled with null
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(null);
    }
    //iterate through array and turn none types into sorted values
    array.forEach((i) => {
        output[count[i] - 1] = i,
            count[i] -= 1;
    });
    return output;
};
if (require.main === module) {
    const shuffledArray = utils_1.default(0, 1000);
    console.log("COUNTING SORT");
    console.log(shuffledArray, "\n");
    const sortedArray = countingSort(shuffledArray);
    console.log(sortedArray);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFEQUFxQztBQUVyQzs7OztHQUlHO0FBQ0gsTUFBTSxZQUFZLEdBQUcsQ0FBQyxLQUFlLEVBQW9CLEVBQUU7SUFDdkQseUJBQXlCO0lBQ3pCLE1BQU0sS0FBSyxHQUFhLEVBQUUsQ0FBQTtJQUMxQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUM3QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQ2hCO0lBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxvRkFBb0Y7UUFDL0gsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7S0FDakI7SUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLHNFQUFzRTtRQUM5RyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtLQUNyQjtJQUVELHNDQUFzQztJQUN0QyxNQUFNLE1BQU0sR0FBc0IsRUFBRSxDQUFBO0lBQ3BDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDcEI7SUFFRCw4REFBOEQ7SUFDOUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQVMsRUFBUSxFQUFFO1FBQzlCLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUN0QixLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2pCLENBQUMsQ0FBQyxDQUFBO0lBRUYsT0FBTyxNQUFNLENBQUE7QUFDakIsQ0FBQyxDQUFBO0FBRUQsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtJQUN6QixNQUFNLGFBQWEsR0FBRyxlQUFjLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUE7SUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDaEMsTUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7Q0FDM0IifQ==