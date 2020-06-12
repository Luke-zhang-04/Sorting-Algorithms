import bogoSort from "./bogoSort"
import program from "commander"
import randomSequence from "./shuffler"

program
    .option("-bs, --bogoSort", 'Run bogosort algorithm')

program.parse(process.argv)

if (program.bogosort) {
    const shuffled_array = randomSequence(0, 7) //max range
    console.log("BOGO SORT AKA STUPID SORT")
    console.log(shuffled_array)
    console.log(bogoSort(shuffled_array))
}
