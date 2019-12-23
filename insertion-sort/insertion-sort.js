function random_sequence(minimum, maximum) {
    array = []
    for (i = minimum; i < maximum; i++) {
        array.push(i)
    }
    array.sort(() => Math.random() - 0.5);
    return array
}

function insertion_sort(array) {
    let comparator
    let section
    for (i = 0; i < array.length; i++) {
		comparator = array[i]
		section = i - 1
		while (section >= 0 && comparator < array[section]) {
			array[section+1] = array[section]
			section --
		}
	array[section+1] = comparator
	}
	return array
}

let shuffled_array = random_sequence(0, 1000)
console.log("INSERTION SORT")
console.log(shuffled_array.toString(), "\n")
console.log(insertion_sort(shuffled_array).toString())