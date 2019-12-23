function random_sequence(minimum, maximum) { //returns a shuffled array
    array = []
    for (i = minimum; i < maximum; i++) { //create array and append numbers to it
        array.push(i)
    }
    array.sort(() => Math.random() - 0.5) //shuffle the array
    return array
}

function bubble_sort(array) {
    let swaps //number of swaps
    let temp //for swapping
    while (true) {
        swaps = 0
        for (i = 0; i < array.length; i++) { //iterate through array
            if (array[i] > array[i+1]) { //swap if needed
                temp = array[i+1]
				array[i+1] = array[i]
                array[i] = temp
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
console.log("BUBBLE SORT")
console.log(shuffled_array.toString(), "\n")
console.log(bubble_sort(shuffled_array).toString())