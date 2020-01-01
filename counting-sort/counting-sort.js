function random_sequence(minimum, maximum) { //returns a shuffled array
    array = []
    for (i = minimum; i < maximum; i++) { //create array and append numbers to it
        array.push(i)
    }
    array.sort(() => Math.random() - 0.5) //shuffle the array
    return array
}

function counting_sort(array) {
    let count = []
    for (i = 0; i < Math.max(...array); i++) {
        count.push(0)
    }

    for (i = 0; i < array.length; i++) {
		count[array[i]]++
	}

	for (i = 1; i < count.length; i++) {
		count[i] += count[i-1]
    }
    
    let output = []
    for (i = 0; i < array.length; i++) {
        output.push(null)
    }

    array.forEach( i =>
        output[count[i]-1] = i,
        count[i] -= 1
    )

    return output
}

let shuffled_array = random_sequence(0, 1000)
console.log("COUNTING SORT")
console.log("[" + shuffled_array.toString() + "]", "\n")
console.log("[" + counting_sort(shuffled_array).toString() + "]")