function random_sequence(minimum, maximum) { //returns a shuffled array
    array = []
    for (i = minimum; i < maximum; i++) { //create array and append numbers to it
        array.push(i)
    }
    array.sort(() => Math.random() - 0.5) //shuffle the array
    return array
}

function merge(array1, array2) {
    let array = []
    let first = 0
    let second = 0

    while (first < array1.length && second < array2.length) {
        if (array1[first] > array2[second]) {
            array.push(array2[second])
			second++
		} else if (array1[first] < array2[second]) {
            array.push(array1[first])
			first++
		} else {
            array.push(array1[first])
			first++
            array.push(array2[second])
			second++
        }
    }

    while (first < array1.length) {
        array.push(array1[first])
        first++
    }

    while (second < array2.length) {
        array.push(array2[second])
        second++
    }

    return array
}

function merge_sort(array) {
    if (array.length > 1) {
        //split array into two halves
		let half = array.length / 2
		let left = array.slice(0, half)
		let right = array.slice(half)

		//recursively call each merge sort for each half until array size is 1
        left = merge_sort(left)
        right = merge_sort(right)
        
        //merge left and right sides
        array = merge(left, right)
    }
	return array
}

let shuffled_array = random_sequence(0, 1000)
console.log("MERGE SORT")
console.log(shuffled_array.toString(), "\n")
console.log(merge_sort(shuffled_array).toString())