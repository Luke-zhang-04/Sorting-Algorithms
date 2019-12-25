function random_sequence(minimum, maximum) { //returns a shuffled array
    array = []
    for (i = minimum; i < maximum; i++) { //create array and append numbers to it
        array.push(i)
    }
    array.sort(() => Math.random() - 0.5) //shuffle the array
    return array
}

function gnome_sort(array) {
    let temp
    i = 0
	while (i < array.length) { //iterate until end of array
		if (i == 0 || array[i] > array[i-1]) { //move "gnome" forward if "pots" in  correct order
			i++
		} else {
            temp = array[i-1]

            array[i-1] = array[i] //swap if needed, go back
            array[i] = temp
            
            i--
		}

	}
	return array
}

let shuffled_array = random_sequence(0, 1000)
console.log("GNOME SORT")
console.log("[" + shuffled_array.toString() + "]", "\n")
console.log("[" + gnome_sort(shuffled_array).toString() + "]")