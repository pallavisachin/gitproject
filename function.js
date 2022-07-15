// Number as parameter to function 

function addition (x,y)
    {
        return x+y
    }
  let sum1=  addition(20,20)
  console.log(sum1)




  // string as paramter to function


  //vovels========a,e,i,o,u
function countVowel(word)
{
    let count=0

    for(let j=0;j<word.length;j++)
    {
        
        word[j]=word[j].toLowerCase()

        if(word[j]=="a" || word[j]=="e" || word[j]=="i" || word[j]=="o" || word[j]=="u")
        {
            count= count + 1
        }
    }
    return count
}
let totalCount= countVowel("pallavi")
console.log(totalCount)

let totalCount1= countVowel("sachin")
console.log(totalCount1)


//--------------------------------//
// string are immutable , cannot chaneg single characrter

let name= "pallavi"
console.log(name[0])
name [1]="s"
console.log(name)

name = "sachin"
console.log(name)

console.log("--------------------------------------------")

// Array as parameter to function

let numbers = [ 1,2,3]
function total(arr)
{
    arr[1]=4                                               // behind the scene numbers=arr
    console.log(arr)
}
console.log(numbers)
total(numbers)
console.log(numbers)
console.log("_________________________________-")

let marks= [2,3,4,5]
function sum(arr)
{
 let total= arr.reduce(function(acc,el)
  {
    return acc+el                                                              // 
  },0)
return total
}
let ss=sum(marks)
console.log(ss)

// object as parameter to another function

let person= {
    firstName:"pallavi",
    lastName:"bhand",
}
function display(per)
{
    console.log(person)
    per.lastName="ransing"
     console.log(per)
}
console.log(person)
display(person)
console.log(person)
//_____________________________________________________________________________
let student ={
    fullname: "sahin ",
    lastname:"bhand",
    roll_no: 11
}
function display1(obj){
 for(let key in obj){

    console.log(key,student[key])
}

}
display1(student)

























