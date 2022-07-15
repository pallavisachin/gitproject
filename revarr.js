
let arraa = ["Pallavi","sachin","savi"]
console.log (arraa[0])                   //display index of  array element
let aa=arraa.push("sagar")
console.log(arraa)

let bb=arraa.unshift("pratiksha")
console.log(arraa)

let cc= arraa.pop("sagar")
console.log(arraa)

let dd1= arraa.shift("pratiksha")

let ee=arraa.sort()
console.log(ee)

let ff=arraa.includes("sachin")
console.log(ff)
let gg=arraa.includes("pratiksha")
console.log(gg)
let hh=arraa.indexOf("pallavi")
console.log(hh)
let ii=arraa.reverse()
console.log(arraa)



//1 program

let arra=[2001,1996,1995,1998]
let ss=[]
for(let i=0;i<arra.length;i++)
{
    let pp=2022-arra[i]
    ss.push(pp)

}
console.log(ss)

// 2 program  greter than elment 60

let arr=[99,34,45,32,89,56,77]
let qq=[]
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>60)
    {
     qq.push(arr[i])
    }
}
console.log(qq)

// 3 program  


let arra1=["sachin","pallavi","sagar","savi"]

for(let i=0;i<arra1.length;i++)
{
    console.log("welcome "  +arra1[i])
}


//4 program addition of array elment

let dd=[12,13,14,15,16]
let sum=0
for(let i=0;i<dd.length;i++)
{
    sum=sum+dd[i]
}
console.log(sum)









