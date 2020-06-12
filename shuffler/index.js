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
//# sourceMappingURL=index.js.map