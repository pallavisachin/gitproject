// object literal

let pallavi = {

    firstName:"pallavi",
    lastName:"bhand",
    age : 25
}


let sachin = {

    firstName:"sachin",
    lastName:"bhand",
    age : 26
}
let pratiksha = {

    firstName:"pratiksha",
    lastName:"ransing",
    age : 21
}
// template , blue print ===> object by defining class
// setting the value outside the class


class employee  {

firstName = undefined
lastName = undefined
age= undefined
rollno= undefined

}

let employ = new employee ()
console.log(employ)
employ.firstName = "pallavi"
employ.lastName = "Bhand"
employ.age = 25
employ.rollno = 22
console.log(employ)


// constructor are used to set the property value at the time of object

class employee2 {
 
    constructor(fn,ln,ag,rn)
    {
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.rollno = rn
    }
}
let employ2 = new employee2("sachin","bhand",26,12)
console.log(employ2)



// BY using set method
// set does not store the duplicate value
class employee3 {

setFirstName(fn)
{
    this.firstName = fn
}
setLastName(ln){
    this.lastName = ln
}
setAge (ag)
{
this.age= ag
}
}

let employ3 = new employee3()
//console.log(employ3)
employ3.setFirstName("pallavi")
employ3.setLastName("ransing")
employ3.setAge(26)
console.log(employ3)


// set does not store the duplicate value



//let setA = new setInterval([11,22,33,44,55,44])
//console.log(setA)

let setA = new Set([11,22,33,44,55,11])
console.log(setA)

let aa= setA.size
console.log(aa)

//adding the elment in set
setA.add(66)
console.log(setA)

// delete th elment in set
setA.delete(66)
console.log(setA)

// elment search then find has
let bb = setA.has(1111)
console.log(bb)

let cc = setA.has(11)
console.log(cc)


setA.clear()
console.log(setA)


let setD = new Set([1,2,3,4,5,6])
console.log(setD)

for(let item of setD){
    console.log(item)
}





// Map

let mapA = new Map()
let ar = new Array() // let r = [1,2,3]
let an = new String() // let f = "PALLAVI"
let on = new Object() // let a = {}

// mapA ==> object property and method


console.log(mapA.size)
//mapA.set(key,value)



mapA.set([1,2,3,4,5,6,7],"marks")
console.log(mapA)

mapA.set(true,"isadult")
console.log(mapA)

let ff = mapA.has(true)
console.log(ff)



 //mapA.clear()
// console.log(mapA)
console.log(mapA)

mapA.delete(true)
console.log(mapA)






let mapH = new Map([
    [1,"srnumber"],
    ["color","red"],
    [true,"ismarried"],
    [{a:"s",b:"q"},33]

])
console.log(mapH.size)

for(let a of mapH.keys()){
    console.log(a)
}


for(let a of mapH.values()){
    console.log(a)
}


for(let [key,val] of mapH.entries()){
    console.log(key,val)
}