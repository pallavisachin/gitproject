
// indexOf() , includes() , flat() , sort() , reverse() ,slice()

//indexOf()
// search for the element and return index 
// if element is not found returns -1


let vegetables = ["tomato","ladeyfinger","brinjal","potato","carrot"]
let hh = vegetables.indexOf('potato')
console.log(hh)

// includes()
// search for the element 
// if the element is found returns true else return false

let jj = vegetables.includes('beans')
console.log(jj)
let cc = vegetables.includes('carrot')
console.log(cc)

// sort - 
// action - sort the string array alphabetically 
// return new array

let mm = vegetables.sort()
console.log(mm)

// reverse()
// reverses the array and return reversed

let kk = vegetables.reverse()
console.log(kk)


// flat()
//                0            1          2
//                 0  1  2   0   1  2   0   1 2
let numbersp = [[11,22,33],[44,55,66],[77,88,99]]

console.log(numbersp[0][2])
console.log(numbersp[1][1])

let ll = numbersp.flat()
console.log(ll)