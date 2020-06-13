import bogoSort from "./bogoSort"
import countingSort from "./countingSort"
import mergeSort from "./mergeSort"
import {default as IPMergeSort} from "./mergeSortInPlace"
import program from "commander"
import randomSequence from "./utils"

program
    .option("-bogo, --bogoSort", 'Run bogo sort algorithm')
    .option("-bubble, --bubbleSort", 'Run bubble sort algorithm')
    .option("-cocktail, --cocktailShakerSort", 'Run cocktail shaker sort algorithm')
    .option("-comb, --combSort", 'Run comb sort algorithm')
    .option("-counting, --countingSort", 'Run counting sort algorithm')
    .option("-gnome, --gnomeSort", 'Run gnome sort algorithm')
    .option("-insertion, --insertionSort", 'Run insertion sort algorithm')
    .option("-merge, --mergeSort", 'Run merge sort algorithm')
    .option("-mergeIP, --mergeSortInPlace", 'Run in-place merge sort algorithm')

program.parse(process.argv)

/**
 * Function to run sorting algorithms that don't sort in-place
 * 
 */
const notInPlace = (sort: (array: number[]) => number[]) => {
    const shuffledArray = randomSequence(0, 1000) // Max range
    console.log(shuffledArray, "\n")
    const sortedArray = sort(shuffledArray)
    console.log(sortedArray)
},
    specialCases = [
        "bogoSort",
        "countingSort",
        "mergeSort",
        "mergeSortInPlace",
    ],
    commanderArgs = [
        "program",
        "Command",
        "Option",
        "CommanderError",
        "args",
        "commands",
        "options",
        "parent",
        "rawArgs",
    ]

for (const [key, value] of Object.entries(program)) {
    if (key === "bogoSort" && value) {
        const shuffledArray = randomSequence(0, 7) // Max range
        console.log(shuffledArray)
        console.log(bogoSort(shuffledArray))
        continue
    } else if (key === "mergeSortInPlace" && value) {
        const shuffledArray = randomSequence(0, 1000) // Max range
        console.log(shuffledArray)
        IPMergeSort(shuffledArray, 0, shuffledArray.length - 1)
        console.log(shuffledArray)
        continue
    }

    if (
        key[0] !== "_" &&
        !commanderArgs.includes(key) &&
        value &&
        !specialCases.includes(key)
    ) {
        const shuffledArray = randomSequence(0, 1000)
        console.log(key)
        console.log(shuffledArray)
    
        try {
            const sort = require(`./${key}`).default
            sort(shuffledArray)

            console.log(shuffledArray)
        } catch (err) {
            console.log(err)
        }

        continue
    
    } else if (
        key[0] !== "_" &&
        !commanderArgs.includes(key) &&
        value &&
        key !== "bogoSort"
    ) {
        try {
            const sort = require(`./${key}`).default
            notInPlace(sort as (array: number[]) => number[])
        } catch (err) {
            console.log(err)
        }
        continue
    }
}
