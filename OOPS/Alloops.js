//object litral

let pallavi ={
    firstname:"pallavi",
    lastname :"ransing",
    age :23,
display:function(){
    console.log(this.firstname+this.lastname)
}
}
console.log(pallavi)
pallavi.display()


//function constuctor

let Employee = function (fn, ln, ag) {
    this.firstname = fn
    this.lastname = ln
    this.ag = ag
    this.display = function () {
        console.log(this.lastname +" "  + this.firstname)
    }
}
let sachin = new Employee("sachin", "bhand", 26)
let pallu = new Employee("pallu","bhand",25)
console.log(sachin)
console.log(pallu)
sachin.display()
pallu.display()
