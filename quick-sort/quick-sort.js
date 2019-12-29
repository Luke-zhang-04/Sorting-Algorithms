function random_sequence(minimum, maximum) { //returns a shuffled array
    array = []
    for (i = minimum; i < maximum; i++) { //create array and append numbers to it
        array.push(i)
    }
    array.sort(() => Math.random() - 0.5) //shuffle the array
    return array
}

function partition(array, pt) { //moves array elements to the correct sides of pivot (pt)
    let swaps //keep track of the swaps made
    let temp //temporary variable for swapping
    while (true) {
        swaps = 0

        for (i = 0; i < pt; i++) { //start from left side of the pivot (if pivot point isn't 0)
            if (array[pt] < array[i]) { //swap if element is larger than pivot
                temp = array[pt]
                array[pt] = array[i]
                array[i] = temp
                pt = i
                swaps++
                break
            }
        }

        for (i = array.length-1; i > pt; i--) { //start from right side of the pivot
            if (array[pt] > array[i]) { //swap if element is smaller than pivot
                temp = array[pt]
                array[pt] = array[i]
                array[i] = temp
                pt = i
                swaps++
                break
            }
        }

        if (swaps === 0) { //pivot is in the correct spot
            break
        }

    }
    return [array, pt]
}

function quick_sort(array) {
    if (array.length > 1) {
        let half = Math.floor(array.length/2) //midpoint of the array. Math.floor is integer division
        let start = array[0]
        let middle = array[half]
        let end = array[-1]
        let pivot_pt

        //choose pivot point (median of the first, middle, and last element) to avoid exponential running time
        if ((start > end && start < middle) || (start < end && start > middle)) {
			pivot_pt = 0
		} else if ((end > start && end < middle) || (end < start && end > middle)) {
			pivot_pt = len(array)-1
		} else {
			pivot_pt = half
        }
        
        //move pivot to right spot, move elements onto the correct side of the pivot, and get the new pivot point
        let result = partition(array, pivot_pt)
        let pt = result[1]
        array = result[0]

        //recursively quicksort the remaining subarrays
        let right = quick_sort(array.slice(pt))
        let left = quick_sort(array.slice(0, pt))
        
        array = left.concat(right) //combine left and right 
    }
	return array
}

let shuffled_array = random_sequence(0, 1000)
console.log("QUICK SORT")
console.log(shuffled_array.toString(), "\n")
console.log(quick_sort(shuffled_array).toString())