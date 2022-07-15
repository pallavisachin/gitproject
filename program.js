


class Person {
    constructor(fistName,lastName,city,marks){
        this.fistName=fistName
        this.lastName=lastName
        this.city=city
        this.marks = marks
    }
    calculatePercentage()
    {
        return (this.marks.reduce(function(acc,el){
            return acc+el

        },0)/500)*100

    }

}
let marks =[[78,87,67,81,77],[45,67,82,56,43],[76,56,87,49,88],[55,66,62,78,67],[76,89,34,46,67]]
let student = []
for(let i=0;i<5;i++){
    let per =  new Person (`pallavi -${i+1}`,`Bhand -${i+1}`,`city -${i+1}`,marks[i])
student.push(per)
}
console.log(student)


percentageArray = []
for(let i =0; i<student.length ;i++){
    percentageArray.push(student[i].calculatePercentage())
}
console.log(percentageArray)


//average marks
console.log(percentageArray.reduce(function(acc,el){
    return acc+el
    
},0)/student.length)




// display name of every student

student.forEach(function(el)
{
    console.log(el.fistName)
})

// display lastname of every  student 

student.forEach(function(el){
    console.log(el.lastName)
})


student.forEach(function(el){
    console.log(el.fistName +" " +el.calculatePercentage() )
})


/// highest marks display
console.log(percentageArray)
let h =percentageArray
let minMark = h[0]
let maxMark = h[0]

for(let i=0 ; i<h.length ; i ++)
{
    if(h[i]  < minMark){
        minMark = h [i]
    }
    else if( h [i ] >maxMark){
        maxMark=h [i]
    }
}
console.log(maxMark)
console.log(minMark)

// display student name has max mark


console.log(student.find(function(el){
    return el.calculatePercentage()==maxMark
}).fistName)

// display student name has min mark
console.log(student.find(function(el){
    return el.calculatePercentage()==minMark
}).fistName)


// //ADD roll number 
// let roll_no = [1,2,3,4,5]
// student.forEach(function(el){
//     el.roll_no =roll_no

// })
// console.log(student)





















