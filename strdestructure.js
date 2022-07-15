

let names =["pallavi","sachin","prstiksha"]
let [aa,bb,cc]=names
console.log(aa)
console.log(bb)
console.log(cc)



let fruits=[["apple","banana"],"orange","papaya"]

let [a1,b1,c1]=fruits
//let [[a11,b11],c11,d11]=fruits
console.log(a1)
console.log(b1)
console.log(c1)



//program


let p =100
let q= 200
console.log(p)
console.log(q)

let temp = p
p= q
q=temp

console.log(p)
console.log(q)
console.log(temp)


//program


let j = 50;
let k= 100;
[j,k] = [k,j];
console.log(j)
console.log(k)


//object


let Emp ={
    name:"sagar",
    surname : "Ransing",
    age: 23,
}

let {name:na,surname:sn,age:ag}=Emp
console.log(na)
console.log(sn)
console.log(ag)

// combination




let Employee = [
    {
        name:"pratiksha",
        salary : 100000

    },
    {
        name:"pallavi",
        salary : 120000
    }

]

let [{name:n,salary:sl},{name:n1,salary:sl1}]=Employee
console.log(n)
console.log(sl)
console.log(n1)
console.log(sl1)




let information = {
    marks_math:[22,33,44],
    marks_marathi:[24,34,45]

}


let {marks_math:[p1,p2,p3],marks_marathi:[q1,q2,q3]}=information
console.log(p1)
console.log(p2)
console.log(q3)
console.log(q1)
console.log(q2)


let object ={
    school:{
        std1:"prof.Archana",
        sdt2:"prof.sagar",
    }
}
let {school:{std1:w,sdt2:s}}=object

console.log(w)
console.log(s)












































