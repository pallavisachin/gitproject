// variables: in Javascript 3 types of variable
//  1) var -- global scope
//  2) let -- local scope
//  3) const -- constant 

const pi = 3.14
console.log(pi)
// pi = 3                // pi=3 not update because pi value is constant
// console.log(pi)

let a = 10
let b = 20
console.log(a) //            output is 10
a = 30
console.log(a) //              output is 30


// console.log("Value of a: " + a)         // output in terminal use console 
// console.log("Value of b: " + b)

 //document.write("Value of a: " + a)     // output in browser use write 
 //document.write("Value of b: " + b)

// alert("Value of a: " + a)              // output in popup box use alert
// alert("Value of b: " + b)

let c = 50
let d = 10
 console.log(c+d)                // 60
 console.log(c-d)                // 40
 console.log(c*d)                // 500
 console.log(c/d)                  // 5

 console.log('--------------------')


 let p = 55
 let q = 11
 
  console.log(p+q)           // 66
  console.log(p-q)           // 44
  console.log(p*q)          // 605
  console.log(p/q)          // 5
 
 // DRY ----- Don't repeat youself  


// Function
 let p1 = 25
 let q1= 5
 
function Arithmetic(p1, q1)
{
    console.log(p1+q1)         // 120
    console.log(p1-q1)         // 40
    console.log(p1*q1)        // 3200
    console.log(p1/q1)        // 2    
}
Arithmetic(p1,q1)
console.log("---------------------")



