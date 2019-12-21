function random_sequence(minimum, maximum) {
    array = []
    for (i = minimum; i < maximum; i++) {
        array.push(i)
    }
    array.sort(() => Math.random() - 0.5);
    return array
}

function bubble_sort(array) {
    let swaps
    let temp
    while (true) {
        swaps = 0
        for (i = 0; i < array.length; i++) {
            if (array[i] > array[i+1]) {
                temp = array[i+1]
				array[i+1] = array[i]
                array[i] = temp
				swaps ++
            }
        }
        if (swaps === 0) {
            break
        }
    }
    return array
}

let shuffled_array = random_sequence(0, 100)
console.log(shuffled_array.toString())
console.log(bubble_sort(shuffled_array).toString())