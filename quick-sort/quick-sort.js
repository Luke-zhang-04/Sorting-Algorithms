function random_sequence(minimum, maximum) { //returns a shuffled array
    array = []
    for (i = minimum; i < maximum; i++) { //create array and append numbers to it
        array.push(i)
    }
    array.sort(() => Math.random() - 0.5) //shuffle the array
    return array
}

function partition(array, pt) {
    let swaps
    let temp
    while (true) {
        swaps = 0
        for (i = 0; i < pt; i++) {
            if (array[pt] < array[i]) {
                temp = array[pt]
                array[pt] = array[i]
                array[i] = temp
                pt = i
                swaps++
                break
            }
        }

        for (i = array.length-1; i > pt; i--) {
            if (array[pt] > array[i]) {
                temp = array[pt]
                array[pt] = array[i]
                array[i] = temp
                pt = i
                swaps++
                break
            }
        }

        if (swaps === 0) {
            break
        }

    }
    return [array, pt]
}

function quick_sort(array) {
    if (array.length > 1) {
        let half = Math.floor(array.length/2)
        let start = array[0]
        let middle = array[half]
        let end = array[-1]
        let pivot_pt

        if ((start > end && start < middle) || (start < end && start > middle)) {
			pivot_pt = 0
		} else if ((end > start && end < middle) || (end < start && end > middle)) {
			pivot_pt = len(array)-1
		} else {
			pivot_pt = half
        }
        
        let result = partition(array, pivot_pt)
        let pt = result[1]
        array = result[0]

        let right = quick_sort(array.slice(pt))
        let left = quick_sort(array.slice(0, pt))
        
        array = left.concat(right)
    }
	return array
}

let shuffled_array = random_sequence(0, 1000)
console.log("QUICK SORT")
console.log(shuffled_array.toString(), "\n")
console.log(quick_sort(shuffled_array).toString())