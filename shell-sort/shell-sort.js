function random_sequence(minimum, maximum) { //returns a shuffled array
    array = []
    for (i = minimum; i < maximum; i++) { //create array and append numbers to it
        array.push(i)
    }
    array.sort(() => Math.random() - 0.5) //shuffle the array
    return array
}

function shell_sort(array) {
    let gap = Math.floor(array.length/2)
    while (gap >= 1) {
        //console.log(array, gap)
        for (i = gap; i < array.length; i ++) { //iterate through array, starting from gap
            let comparator = array[i] //make comparisons with this
            let index //in case of negative index
            let output //for accessing x outside the array

            for (x = i; x > gap-2; x -= gap) { //iterate throguh array with gap as the step
                output = x //for accessing x outside the array
                if (x-gap < 0) { //in case of negative index
                    index = array.length-x-gap
                } else {
                    index = x-gap
                }
                
                if (array[index] <= comparator) { //break when correct spot is found
                    break 
                } else { //otherwise, move elements forward to make space
                    array[x] = array[index] 
                }
            }
            array[output] = comparator //insert comparator in the correct spot
        }
        gap = Math.floor(gap/2) //increment the gap
    }
    return array
}

let shuffled_array = random_sequence(0, 1000)
console.log("SHELL SORT")
console.log("[" + shuffled_array.toString() + "]", "\n")
console.log("[" + shell_sort(shuffled_array).toString() + "]")