// object 

let amol = {
    firstName:"amol",
    lastName:"rao",
    age:23,
    rollNo:23,
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}

let chinmay = {
    firstName:"chinmau",
    lastName:"deshpande",
    age:33,
    rollNo:44,
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}

console.log(amol)
console.log(chinmay)


// function construction 


let Person = function(firstName,lastName,age ,roll){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.rollNo = roll
    // this.display = function(){
    //     console.log(this.firstName + this.lastName)
    // }
}
let amol2 = new Person("amol2","rao2",22,33)
let chinmay2 = new Person("chinmay2","deshpande2",22,33)
console.log(Person.prototype === amol2._proto_)
console.log(amol2 instanceof(Person))
Person.prototype.display = function(){
    console.log(this.firstName + this.lastName)
}
Person.prototype.lang = "hindi"

amol2.display()
chinmay2.display()
console.log(amol2)
console.log(chinmay2)

console.log(amol2.lang)
console.log(chinmay2.lang)

console.log(amol2.hasOwnProperty('lang'))
console.log(amol2.hasOwnProperty('firstName'))

// Es6 class

// let Person3 = class {

// }


// set object property outside class 
// at the time of object creation using construtor
// using set

class Person2  {
    constructor(firstName , lastName , age , roll){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age 
        this.rollNo = roll
        // this.display = function(){
        //     console.log(this.firstName + this.lastName)
        // }
    }

   display(){
       console.log(this.firstName + this.lastName)
   }

}

let amol3 = new Person2("amol3","rao3",23,44)
let chinmay3 = new Person2("chinmay3","chinmay3",23,45)

console.log(amol3)
console.log(chinmay3)
console.log(amol3._proto_ === Person2.prototype)

// Object.create method

// object literal 
// function constructor 
// es6 class
// Object.create()



let amol4 = Object.create({}) // _proto_
console.log(amol4)

amol4.firstName = "amol4"
amol4.lastName = "rao4"
amol4.rollNo = 13
amol4.age = 44
console.log(amol4)

//---------------------------------//
let proto = {
    display:function(){
        console.log(this.firstName +  this.lastName)
    },
    init:function(fn,ln,roll,age){
        this.firstName = fn
        this.lastName = ln
        this.age = age 
        this.roll = roll
    }
}

let amol5  = Object.create(proto) 
amol5.init("amol5","rao2",12,34)
amol5.display()

 
// jvascript -- object ---- _proto_ === parent.protype