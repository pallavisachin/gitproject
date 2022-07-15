
// // synchronous execution


// function subtraction (){
    
//     console.log(10-5)
// }
// function subtraction1 (){
//     console.log(100-50)
// }
// subtraction()
// subtraction1()



// // asynchronuos function =====>         settimeout function


// function subtraction2 (){
//     setTimeout(function(){
//         console.log(100-60)
//     },1000)

// }
//     function addition(){
//         console.log(10+10)
//     }

// subtraction2()
// addition()


// // Real time API asynchronus

//              //create user
//             //id
//             //id update
//             //id delete


// // call back hell

// function check (){

// setTimeout(function(){
//     console.log("user created")
// },2000)
// setTimeout(function(){
//     console.log("id retrived")
// },4000)
// setTimeout(function(){
//     console.log("get user id")
// }, 3000)
// setTimeout(function(){
//     console.log("update user id")
// },3500)

// setTimeout(function(){
//     console.log("delete user id")
// },5000)
// }

// check ()



// //------------------------------------------------------------------------------//
// console.log("------------------------------------------------------------------")

// function checking(){
// setTimeout(() => {
//     console.log(" created user")
//     setTimeout(() => {
//         console.log("created password")
//         setTimeout(() => {
//            console.log("password retrive") 
//            setTimeout(() => {
//                console.log("update user by password")
//            }, 6000);
//         }, 5000);
//     }, 2000);
// }, 1000);

// }
// checking()


// //promise

// let fn = new Promise(function(resolve,reject){
//     let p= 100
//     let q= 200
//     if(p==q){
//         resolve("hiiiiii")

//     }
//     else{
//         reject("byeeeeee")
//     }
// })

// //consume
// fn.then(function(str){
//     console.log(str)
// },function(str){
// console.log(str)
// })

//---------------------------------------------------------------------------------------//

let fa  = new Promise(function(resolve,reject){
let name = "pallavi"

if(name.length >= 7){
    resolve(["sachin","pratiksha"])
}
else{
    reject([11,22,33])
}
})

fa.then(function(arr){
    console.log(arr[0])
},function(arr){
    console.log(arr[0])
})

//------------------------------------------------------------------------//




let fa1  = new Promise(function(resolve,reject){
    let name = "pallavi"
    
    if(name.length >= 7){
        resolve(["sachin","pratiksha"])
    }
    else{
        reject([11,22,33])
    }
    })
    
    fa1.then(function(arr){
        console.log(arr[0])
    })
    .catch(function(arr){
        console.log(arr[0])
    })




    





































