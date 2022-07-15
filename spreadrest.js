function addition(...arr)
{
    console.log(arr)
    let add = arr.reduce(function(acc,el)
{
   return  acc+el
        
    
},0)
return add
   }
 let add2=  addition(34,6,7,95,43,22,11)
 console.log(add2)
//_____________________________________________________________________________

 // function filter values
 //let pp = [22,34,45,56,67,78]

 function filterValues(b,...bbb){
let vv = bbb.filter(function(el){
  return  el> b
})
return vv

}

let values = filterValues(22,33,43,21,11,12,13)
console.log(values)


//spread operator

let number = [11,34,56,78,98,33]

function sum(a,b,c,d,e){
    console.log(a+b+c+d+e)
}

sum(...number)

