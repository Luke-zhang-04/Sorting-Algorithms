import random

#For Generating numbers
lowerBound = 1
upperBound = 1000
numInts = 10

#Base to use for sorting
base = 10

toSort = [random.randint(lowerBound, upperBound) for i in range(numInts)]

#Get the int log by dividing a bunch of times
def simpleLog(n,base):
    log = 0
    while n >= base:
        n//=base
        log += 1
    return log 

def radixSortSimple(array,base):
    currentExp = 0 #The current digit being checked
    keepGoing = True

    while(keepGoing):
        nextStep = [] #makes the array for the next step
        for d in range(base): #for each digit
            for i in range(len(array)): #for each element
                if (array[i]//(base**currentExp))%base == d: #if the elements digit matches the current loop, add it to the array
                    nextStep.append(array[i])
            if nextStep == array: #if the array doesn't change, then it's sorted
                keepGoing = False
                break
        array = nextStep #copy to perserve for next iteration
        currentExp += 1 #increase digit place
    
    return array


def radixSortSameArray(array,base):
    maxDig = 0
    for i in array: #finds how many times to do the sort
        maxDig = max(maxDig, simpleLog(i,base))

    for exp in range(maxDig+1): #for each digit
        limitInd = len(array) #Says what index corresponds to the unsorted part
        for d in range(base): #for each digits
            i = 0
            while i < limitInd: #go up to the limiting index
                while (array[i]//(base**exp))%base == d and i < limitInd: #while the current digit is the one to look for, push it to the back of the array and reduce limitInd
                    array.append(array.pop(i))
                    limitInd-=1
                i+=1 #means we are continuing on from the last index
    
    #This function could return something but the way it is implemented and how the array is passed in,
    #it'll change the values in the actual array. If you don't want this, you can simply copy everything
    #to a new array and return that at the end


print(toSort)
print(radixSortSimple(toSort,base))
radixSortSameArray(toSort,base)
print(toSort)