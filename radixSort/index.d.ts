/**
 * Counting sort function for radix sort{
 * @param {Array.<number>} array - array to sort
 * @param {number} exp - exponent for digit
 * @returns {void} void; sorts in place
 */
declare const 
/**
 * Main radix sort function, for both LSD and MSD
 * @param {Array.<number>} array - array to sort
 * @param {number} digit - digit index
 */
radixSort: (array: number[], mode?: "lsd" | "msd" | undefined, digit?: number | undefined) => void;
export default radixSort;
