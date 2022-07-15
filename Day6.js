 
 
 let arra  = ["Pallavi","sachin","savi"]
 console.log (arra[0])
 let aa=arra.push("sagar")
 console.log(arra)

 let bb=arra.unshift("pratiksha")
 console.log(arra)

let cc= arra.pop("sagar")
console.log(arra)

let dd= arra.shift("pratiksha")

 let ee=arra.sort()
 console.log(ee)

 let ff=arra.includes("sachin")
 console.log(ff)
 let gg=arra.includes("pratiksha")
 console.log(gg)
 let hh=arra.indexOf("pallavi")
 console.log(hh)
 let ii=arra.reverse()
 console.log(arra)

 //let arr = [[11,22,33,44],[33,44,55,66],[66,77,88]]
 //arr.flat()


//program 1 ============> calculate Age

 //           0     1   2    3
let array = [1995,1998,1996,2001]
let age = []

for(let i = 0 ; i < array.length ; i++)
{
   let ag = 2022- array[i] 
   age.push(ag)
}
console.log(age)
console.log("------------------------")

 //program 2 ==================>above 50 element display
 let zz=[20,39,45,67,78,99]
 let qq=[]
//console.log (zz[i])

for(let i=0; i<zz.length;i++)
{
    if(zz[i]>50)
    {
qq.push(zz[i])
    }
}
console.log(qq)

console.log("------------------------")
//  program 3 =========> calculate sum

let total = [11,22,33,44,55,66]
let sum = 0
for(let i = 0 ; i < total.length ; i++)
{
    sum = sum +add[i]
    
}
console.log(sum)



// function declaration
function add(x,y){
    console.log(x+y)
}

add(12,13)


let add2 = function (x,y){
    console.log(x+y)
}

// add2(12,13)

// let x = 10
// console.log(add2)

function addition2(fn){

    // let fn = function (x,y){
    //     console.log(x+y)
    // }

    fn(12,13)

}

addition2(add2)
//add2(11,22)