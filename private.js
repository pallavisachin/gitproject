class Employee {
     constructor(fn,ln,age){
         this.firstname = fn
         this.lastname = ln
         this.age = age
     }

updateName(nm){
    this.name= name
}
updateAge(ag){
    this.age = age
}
updateLastName(ln){
    this.ln
}


getName(nm){
    this.name=nm
}
getAge(ag){
    this.age=age
}
getLastName(ln){
    this.ln=ln
}
}
let pallavi = new Employee("pallavi","ransing",25)
console.log(pallavi)


//-------------------------------------------------------------------------//
console.log("------------------------------------------------------------")

const p =100
if(true){
    let aa=10
    console.log(aa)
}
{
let c= 11
}
console.log(p)
//console.log(aa)
//console.log(c)


// function


const display = function(){
let firstName = "pallavi"
let lastName = "Bhand"


let printFullname = function(){
    console.log(firstName + " " +lastName)
}

return printFullname()
}
display()



//--------------------------------------------------------------------//

//closure


function addition (){
    let a= 100
    let b= 200
    return function (){
        console.log(a)
        console.log(b)
        console.log(a+b)
    }
}
let b=addition()
b()




//-----------------------------------------
const printName = function(){
    let firstName ="pallavi"
    let lastName = "ransing"
    let printinfo = function(){
        console.log(firstName + " "+lastName)
    }
    return printinfo
}

printName()()



// constructor

class Emp  {
constructor(){
    let firstName = "sachin"
    let lastName = "Bhand"
    this.prinName = function (){
        console.log(firstName + " "+lastName)
    }
}
}
let s = new Emp()
s.prinName()
//console.log(firstName)


//_
class Student{
    constructor(s_name,s_lastName){
        this._s_name = s_name
        this._s_lastName = s_lastName
        //this.s_age =s_age
        this.display = function(){
            return this._s_name + this._s_lastName
        }
    }
}

let sachin = new Student("PALLAVI" ,"BHAND")
console.log(sachin.display())




















