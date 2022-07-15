// object literal

let pallavi ={
    firstname:"pallavi",
    lastName : "bhand",
    roll_no : 13
}
console.log(pallavi)


// function constructor 



let Employee = function (fn,ln,ag){
    this.fn= fn
    this.ln = ln
    this.ag= ag
}
let sachin = new Employee ("sachin","bhand",26)
console.log(sachin)




// es6 class

class Emp {
    constructor(fn,ln,ag,city){
        this.fn=fn
        this.ln=ln
        this.ag= ag
        this.city=city
    }
}

let pallavi1 =new Emp("pallavi","ransing", 13,"pune")
console.log(pallavi1)


// object create

let pratiksha = Object.create({})
console.log(pratiksha)

pratiksha.firstname="pratiksha"
pratiksha.lastName ="Ransing"
pratiksha.age = 21
console.log(pratiksha)

// object cretae  method with prototype

let pro= {
    calulate:function(){
        console.log(2022-1996)
    }
}

let prr = Object.create(pro)
//console.log(prr)
prr.calulate()
console.log(prr)
console.log(prr._proto_)



let pro1 = {
    cal(){

    console.log(2022-1996)
    },
    init(firstName,lastName,age,roll){
     this.firstName= firstName,
     this.lastName = lastName,
        this.age=age
         this.roll= roll
}

}
let pal= Object.create(pro1)
pal.init("pallavi1","Ransing",12,23)
console.log(pal)


// static


class Person{
    static pallavi(){
        console.log("welcome to our company")
    }
}
Person.pallavi()



















