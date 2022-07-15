


let addition= function(y,z)
{
    return y+z
}
function addition2(fn)
{
    let sum=fn(44,33)
    return sum
}
let sum1=addition2(addition)
console.log(sum1)

//"------------------------------------------------------"
function display()
{
    return 77
}

let dis = display()
console.log(dis)

//"____________________________________________________________"

function display1()
{
    return "Pallavi Bhand"
}
    
let dis1= display1()
console.log(dis1)

//"___________________________________________________________"

function display2()
{
    return [11,22,33]

}

let dis2=display2()
console.log(dis2[dis2.length-1])


//"___________________________________________________________--"

function display3()
{
    return {
    firstname: "sachin",
    lastName :"bhand",
    city: "pune"
 }
}
let dis3= display3()
for (let key in dis3)
{
console.log(key,dis3[key])
}
//--------------------------------------------------------------------//
function display4()
{
let x= function()
{
    console.log("hiiii")
}
return x
}
let dis4= display4()
dis4()


























