function random_sequence(minimum, maximum) { //returns a shuffled array
    array = []
    for (i = minimum; i < maximum; i++) { //create array and append numbers to it
        array.push(i)
    }
    array.sort(() => Math.random() - 0.5) //shuffle the array
    return array
}

Array.min = function(array) {
    return Math.min.apply(Math, array)
}

function selection_sort(array) {
    let ind
    let temp
	for (i = 0; i < array.length; i++) {
        ind = array.indexOf(Array.min(array.slice(i, array.length+1)))
        temp = array[i]
        array[i] = array[ind]
        array[ind] = temp
	}
	return array
}

let shuffled_array = random_sequence(0, 1000)
console.log("SELECTON SORT")
console.log("[" + shuffled_array.toString() + "]", "\n")
console.log("[" + selection_sort(shuffled_array).toString() + "]")