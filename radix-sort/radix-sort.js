function random_sequence(minimum, maximum) { //returns a shuffled array
    array = []
    for (i = minimum; i < maximum; i++) { //create array and append numbers to it
        array.push(i)
    }
    array.sort(() => Math.random() - 0.5) //shuffle the array
    return array
}

function counting_sort(array, exp) {
    //create array with zeros
    let count = []
    for (i = 0; i < Math.max(...array)+1; i++) {
        count.push(0)
    }

    for (i = 0; i < array.length; i++) { //iterate through given array, and add 1 to the index which is the value of array[i]
		count[digit(array[i], exp)] ++
	}

	for (i = 1; i < count.length; i++) { //go through array and add previous index's value to the current index
		count[i] += count[i-1]
    }
    
    //create output array filled with null
    let output = []
    for (i = 0; i < array.length; i++) {
        output.push(null)
    }

    //iterate through array and turn null types into sorted values
    for (i = array.length-1; i > -1; i--) {
        output[count[digit(array[i], exp)]-1] = array[i]
        count[digit(array[i], exp)] --
    }

    return output
}

function digit(number, n) { //indexes integer without type conversion (e.g digit(253, 1) returns 5)
    return Math.floor(number / 10**n) % 10
}

function seperate(array, digit) {
    digit = 10 ** digit
    let output = []
    let counter = 0
    let minimum = Math.min(...array).toString().split('')
    for (i = 0; i < minimum.slice(1).length; i++) {
		minimum[i+1] = '0'
    }
    minimum = Number(minimum.join(''))
    let beg
    for (i = minimum+digit; i < Math.max(...array)+digit+1; i += digit) {
        beg = counter
        while (counter <= array.length) {
            if (counter === array.length || array[counter] >= i) {
                if (counter - beg > 0) {
                    output.push(array.slice(beg, counter))
                }
                break
            }
            counter++
        }
    }
    return output
}

function radix_sort(array, digit, mode) {
    //console.log(array)
    if (mode === "lsd") {
        for (eye = 0; eye < Math.max(...array).toString().length; eye++) {
            //for some stupid reason i won't work as a variable so I used eye because it takes too much willpower to use another vairable
            array = counting_sort(array, eye)
        }
        return array

    } else if (mode === "msd") {
        if (digit == null) {
            digit = Math.max(...array).toString().length-1
        }
        output = []

        if (digit >= 0) {
            array = counting_sort(array, digit)
            array = seperate(array, digit)
            array.forEach(i =>
                output = output.concat(radix_sort(i, digit-1, "msd"))    
            )
        } else {
            output = array
        }
        //console.log(output)

        return output

    } else {
        return radix_sort(array, null, "lsd")
    }
}

let shuffled_array = random_sequence(0, 1000)
console.log("RADIX SORT")
console.log("[" + shuffled_array.toString() + "]", "\n")
console.log("[" + radix_sort(shuffled_array, null, "msd").toString() + "]")