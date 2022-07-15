// number + string = string
// number + number = number
// string + string = string
// string = number = string



let p = "hi"
let q= 34
let r = 22
console.log(p+q+r)
console.log(p+r+q)
console.log(q+r+p)

//-----------------------concat--------------------------------------------

let firstName= "pallavi"
let lastName="bhand"
console.log(firstName + "" + lastName)

//-----------------------------litral interpollution-------------------------


console.log("my first name is "+ firstName +" and my last name is " +lastName)

console.log(`my first name is ${firstName} and my last name is ${lastName}`)



//-----------------------------comparision operator----< > == <= >= != ===
console.log(3==3)
console.log(5 > 3)
console.log(3 < 1)
console.log(3!==3)
console.log(3=='3')
console.log(typeof 3)
console.log(typeof '3')
console.log(3!=='3')


//----------------------------logical operators-----AND-----------------

//   True True = True
//   True False = False
//   false True = false
//   false false = false


//------------------------------------------OR--------------------------

//   True True = True
//   True False = True
//   false True = true
//   false false = false

//-------------------------------------------------NOT------------------------

// True -----> false
//False-------> true



console.log(4 > 6 || 6 =='6')

console.log(4 > 6 && 6 =='6')

console.log(!true)
console.log(!false)

console.log(3*5 >= 15 || false)
//--------------------------------------------------------------//

// //if(condition)
// {
//     //boolean
//     conditon is satisfired then executed
// }

//else{
    //conditon is not satisfired then executed
//}
//--------------------------------------------------------------------//

if(5>7)
{
    console.log("pallavi")
}
else
{
    console.log("sachin")
}



if(9 !=='9')
{
    console.log("pallavi")
}
else
{
    console.log("sachin")
}

//-----------------truthy and falsey value in java script---------------------------------------------//

// TRUE --------> -1,1, 'A' , 6 > 5 
// FALSE---------> Undefined null, 0 NAN, false , 7==='7'


if(undefined)
{
    console.log("welcome")
}
else
{
    console.log("bye")
}


if(null)
{
    console.log("welcome")
}
else
{
    console.log("bye")
}


if(0)
{
    console.log("welcome")
}
else
{
    console.log("bye")
}



if(-1)
{
    console.log("welcome")
}
else
{
    console.log("bye")
}