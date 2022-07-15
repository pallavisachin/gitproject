let pallavi = {
    firstName: "pallavi",
    lastName: "ransing"
}
let sachin = {
    firstName: "sachin",
    lastName: "bhand"
}


let displayName = function(){
    console.log(this.firstName +" "+this.lastName)
}

let fn = displayName.bind(sachin)
fn()

displayName.bind(pallavi)()
function add(){
    return function(){
        console.log('hi')
    }
}

add()()

// program
function displayName1(){
    console.log(`Hello ${this.firstName} ${this.lastName}`)
}

let pratiksha = {
    firstName:"pratiksha",
    lastName:"ransing"
}

let sagar = {
    firstName:"sagar",
    lastName:"ransing"
}

displayName1.call(pratiksha)
displayName1.call(sagar)




// apply


let display11 = function(greet){
    console.log(`${greet} ${this.firstName}  ${this.lastName}`)
}

let samir = {
    firstName:"samir",
    lastName:"bhand"
}

let ovi = {
    firstName:"ovi",
    lastName:"ponde"
}

display11.apply(ovi,['Good morning have a nice day'])
display11.apply(samir,[`how are you `])
