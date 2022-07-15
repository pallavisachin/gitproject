//-------------------------------------------if---------------------------------------------//

let marks = 38

if(marks > 75)
{
    console.log('you got Distinction ')
}
if(marks > 60 && marks <=75)
{
    console.log('you got Firstclass')
}
if(marks >40 && marks <=60)
{
    console.log('you got secondclass')
}
if(marks < 40)
{
    console.log('your are failed')
}

//-------------------------------------------------------------if else if-----------------------------------//
 marks=  78
if(marks > 90)
{
    console.log('you got A grade')
}
else if(marks > 60 && marks <=90)
{
    console.log('you got B grade')
}
else if(marks < 60)
{
    console.log('you got C grade')
}
else{
    console.log('hello')
}

//------------------------------------------------------------------switch----------------------------//
// let city= "nashik"

// switch(city){
//         case "pune" :
//         console.log('MH12')
     
//         case "solapur" : 
//         console.log('MH13')

//         case "Ahamadnagar" : 
//         console.log('MH16')
        
//         case "nashik" : 
//         console.log('MH15')

//         case "Baramati" : 
//         console.log('MH42')
//         default :
//         console.log('please enter correct city')
// }
console.log("------------------------------------------------")
let city= "pune"

switch(city){
        case "pune" :
        console.log('MH12')
        break
        case "solapur" : 
        console.log('MH13')
        break
        case "Ahamadnagar" : 
        console.log('MH16')
        break
        case "nashik" : 
        console.log('MH15')
         break
        case "Baramati" : 
        console.log('MH42')
        break
        default :
        console.log('please enter correct city')
}
//------------------------------------------------------------------for loop----------------------//

for(let i=0; i<3;i++)
{
    console.log(i)
}
console.log("------------------------------------------------")
for(let i=10;i>=0;i--)
{
    console.log(i)
}
console.log("------------------------------------------------")
// let k=0
// for(;k<5;)
// {
// console.log(k)
// k++
// }


//---------------------------------break--------------------------------
console.log("------------------------------------------------")
for(let i=0; i<5;i++)
{
    if(i==2)
    {
        break
    }
    console.log(i)
}

console.log("------------------------------------------------")
//----------------------------------------continue--------------------------
for(let i=0; i<5;i++)
{
    if(i==2)
    {
        continue
    }
    console.log(i)
}