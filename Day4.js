// number' Array 

let numbers = [11,22,33,44]

//              0  1  2  3       // aray position
//   numbers = [11,22,33,44]      // Array Element

console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[2])
console.log(numbers[3])
//--------------------------------------->
// loop


let number = [11,22,33,44,55,66,77,88,99]

// for(let i = 0 ; i < 5 ; i++ )
//{                                                      //  1 2 ===> 5  loop 
//     console.log(i)                                  // 0 , 1 ,2 ,3,4  Display Array position 
// }

// for(intialization ; condition; increment/decremt){
//     // statements
// }



// object =>  properties and Method

// human 
// properties  : age , weight , height , hands 
// methods  : walk() , talk(), sleeping()


// vehicle 
//  properties : - color , regNo , wheel , steering 
//  method : start() stop()

// bank 
// properties : accNo , accName , bal 
// method : depoist() withdrawl()


let namey = ["pallavi","sachin","savi","sanchit"]
let count = namey.length
console.log(count)
// methods 
//action

// return 

//Method --         1) push 
// action -        adds the element at last of array 
// return --       new lenth of array 

let city = ["solapur","pune","kolhapur"]
console.log(city.length)
let p = city.push("ahmadnagar")
console.log(city)
console.log(p)


//Method -         2) unshift()
// action -        adds the element at the start of array 
// return -           new length of  array


//[ "solapur","pune","kolhapur" ]

let ss = city.unshift("sangali")
console.log(city)
console.log(ss)

//Method               3) pop()
// action -           removes the last element of array 
// return -           same element

let zz = city.pop()
console.log(city)
console.log(zz)


// method            4) shift()
// action -          removes the first element of array  
// return -          same element


let gg = city.shift()
console.log(city)
console.log(gg)