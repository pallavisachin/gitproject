// string as a parameter to function


let students=["pallavi","sachin","savi"]
let stud=students
stud.push("sagar")
console.log(students)
console.log(stud)

let information={
    firstName:"Sachin",
    rollNumber:55,

}
console.log(information)
information.firstName=("pallavi")
console.log(information)
let info=information
console.log(info)


// string as a parameter to function

function name(word)
{
    console.log("welcome "+word)

}
name("Pratiksha")


//array as parameter to function

let array=[11,22,33,44,55,66,77]
function total(arr)
{
console.log(arr)
arr[0]=99
console.log(arr)
}

console.log(array)
total(array)
console.log(array)

 // Array as parameter to Another Function


let p =[1,2,3]
function sumall(s)
{
   let q = s.reduce(function(acc,el)
    {
       return acc + el  
    },0)

    return q
}
let r=sumall(p)


console.log(r)

    



// Object as parameter to function



let employee={

    FullName:"sachin",
    Employee_number:77
}


let empl = employee                                          //same memory point but address change

function info1(empl){
    empl.FullName="sagar"
    console.log(empl)
    return empl
}

console.log(employee)
let dd=info1(employee)
console.log(dd)
console.log(employee)