let Name = "pallavi"
let i = Name.length
console.log(i)

let flower = "rose"
let a = flower.toUpperCase()
console.log(a)

let aa = flower.toLowerCase()
console.log(aa)

let aaa = flower.includes("o")
console.log(aaa)

let aaaa = flower.includes("p")
console.log(aaaa)

let a5 = flower.indexOf("s")
console.log(a5)

let a6 = flower.indexOf("o")
console.log(a6)

let state = " Goa"
state.trimStart()
state = "Goa "
state.trimEnd()
state = " Goa "
state.trim()




// reverse the string 

let nName = "sachin"
let revStr = " "
for(let i = 0 ; i < nName.length ;i++)
{
revStr =  nName[i] + revStr
    
}
console.log(revStr)


let revStr2 = ""
for(let i = nName.length-1 ; i >= 0 ;i--)
{
    
    revStr2 =  revStr2 + nName[i]
        
 }
 console.log(revStr2)


 let pp = 10
 let ss = 20 
 let cc = "sachin"
 
 console.log(pp+ss+cc) 
 console.log(cc+ss+pp)
 console.log(ss+pp+cc)

 let lastName = "bhand"
  // 0 1 2 3 4

  // b h a n d

 //-4 -3 -2 -1

 console.log(lastName.slice(1,4))
 console.log(lastName.slice(4))
 console.log(lastName.slice(-3))
 console.log(lastName.slice(1,-3))
 console.log(lastName.slice(-4,-1))
 console.log(lastName.slice(-3,-1))

 lastName = "Ransing"

let qqq = lastName.startsWith("R")
console.log(qqq)

let qqqa = lastName.startsWith("Ra")
console.log(qqqa)


let qqqb = lastName.endsWith("ng")
console.log(qqqa)

let qqqba = lastName.endsWith("g")
console.log(qqqa)


console.log(lastName.charAt(0))
console.log(lastName.charAt(5))
 
 let infor="pallavi-sachin-bhand"
 let g1= infor.split("-")
console.log(g1)

let infor1="pallavi"
let ss1=infor1.split("a")
console.log(ss1)