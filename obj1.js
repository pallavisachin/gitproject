let students = [
 {
     fullName : "pallavi Bhand",
     city : "nashik",
     skill: ["javascript","python","html"],
},
{
    fullName : "sachin Bhand",
    city : "pune",
    skill: ["javascript","c++","html","python"],
},

{
    fullName : "pratiksha Ransing",
    city : "solapur",
    skill: ["java","c++","html"],
}
]
for (let key in students) {
    console.log(key, students[key])
}


// probelem 1 change city to pune for pallavi


console.log(students[0])
students[0].city ="pune"

//display number of skills for all users


for(let i=0;i<students.length;i++)
{
    console.log(students[i].fullName + ":" +students[i].skill.length)
}

//---------------------------------for each---------------------------------//
students.forEach(function(el)
{
    console.log(el.fullName+":"+el.skill.length)
}
)
// Name of person belong to city solapur

students.forEach(function(el){
    if(el.city == "solapur"){
        console.log(el.fullName)
    }
})

//-----------------------------------------------------------------//
let ss = students.filter(function(el)
{
return el.city=="pune"
})
ss.forEach(function(el)
{
    console.log(el.fullName)
})


// person belongs to pune  and knows python
let gg = students.filter(function(el)
{
    return el.city=="pune"&& el.skill.includes=="python"
}
)

gg.forEach(function(el)
{

    console.log(el.fullName)
}
)