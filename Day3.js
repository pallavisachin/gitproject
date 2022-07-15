let x = 100 
x = 30
console.log(x)

// const g = 100
// console.log(g)
// g = 300
let a1 = 100
let b1 = 55

console.log(a1+b1)
console.log(a1-b1)
console.log(a1*b1)
console.log(a1/b1)
console.log(b1%a1)


let y = 50
let r = 20


console.log(y+r)
console.log(y-r)
console.log(y*r)
console.log(y/r)
console.log(y%r)



function cal(x,y){

    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}

cal(5,5)
cal(20,14)
// function 

// function without parameter and without return type


function add(){
    console.log(14+14)
}
add()
add()



// function with parameter and without return type
function sub(x,y){
    console.log(x-y)
}

sub(40,10)
sub(30,5)

//function with parameter and with return 
// 1000 display 
// 1000 given

// function with parameter and with return type 


function mul(x,y)
{
    return x * y           
}
let rrr = mul(100,10)
console.log(rrr)
console.log(rrr+100)
console.log(rrr*0.10)


/************/

function namey(word){
    console.log("welcome "+ word)
    return 5 * 5
}

namey("pallavi")
let pp = namey("sachin")
console.log(pp)

// program One 

// function declaration 
function add3(x,y)
{
    return x+ y
}

let ss = add3(12,13)
console.log(ss)


// function expression

let add5 = function (x,y){                        // // function expression use function keyword
    return x+ y
}
let ss1 = add5(10,20)
console.log(ss1)


// arrow function                               // use ARROW IN ARROW FUNCTION =>

let add7 =  (x,y)=>{
    return x+ y
}

let CC = add7(50,50)
console.log(CC)