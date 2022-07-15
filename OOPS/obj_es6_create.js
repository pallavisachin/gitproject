//object

let pallavi = {
    firstName: "pallavi",
    lastName: "Ransing",
    age: 25,
    roll_no: 16,
    display: function () {
        console.log("full name is  " + this.firstName + " " + this.lastName)
    }

}

let sachin = {
    firstName: "sachin",
    lastName: "Bhand",
    age: 26,
    roll_no: 166,
    display: function () {
        console.log("full name is  " + this.firstName + "  " + this.lastName)
    }

}
console.log(pallavi)
pallavi.display()
console.log(sachin)
sachin.display()



// using function constructor

let Employee = function (emp_name, emp_age, emp_exp) {
    this.name = emp_name
    this.age = emp_age
    this.experiance = emp_exp
    // this.display = function () {
    //     console.log(this.emp_name+this.emp_age)
    // }

}

Employee.prototype.display = function () {
    console.log(this.name + " " + this.age)
}
let pallavi1 = new Employee("pallavi", 25, 5)
let sachin1 = new Employee("sachin", 26, 5)
let pratiksha = new Employee("pratiksha", 21, 3)

console.log(pallavi1)
pallavi1.display()

console.log(sachin1)
sachin1.display()
pratiksha.display()
console.log(pratiksha)


//console.log(Employee.prototype === pallavi1.__proto__)
//console.log(sachin1 instanceof (Employee))
Employee.prototype.emp_lang = "marathi"
console.log(pallavi1.hasOwnProperty("name"))
console.log(pallavi1.hasOwnProperty("emp_lang"))



 // Es6 class


 class Student {
constructor(fn,ln,ag,roll_no){
    this.firstName = fn
        this.lastName = ln
        this.age =  ag
        this.roll_no = roll_no
}
display(){
    console.log(this.firstName + " "+ this.lastName)
}
 }

 let samir =new Student("samir","Bhand",23,34)
 console.log(samir)
 samir.display()
 console.log(samir.__proto__ === Student.prototype)


 let pallavi_1 = Object.create({}) // _proto_
console.log(pallavi_1)             // empty object create


pallavi_1.firstName="pallu"
pallavi_1.lastName="Bhand"
pallavi_1.age=25
pallavi_1.roll_no=34
console.log(pallavi_1)

//___________________________________________________________-

let pro ={
    display:function(){
        console.log(this.name + " "+this.lastName)
    },


pro1:function(name,ln,age){
    this.name = name
    this.lastName = ln
    this.age = age 
}
}

let sanchit =Object.create(pro)
sanchit.pro1("sanchit","kulkarni",22)
console.log(sanchit)
sanchit.display()