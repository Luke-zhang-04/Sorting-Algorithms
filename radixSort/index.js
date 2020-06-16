"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../utils"));
/**
 * Counting sort function for radix sort{
 * @param {Array.<number>} array - array to sort
 * @param {number} exp - exponent for digit
 * @returns {void} void; sorts in place
 */
const countingSort = (array, exp) => {
    //create array with zeros
    let count = [];
    for (let i = 0; i < Math.max(...array) + 1; i++) {
        count.push(0);
    }
    for (let i = 0; i < array.length; i++) { //iterate through given array, and add 1 to the index which is the value of array[i]
        count[digit(array[i], exp)]++;
    }
    for (let i = 1; i < count.length; i++) { //go through array and add previous index's value to the current index
        count[i] += count[i - 1];
    }
    //create output array filled with null
    let output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(null);
    }
    //iterate through array and turn null types into sorted values
    for (let i = array.length - 1; i > -1; i--) {
        output[count[digit(array[i], exp)] - 1] = array[i];
        count[digit(array[i], exp)]--;
    }
    array.length = 0;
    array.push(...output);
}, 
/**
 * Indexes integer without type conversion (e.g digit(253, 1) returns 5)
 * @param {number} number - number to index
 * @param {number} n - exponent position
 * @return {number} indexed number
 */
digit = (number, n) => Math.floor(number / 10 ** n) % 10, 
/**
 * Seperates numbers in an array by digit while grouping them accordingly
 * @param {Array.<number>} array - array to seperate and group up
 * @param {number} digit - index to check
 * @returns {void} void; seperates in-place
 */
seperate = (array, digit) => {
    digit = 10 ** digit;
    const output = [];
    let counter = 0, minimum = Math.min(...array).toString().split('');
    for (let i = 0; i < minimum.slice(1).length; i++) {
        minimum[i + 1] = "0";
    }
    minimum = Number(minimum.join(''));
    let beg;
    for (let i = minimum + digit; i < Math.max(...array) + digit + 1; i += digit) {
        beg = counter;
        while (counter <= array.length) {
            if (counter === array.length || array[counter] >= i) {
                if (counter - beg > 0) {
                    output.push(array.slice(beg, counter));
                }
                break;
            }
            counter++;
        }
    }
    return output;
}, 
/**
 * Main radix sort function, for both LSD and MSD
 * @param {Array.<number>} array - array to sort
 * @param {number} digit - digit index
 */
radixSort = (array, mode, digit) => {
    if (!mode || mode === "lsd") {
        for (let j = 0; j < Math.max(...array)
            .toString()
            .length; j++) {
            countingSort(array, j);
        }
    }
    else if (mode === "msd") {
        if (digit === undefined) {
            digit = Math.max(...array).toString().length - 1;
        }
        let output = [], array2 = [];
        if (digit >= 0) {
            countingSort(array, digit);
            array2 = seperate(array, digit);
            for (let i of array2) {
                radixSort(i, "msd", digit - 1);
                output = output.concat(i);
            }
        }
        else {
            output = array.slice();
        }
        array.length = 0;
        array.push(...output);
    }
};
if (require.main === module) {
    let shuffledArray1 = utils_1.default(0, 1000), shuffledArray2 = shuffledArray1.slice();
    console.log("RADIX SORT");
    console.log(shuffledArray1, "\n");
    console.log("LSD");
    radixSort(shuffledArray1);
    console.log(shuffledArray1);
    console.log("MSD");
    radixSort(shuffledArray2, "msd");
    console.log(shuffledArray2);
}
exports.default = radixSort;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFEQUFxQztBQUVyQzs7Ozs7R0FLRztBQUNILE1BQU0sWUFBWSxHQUFHLENBQUMsS0FBZSxFQUFFLEdBQVcsRUFBUSxFQUFFO0lBQ3hELHlCQUF5QjtJQUN6QixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUE7SUFDZCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUM3QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQ2hCO0lBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxvRkFBb0Y7UUFDL0gsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRyxDQUFBO0tBQzlCO0lBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxzRUFBc0U7UUFDOUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUE7S0FDbkI7SUFFRCxzQ0FBc0M7SUFDdEMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFBO0lBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtLQUNwQjtJQUVELDhEQUE4RDtJQUM5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