let obj =
{
fullname: "pallavi",
lastName: "bhand",
rollNumber: 12

}
console.log(obj)

let pp=obj.fullname                               // retriev
console.log(pp)
 
obj.lastName="ransing"                              // UPDATE
console.log(obj)

obj.status="married"
console.log(obj)                                      // add

delete obj.status                                      //delete
console.log(obj)
//---------------------------------------------bracket notatation------------------------------------------------//

let employee=
{
    empName : "sachin",
    lastName: "bhand",
    empNumber: 77
}
console.log(employee)

let dd = employee["lastName"]
console.log(dd)



let ss =employee["empNumber"]="71"
console.log(ss)

let ff = employee["totalex"]="7"
console.log(employee)


delete employee ["totalex"]

console.log(employee)