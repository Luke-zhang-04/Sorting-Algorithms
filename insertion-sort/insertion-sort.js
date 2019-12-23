function random_sequence(minimum, maximum) { //returns a shuffled array
    array = []
    for (i = minimum; i < maximum; i++) { //create array and append numbers to it
        array.push(i)
    }
    array.sort(() => Math.random() - 0.5) //shuffle the array
    return array
}

function insertion_sort(array) {
    let comparator //make comparison with this value
    let section 
    for (i = 0; i < array.length; i++) { //iterate through entire array
		comparator = array[i]
		section = i - 1
		while (section >= 0 && comparator < array[section]) { //iterate through array from i to 0 backwards
			array[section+1] = array[section] //if comparator <= array[section], move array[section] forward to make space
			section --
		}
	array[section+1] = comparator //insert comparator into the array, in its correct position
	}
	return array
}

let shuffled_array = random_sequence(0, 1000)
console.log("INSERTION SORT")
console.log(shuffled_array.toString(), "\n")
console.log(insertion_sort(shuffled_array).toString())