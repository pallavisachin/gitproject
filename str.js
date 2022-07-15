let name = "pallavi"
let lastName = " Bhand"
let middleName =" sachin"
console.log(name,lastName,middleName)


let name1= "pallavi"
console.log(name1[0])
console.log(name1.length)
console.log(name1[name1.length-1])

let name2 = "SACHIN"
console.log(name2[2])
for(let i= 0; i<name2.length ;i++)
{
    console.log(i)
    console.log(name2[i])
}


let namey = " sachin"
let pp = namey.toUpperCase()
console.log(pp)

let namey1 = " sachin"
let ss = namey1.toLowerCase()
console.log(ss)
console.log(typeof ss)
//-------------------------------------------------------------------------//
let namey2 = "sachin"
let rr = namey2.includes("ch")
console.log(rr)

let namey3 = "pallavi"
let zz = namey3.startsWith("p")
console.log(zz)

let namey4 = "pallavi"
let gg = namey4.endsWith("vi")
console.log(gg)

//--------------------------------------------------------------------------//


let name7 =" sachin"
console.log(typeof name7)

let d = [1,2,3]
console.log(typeof d)


let  firstName =" pallavi"
console.log(firstName.length)
let sss= firstName.trimStart()
console.log(sss)
console.log(sss.length)


let  firstName1 ="pallavi "
console.log(firstName1.length)
let kk= firstName1.trimEnd()
console.log(kk)
console.log(kk.length)



let  firstName2 =" pallavi "
let hh = firstName.indexOf("v") 
console.log(hh)
console.log(typeof hh)
console.log(firstName2.length)
let kkk= firstName2.trim()
console.log(kkk)
console.log(kkk.length)