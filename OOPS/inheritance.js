console.log('--------------------------------------------------------------------------------')
// // program 1
// value in parent constructor
class student {
    firstname = "pallavi"
    lastname = "ransing"
    rollno = 14
    age = 26

}
let pallavi = new student()
console.log(pallavi)


class Teacher extends student {
    experiance = '5 year'
}
let sachin = new Teacher()
console.log(sachin.firstname)
console.log(sachin.lastname)
console.log(sachin.rollno)
console.log(sachin.age)
console.log(sachin.experiance)

console.log('--------------------------------------------------------------------------------')

// program 2

class Person1 {
    constructor(fn, ln, ag, PANno) {
        this.firstname = fn
        this.lastname = ln
        this.age = ag
        this.Panno = PANno

    }
}

class Employee extends Person1 {
    experiance = "2 years"
}
let sachinB = new Employee("sachin", "Bhand", 26, "ABC12345")
console.log(sachinB.firstname)
console.log(sachinB.lastname)
console.log(sachinB.age)
console.log(sachinB.Panno)
console.log(sachinB.experiance)



console.log('--------------------------------------------------------------------------------')
// program 3
// parent constructor as well as child constructor

class Person_1 {
    constructor(fn, ln, ag, salr) {
        this.firstname = fn
        this.lastname = ln
        this.age = ag
        this.salary = salr
    }
}

class Employee_1 extends Person_1 {
    constructor(fn, ln, ag, salr, exp, sks) {
        super(fn, ln, ag, salr)
        this.experiance = exp
        this.skills = sks
    }
}

let pratiksha = new Employee_1("pratiksha", "ransing", 22, "20k", "2y", "management")
console.log(pratiksha.firstname)
console.log(pratiksha.lastname)
console.log(pratiksha.age)
console.log(pratiksha.salary)
console.log(pratiksha.experiance)
console.log(pratiksha.skills)
