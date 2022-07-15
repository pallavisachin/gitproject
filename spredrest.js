// //----------------------rest parameter---------------------
// // 11,22,33,44,55,66=====> [11,22,33,44,55,66]

// function addition (...arr){
//     return arr.reduce(function(acc,el){
// return acc+el
//     },0)

// }let add= addition(11,22,33,44,55,66,77,88)
// console.log(add)





//spread parameter
//[11,22,33]=====> 11,22,33

let number = [11,12,13,14,15,16]

 function addition1(a,b,c){
     console.log(a+b+c)
 }
addition1(...number)

// //-------------------------------------------------------

// let num1= [1,2,3,4]
//  let num2 = [5,6,7,8]


// let a=[...num1,...num2]
// console.log(a)

// //----------------------------------------------------------
// //for of loop=====>

// let student={
//     name:"pallavi",
//     surname :"Bhand",
//     age: 25
// }

// for(let key in student){
//     console.log(key, student[key])
// }

// // for of for array

// let city = ["pune","solapur","mumbai"]

// for(let item of city){
//     console.log(item)
// }

// // for of for objects


// let person ={
//     firstName : "sachin",
//     lastName : "bhand",
//     age : 26

// }

// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))

// // keys item

// for(let item of Object.keys(person)){
//     console.log(item)
// }

// //values

// for(let item  of Object.values(person)){
//     console.log(item)
// }

// // entries

// for(let [key,value] of Object.entries(person)){
//     console.log(key,value)
// }

// //ternary operator
// let p = 100
// let q= 200
// let s= p >q ? "p is greter": "q is grteater"
// console.log(s)


// aaaa ++
// aa= aa+ 1
//aa+=1
//------------------------------------------------------
//nullish 
//(null or undefined)

const g= null ?? 'default string';
console.log(g);

let bs ;
let ab = bs ?? "hi"
console.log(ab)

let k = 7 === 7 ?? "hiiii"
console.log(k)

let j = 5 === 5 || 9
console.log(j)

let l = 2===2 && 9!==9
console.log(l)



let school ={
    classA :{
        firstName:"ovee",
        lastName: "ponde",
    classB:{
        age : 15
    }
    }
}


console.log(school?.classA?.firstName)



















