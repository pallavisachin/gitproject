let pp=[100,234,-56,36,-98]

let withdraw= pp.filter(function(el,index,arr){
    return el < 0

})
console.log(withdraw)
//------------------------------------------filter-----------------------------------
let deposite= pp.filter(function(el,index,arr){
    return el > 0

})
console.log(deposite)
//--------------------------------------reduce------------------------------------//
let p=[12,13,14,15]

let s = p.reduce(function(acc,el,index,arr)
{
    return el + acc
},0)
console.log(s)

//----------------------------------find------------------------------------------//
let c= p.find(function(el,index,arr)
{

return el > 10

})
console.log(c)
//---------------------------------------findIndex----------------------------------

let ll = p.findIndex(function(el,index,arr)
{
   return el > 10
})
console.log(ll)



//-----------------------------------forEach------------------------------------------//
dd = ["pallavi","sachin","savi"]
let hh = dd.forEach(function(el,index,arr)
{
    console.log(el + " welcome")

})
//-----------------------------------map--------------------------------------------------//

let ff = [1,2,3,4,5,6]

let gg = ff.map(function(el)
{
   return  el +5
})
console.log(gg)


let kk = ff.map(function(el)
{
return el *5

})
console.log(kk)

//---------------------------------------every-------------------------------------------------//

let oo = [33,44,55,66,77]
let mm = oo.every(function(el)
{

    return el > 30                           // for all condition satisfied


})
console.log(mm)

//------------------------------------------------some-------------------------------------//


let nn = oo.some(function(el)
{
   return el > 100
})
console.log(nn)
//--------------------------------------------------------------------------------------------//

let xx = [12,14,17,18,19]
//--------------------------------------shift------first element delete--------------------------------------------//

let aa = xx.shift()
console.log(xx)
//--------------------------------------------unshift-   add the first element add----------------------------------------------------//
let bb = xx.unshift(21)
    console.log(bb)
//--------------------------------------------------pop-- last element delete-----------------------------------------------//
let yy = xx.pop()
console.log(xx)
//------------------------------------------------push---at the last element add-------------------------//
let xxx = xx.push(20)
console.log(xx)
//--------------------------------------------------indexof----------------------------------------------------//

let hhh= xx.indexOf(17)
console.log(hhh)

//----------------------------------------------------includes--------------------------------------------------//
//let ggg= xx.includes(18)
let ggg = xx.includes(15)
console.log(ggg)

//----------------------------------------------------------index------------------------------------------------//
for(let i=0;i<xx.length;i++)
{  console.log(i)
    console.log(xx[i])
}


//----------------------------------------------------join-------------------------------------------------------//
        let yyy = ["pallavi","sachin","bhand"]
        let qq=  yyy.join("_")
        console.log(qq)

//----------------------------------------------------sort--------------------------------------------------------//
let g1 =[33,2,67,54,43,22,36]
let rr = g1.sort()
console.log(rr)
//----------------------------------------------------------fill---------------------------------------------------------//

let jj = g1.fill("pallavi",2,6)
console.log(jj)

//----------------------------------------------------------concat------------------------------------------------------//
let a= [1,2,3]
let b= [4,5,6]
let d1=b.concat(a)
console.log(d1)
//------------------------------------------------------------slice-----------------------------------------------------//
        // 0  1  2  3  4  5 6
let num= [11,  22,  33,  44,  55,  66,   77]
      //  -7  -6   -5   -4    -3    -2   -1

let num1=num.slice(4)
console.log(num1)
let num2=num.slice(1,5)
console.log(num2)
let num3= num.slice(-3,-1)
console.log(num3)

let num4= num.slice(-1,-5)
console.log(num4)


//---------------------------------------------------------------
//----------------------------------------------------------















































