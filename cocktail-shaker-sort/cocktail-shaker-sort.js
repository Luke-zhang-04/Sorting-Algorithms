function random_sequence(minimum, maximum) { //returns a shuffled array
    array = []
    for (i = minimum; i < maximum; i++) { //create array and append numbers to it
        array.push(i)
    }
    array.sort(() => Math.random() - 0.5) //shuffle the array
    return array
}

function cocktail_shaker_sort(array) {
    let swaps //number of swaps
    let temp //for swapping
    let section
    for (amt = 0; amt < array.length; amt++) {
        swaps = 0

        //len(array[amt:-amt])
        section = (amt > 0 ? array.slice(amt, -amt).length : array.length)

        for (i = 0; i < section-1; i++) { //iterate through array
            if (array[amt+i] > array[amt+i+1]) { //swap if needed
                temp = array[amt+i+1]
                
				array[amt+i+1] = array[amt+i]
                array[amt+i] = temp
				swaps ++
            }
        }

        if (swaps === 0) {
            break
        }

        for (i = section-1; i > 0; i--) {
            if (array[amt+i] < array[amt+i-1]) { //swap if needed
                temp = array[amt+i-1]
                
				array[amt+i-1] = array[amt+i]
                array[amt+i] = temp
				swaps ++
            }
        }

        if (swaps === 0) {
            break
        }
    }
    return array
}

let shuffled_array = random_sequence(0, 1000)
console.log("COCKTAIL SHAKER SORT")
console.log("[" + shuffled_array.toString() + "]", "\n")
console.log("[" + cocktail_shaker_sort(shuffled_array).toString() + "]")