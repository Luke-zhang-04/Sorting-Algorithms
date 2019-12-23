function random_sequence(minimum, maximum) { //returns a shuffled array
    array = []
    for (i = minimum; i < maximum; i++) { //create array and append numbers to it
        array.push(i)
    }
    array.sort(() => Math.random() - 0.5) //shuffle the array
    return array
}

function shuffle(array) { //returns a shuffled array
    array.sort(() => Math.random() - 0.5) //shuffle the array
    return array
}

function is_sorted(array) { //checks if array is sorted
    for (i = 0; i < array.length-1; i++) {
		if (array[i+1] < array[i]) {
			return false
		}
	}
	return true
}

function bogo_sort(array) {
    array = shuffle(array) //shuffle the array
	if (is_sorted(array)) { //check if the array is sorted, otherwise recurse
		return array
	} else {
		return bogo_sort(array)
	}
}

let shuffled_array = random_sequence(0, 7) //max range
console.log("BOGO SORT AKA STUPID SORT")
console.log(shuffled_array.toString(), "\n")
console.log(bogo_sort(shuffled_array).toString())