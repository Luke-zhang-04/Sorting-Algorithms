"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generates an array of random numbers
 * @param {number} minimum - num number to start with
 * @param {number} maximum - max number to start with
 * @returns {Array.<number>} array of random numbers
 */
const randomSequence = (minimum, maximum) => {
    const array = [];
    for (let i = minimum; i < maximum; i++) { // Create array and append numbers to it
        array.push(i);
    }
    array.sort(() => Math.random() - 0.5); // Shuffle the array
    return array;
};
exports.default = randomSequence;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7OztHQUtHO0FBQ0gsTUFBTSxjQUFjLEdBQUcsQ0FBQyxPQUFlLEVBQUUsT0FBZSxFQUFZLEVBQUU7SUFDbEUsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFBO0lBRWhCLEtBQUssSUFBSSxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsR0FBRyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSx3Q0FBd0M7UUFDOUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUNoQjtJQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFBLENBQUMsb0JBQW9CO0lBRTFELE9BQU8sS0FBSyxDQUFBO0FBQ2hCLENBQUMsQ0FBQTtBQUVELGtCQUFlLGNBQWMsQ0FBQSJ9