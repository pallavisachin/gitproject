// program  One 


let age = [11,22,33,44,55]
let birthYear = []
for(let i = 0 ; i < age.length ;i++){
    let year  =  2022 - age[i]
   birthYear.push(year)

}
console.log(birthYear)

// map alternative method to calculate birthyear

let pp = age.map(function(el,index,arr)
{
    return 2022 - el
})
console.log(pp)

//program ========>array multiply by 2 then output is this [2,4,6,8,10,12,14,16,18,20]
let arr = [1,2,3,4,5,6,7,8,9,10]
let kk = arr.map(function(el,index,arr){
    return el * 2
})
console.log(kk)


// program > than 50 element

let hh = [11,33,66,22,84,55]
let above50 = []

for(let i = 0 ; i < hh.length ; i++)
{
    if(hh[i] > 50){
        above50.push(hh[i])
    }
}
console.log(above50)
//alternative method filter()

let ttt =
hh.filter(function(el,index,arr){
    return el > 50
})
console.log(ttt)


// program 
let ll = [2,3,4]
let total = 0
for(let i = 0 ; i < ll.length ;i++)
{
    total = total + ll[i]    
}

console.log(total)

//  alternative method reduce()

let sss = ll.reduce(function(acc,el,index,arr){
        return acc + el 
},0)

console.log(sss)