let array =[1,2,3,4]
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])

let a =array[0]
let b =array[1]
let c =array[2]
let d =array[3]

console.log(a)
console.log(b)
console.log(c)
console.log(d)

//-----------------------------------------------------------------------------
let array1 =[21,22,23,24]
let [a1,b1,c1,d1]=array1

console.log(a1)
console.log(b1)
console.log(c1)
console.log(d1)

//-------------------------------------------------------------------------------


let names = ["pallavi","sachin","pratiksha"]

let  = [a2,b2,c2] =names
console.log(a2)
console.log(b2)
console.log(c2)

//------------------------------------------------------------------------------------
//-----------------------------------------object-------------------------------------

let students={
stuname: "pallavi",
stud_lastname:  "bhand",
stud_age:"26"
}
//console.log(stuname)
//console.log(stud_lastname)
//console.log(stud_age)

let {stuname :sname, stud_lastname :lastname, stud_age:age} =students

console.log(sname)
console.log(lastname)
console.log(age)

//---------------------------------------------------------------------//

let employe = {

    firstName:"sachin",
    lastName:"bhand",
    skills:["c++","corejava"],
}
let {firstName:fn,lastName:ln,skills:[aa,bb]} = employe
console.log(fn)
console.log(ln)
console.log(aa)
console.log(bb)

//-----------------------------------------------------------------------------//

let city = [["solapur","pune"],["nagar","nashik"]]
let [[p,q], [r,s]]=city
console.log(p)
console.log(q)
console.log(r)
console.log(s)

//------------------------------------------------------------------------//

let college= {
department1:{
    sname1:"pratiksha ransing",
    roll_number :12
},
department2: {

    sname1:"pallavi ransing",
    roll_number :13
}
}
let {department1 :{sname1:s1, roll_number :s2},department2: { sname1: s3,roll_number :s4 }} = college

console.log(s1)
console.log(s2)
console.log(s3)
console.log(s4)
//__________________________________________________________________________________________//

// spread operator and rest operator 

function addition(...arr)
{
    let sum = arr.reduce(function(acc,el,index,arr)
    {
        return acc+el
    },0)

   return sum
}

let sum1 = addition(1,2)
console.log(sum1)






//---------------------------------------------------------------------------------


















