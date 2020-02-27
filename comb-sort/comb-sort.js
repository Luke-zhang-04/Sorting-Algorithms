function random_sequence(minimum, maximum) { //returns a shuffled array
    array = []
    for (i = minimum; i < maximum; i++) { //create array and append numbers to it
        array.push(i)
    }
    array.sort(() => Math.random() - 0.5) //shuffle the array
    return array
}

function nextGap(gap) {
    gap = Math.floor((gap * 10)/13)
    if (gap < 1) {
        return 1
    }
    return gap 
}

function comb_sort(array) {
    let gap = array.length
    let swapped = true
    let swap = null
    while (gap > 1 || !swapped) {
        gap = nextGap(gap)
        swapped = false

        for (i = 0; i < array.length-gap; i ++) { //iterate through whole array
            if (array[i] > array[i + gap]) { //swap if needed
                swap = array[i]
                array[i] = array[i + gap]
                array[i + gap] = swap
                swap = null
                swapped = true
            }
        }
    }
    return array
}

let shuffled_array = random_sequence(0, 1000)
console.log("COMB SORT")
console.log(shuffled_array.toString(), "\n")
console.log(comb_sort(shuffled_array).toString())