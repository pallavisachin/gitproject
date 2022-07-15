let WorldBank = class{
    constructor(accName ,accNumber,city){
        this.accName = accName
        this.accNumber= accNumber
        this.city = city
    }
    depoist(){
        console.log("deposited in world bank")
    }
    withdrawl(){
        console.log("withdrwal in world bank")
    }
}

class Canarabank extends WorldBank{
    constructor(accName ,accNumber,city,IFSC_code){
    super(accName ,accNumber,city)
    this.IFSC_code=IFSC_code
}
depoist()
{
    console.log("welcome to canarabank cash deposited")
    super.depoist()
}
withdrawl()
{
    console.log("withdrwal in canara bank")
    super.withdrawl()
}
}

class  Central extends WorldBank{
    constructor(accName ,accNumber,city,IFSC_code,branch){

    super(accName ,accNumber,city,IFSC_code)
    this.branch=branch
}
depoist()
{
    console.log("welcome to central bank cash deposited")
    super.depoist()
}

withdrawl()
{
    console.log("withdrwal in central bank")
    super.withdrawl()
}
}
let sachin = new Canarabank("sachin",1575001,"pune","CAN001")
console.log(sachin)

let pallavi =  new Central("pallavi",1545701,"solapur",002,"shikrapur")
console.log(pallavi)

sachin.depoist()
sachin.withdrawl()
pallavi.depoist()
pallavi.withdrawl()



// overloading example


// class Calculator{
//     addition(a,b)
//     {
//         console.log(a+b)
//     }
//     addition(a,b,c){
//         console.log(a+b+c)
//     }
//     addition(a,b,c,d){
//         console.log(a+b+c+d)
//     }
// }

// let add= new Calculator()
// add.addition(1,2)
// add.addition(1,2,3)
// add.addition(1,2,3,4)   //latest method
//--------------------------------------------------------------//
// function addition1 (p,q,r,s)
// {
//     if(p !==undefined && q!==undefined && r !==undefined && s!==undefined)
//     {
//         console.log(p+q+r+s)
//     }

//   else  if(p !==undefined && q!==undefined && r !==undefined )
//     {
//         console.log(p+q+r)
//     }

//     else  if(p !==undefined && q!==undefined )
//     {
//         console.log(p+q)
//     }
// }


// addition1(1,2,3,4)
// addition1(2,3,4)
// addition1(2,3)





//--------------------------------------------------------------//
// class calci{
//     addition2(p,q,r,s){
//     if(p !==undefined && q!==undefined && r !==undefined && s!==undefined)
//     {
//         console.log(p+q+r+s)
//     }

//   else  if(p !==undefined && q!==undefined && r !==undefined )
//     {
//         console.log(p+q+r)
//     }

//     else  if(p !==undefined && q!==undefined )
//     {
//         console.log(p+q)
//     }
// }
// }
// let s= new calci()
// s.addition2()
// s.addition2(1,2,3,4)
// s. addition2(2,3,4)
// s. addition2(2,3)







//OVERLOADING 
           //  --> SAME METHOD ,SAME CLASS, DIFFFERENT SIGNATURE

//OVERRIDING 
            //---> SAME METHOD ,DIFFERENT CLASS ,SAME SIGNATURE


//OVERRIDING

class A{
    display(greet){
        console.log(greet + `to class A`)
    }
}
 class B extends A{
display(greet){
        console.log(greet  + `to class B`)
        super.display(greet)
        
}
 }

let d= new B()
d.display(`welcome`)



