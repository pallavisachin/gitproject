

let students = [
    {
    fullName:"sachin",
        age:26,
        skills:["java","python","c++","html"],
        city:"pune"
    },
    {
    fullName:"pallavi",
        age:25,
        skills:["java","python","sql","c++"],
        city:"solapur"

    },
    {
    fullName:"pratiksha",
        age:19,
        skills:["java","c++"],
        city:"pune"
    }
]

//for(let i = 0 ; i < students.length ; i++){              //display object
   // console.log(students[i])
//}

for(let i = 0 ; i < students.length ; i++)
{
    console.log(students[i].fullName,students[i].skills.length)
}

let pp = students.find(function(el){
    return el.fullName.startsWith('p')
})

console.log(pp)

// sum of average age in students 

let ss = students.reduce(function(acc,el)
{
    return acc + el.age
},0)
console.log(ss/students.length)

// add corejava in skills  
students.forEach(function(el)
{
    el.skills.push('corejava')
})
console.log(students)


// student in sql skill 

let kk = students.filter(function(el)
{
    return el.skills.includes('sql')
})

kk.forEach(function(el){
    console.log(el.fullName)
})
let ff = students.filter(function(el){
    return el.skills.indexOf("python") >= 0

})

ff.forEach(function(el){
    console.log(el.fullName)
})


// age > than 20 and skill is python


let mm = students.filter(function(el)
{
    return el.city.includes("pune") && el.age > 20
})

console.log(mm)


students.forEach(function(el){
    if( el.city === "solapur"  && el.age>=20)
    console.log(el.fullName)
})

//skill is java and age >than 22

let dd=students.filter(function(el)
{
    return el.skills.includes("sql" && el.age>=22)
    console.log(dd)
})