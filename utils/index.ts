/**
 * Generates an array of random numbers
 * @param minimum - num number to start with
 * @param maximum - max number to start with
 * @returns array of random numbers
 */
const randomSequence = (minimum: number, maximum: number): number[] => {
    const array = []

    for (let i = minimum; i < maximum; i++) { // Create array and append numbers to it
        array.push(i)
    }
    array.sort(() => Math.random() - 0.5) // Shuffle the array

    return array
}

export default randomSequence
