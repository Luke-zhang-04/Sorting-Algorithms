import bogoSort from "./bogoSort"
import countingSort from "./countingSort"
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

program.parse(process.argv)

const specialCases = [
    "bogoSort",
    "countingSort",
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

if (program.bogoSort) {
    console.log("BOGOSORT")
    const shuffledArray = randomSequence(0, 7) // Max range
    console.log(shuffledArray)
    console.log(bogoSort(shuffledArray))
}

if (program.countingSort) {
    console.log("COUNTING SORT")
    const shuffledArray = randomSequence(0, 1000) // Max range
    console.log(shuffledArray, "\n")
    const sortedArray = countingSort(shuffledArray)
    console.log(sortedArray)
}

for (const [key, value] of Object.entries(program)) {
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
    
    }    
}
