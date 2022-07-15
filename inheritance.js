// class Grandfather {
//     constructor(fn,ln){
//         this.firstName= fn
//         this.lastName= ln
//     }
//     display(){
//         console.log(this.firstName +" " +this.lastName)
//     }
// }

// class Father extends Grandfather {

// display1(){
//     console.log("hello")
// }

// }

// let pallvi = new Father("pallavi","Ransing")   //father object creation
// console.log(pallvi)
// pallvi.display1()
// pallvi.display()
// console.log(pallvi.firstName)


// let pallavi1 = new Grandfather("pallavi1","Ransing")
// console.log(pallavi1)
// pallavi1.display()
// //pallavi1.display1()        //it will not work beacause of child method not call by father




// class GrandFather1{
//     constructor(fn,ln){
//         this.firstName= fn
//         this.lastName= ln
//     }

//     display(){
//         console.log(this.firstName + " "+this.lastName)
//     }
// }

// class Father1 extends GrandFather1{
//     constructor(grandFaName,laName,fatFirstName){
//         super(grandFaName,laName)
//         this.fatFirstName=fatFirstName
//     }
//     display(){
//         console.log(this.fatFirstName + " " + this.lastName)
//         super.display()
//     }
// }


// let sachin = new Father1("chandrkant","bhand","sachin")
// console.log(sachin)
// sachin.display()



// program

class Student{
    constructor(s_name,s_lastname){
        this.s_name = s_name
        this.s_lastname = s_lastname

    }
    displayName (){
        console.log(this.s_name + " " + this.s_lastname)
}

}


class Teacher extends Student{
    constructor(s_name,s_lastname,experiance){
        super (s_name,s_lastname)
        this.experiance  = experiance
    }

    displayExperiance(){
        console.log(this.experiance)
    }
}

class Professor extends Teacher {
    constructor(s_name,s_lastname,experiance,specilization){
     super(s_name,s_lastname,experiance)
    this.specilization = specilization
    }

    displaySpecilization ()
    {
        console.log(this.specilization)
    }
}

let pratiksha = new Professor("Pratiksha","Ransing",10,"English")
console.log(pratiksha)

console.log(pratiksha.specilization)
console.log(pratiksha.experiance)
console.log(pratiksha.s_lastname)
console.log(pratiksha.s_name)

pratiksha.displayExperiance()
pratiksha.displayName()
pratiksha.displaySpecilization()












