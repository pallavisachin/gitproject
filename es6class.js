

// let Emp = function(fn,ln,ag){
//  this.fullname=fn
//  this.lastname=ln
//  this.age= ag
// }


// Emp.prototype.displayLastname=function(){

// console.log(this.lastname)
// }
// let pallavi = new Emp("pallavi","bhand",12)
// console.log(pallavi)

// pallavi.displayLastname()

// console.log("************************************")

// class Emp1 {
//     constructor(fn,ln,ag){
//         this.fullname= fn
//         this.lastname = ln
//         this.age=ag
//     }
//     displayName()
//     {
//         console.log(this.fullname)
//     }
// }
// let sachin = new Emp1("sachin","bhand",26)
// console.log(sachin)
// sachin.displayName()

console.log("************************************")


//es6 class

// class vehicle {
//     color= undefined
//      regno = undefined
//      city = undefined
// }
// let car = new vehicle()
// //console.log(car)
// car.color= "white"
// car.regno = 123
// car.city= "pune"
// console.log(car)
console.log("************************************")

//----------------------- using constructor------------------------------------



class Vehicle1 {
     constructor(cl,rgno, cy){
         this.color= cl
         this.regeno= rgno
         this.city= cy
     }

}
let creta = new Vehicle1("red",12345,"solapur")
console.log(creta)

//--------------------------------set Methos-----------------


class Vehicle3 {
    setcolor (cl){
        this.color=cl
    }

    setRegeno (rno){
        this.setRegeno=rno
    }

    setCity (cy){
        this.city =cy
    }
}

let honda = new Vehicle3()
console.log(honda)
honda.setcolor="orange"
honda.setRegeno=345
honda.city="solapur"
console.log(honda)


//-------------------------ES6------------------------------

class Bank {
    constructor (accName ,accNo,city, bal){
        this.accName= accName
        this.accNo=accNo
        this.city= city
        this.bal =bal
        this.transaction= []
 }


depoist(amount)
{
    this.bal= this.bal+amount
   this.transaction.push(amount)
return  this.bal
}

withdrawl(amount){
   if( this.bal  > amount){
       this.bal= this.bal- amount
       this.transaction.push(-amount)
       return this.bal
   }
   else{
       console.log("insufficent balance")
   }
}
lastFiveTransaction(){
    console.log(this.transaction.slice(-5))
}
}

let cus1= new Bank("Pallavi Bhand", 567,"pune",10000)
console.log(cus1)
cus1.depoist(1000)
cus1.depoist(500)
cus1.withdrawl(200)
cus1.depoist(5000)
cus1.withdrawl(2000)
cus1.depoist(1000)
cus1.withdrawl(700)
cus1.depoist(500)
cus1.withdrawl(200)
cus1.lastFiveTransaction()



































