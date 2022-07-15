// forEach()

let names = ["pallavi","sachin","sagar"]
let pp = names.forEach(function(el,index,arr){
    console.log(el + ' welcome')
})
console.log(pp)

// find()
let ff = [80,49,56,77,89,99,22,33,44,55,60,77]
let mm = ff.filter(function(el,index,arr){
    return el > 50
})

console.log(mm)

let q1 = ff.find(function(el,index,arr){
    return el > 50                                //first elment show condition
})         

console.log(q1)


// findIndex()
let q4 = ff.findIndex(function(el,index,arr){
    return el > 50
})

console.log(q4)

// every()

let yyy = [11,22,33,44,66,9]
let iii = yyy.every(function(el,index,arr){
        return el > 10
})
console.log(iii)

// some()
yyy = [11,22,33,44,8,22,33,10002]
let bb = yyy.some(function(el,index,arr){
    return el > 1000
})
console.log(bb)


// slice
// splice()

//            0       1         2        3        4
let city1 = ["pune","mumbai","nashik","nagar","solapur"]
//city1.splice(indexN,numberOfelementstobedelected,relp,repl2)

//city1.splice(1,1)
console.log(city1)
city1.splice(1,1,"bhopal")
console.log(city1)

// conact()

// let a = [11,22,33]
// let b = [33,55,66]

// let kkk = b.concat(a)
// console.log(kkk)

// // join()
// let info = ["chinmay","deshpande",7709192441]
// let ppp = info.join('-')
// console.log(ppp)

// // fill()
// //          0    1   2   3   4  5
// let lll  = [100,101,102,112,10,990]
// let ray = lll.fill('chinmay',1,5)
// console.log(ray)
//-----------------------------/

// slice 
//          0     1        2    3     4      5  
let num = [11  ,  22 ,    33,  44 ,   55,    66]
//         -6     -5      -4   -3     -2      -1

let qqqa = num.slice(2)
console.log(qqqa)
let qqq23 = num.slice(-2)
console.log(qqq23)

let qqq33 = num.slice(1,5)
console.log(qqq33)


let qqq44 = num.slice(1,-1)
console.log(qqq44)

let qqq55 = num.slice(-5,-1)
console.log(qqq55)


let qqq66 = num.slice(-1,-4)
console.log(qqq66)