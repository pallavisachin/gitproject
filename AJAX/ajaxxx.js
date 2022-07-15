//synchronus function


// function addition(a, b) {

//     console.log(a + b)
// }
// function subtraction(a, b) {
//     console.log(a - b)
// }
// subtraction(100, 50)
// addition(100, 50)


// //asynchronus function using settimeout function

// // function addition(a, b) {

// //     console.log(a + b)
// // }
// // function subtraction(a, b) {
// //     setTimeout(function () {
// //         console.log(a - b)
// //     },1000)
// // }
// // subtraction(100, 50)
// // addition(100, 50)



// // //
// // //asynchronus function 

// // function getUserInfo() {

// //     setTimeout(function () {
// //         console.log("user created")
// //     }, 1000)
// //     setTimeout(function () {
// //         console.log("get user bye id")
// //     }, 3000)
// //     setTimeout(function () {
// //         console.log("display info")
// //     }, 1000)
// // }
// // getUserInfo()



// //asynchronus function using call back hell

// // function getUserInfo1() {
// //     setTimeout(function () {
// //         console.log("user created")
// //         setTimeout(function () {
// //             console.log("get user bye id")
// //             setTimeout(function () {
// //                 console.log("display info")
// //             }, 1000)
// //         }, 3000)

// //     }, 3000)
// //   }
// // getUserInfo1()


// //using promise 

// let promi = new Promise(function (resolve, reject) {

//     let a = 10
//     let b = 10
//     if (a + b !== 20) {
//         resolve("true")
//     }
//     else {
//         reject("false")
//     }
// })
// promi.then(function (Boolean) {
//     console.log(Boolean)
// })
//     .catch(function (Boolean) {
//         console.log(Boolean)
//     })
//     .finally(function () {
//         console.log("correct")
//     })

//problem

// function getUserInfo1() {
//     setTimeout(function () {
//         console.log("user created")
//         setTimeout(function () {
//             console.log("get user bye id")
//             setTimeout(function () {
//                 console.log("get user info")
//             }, 1000)
//         }, 3000)

//     }, 3000)
//   }
// getUserInfo1()

//SOLUTION

// 
// function createUser(){
// return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         if ("user created") {
//             resolve("user create")
//         }
//         else {
//             reject("user not created")
//         }
//     }, 2000)
// })
// }
// // function getuserId() {
// //     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if ("userid") {
//                 resolve("get user id")
//             }
//             else {
//                 reject("id is not found")
//             }
//         }, 3000)
//     })
//}


// function getUserInfo() {
// //     return new Promise(function (resolve, reject) {
// //         setTimeout(function () {
// //             if ("userInfo") {

// //                 resolve("get user info")
// //             }
// //             else {
// //                 reject("not found user info")
// //             }
// //         },3000)
// //     })
// // }


// // promis.then(function(str){
// //     console.log(str)
// //     return getuserId()
// // })

// // .then(function(str){
// //     console.log(str)
// //     return getUserInfo()
// // })
// // .then(function(str){
// //     console.log(str)
// // })

// // .catch(function(str){
// //     console.log(str)
// // })

// // .finally(function(){
// //     console.log("i run my code")
// // })



// //await()





// function createUser() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if ("user created") {
//                 resolve("user create")
//             }
//             else {
//                 reject("user not created")
//             }
//         }, 2000)
//     })
// }

// function getuserId() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if ("userid") {
//                 resolve("get user id")
//             }
//             else {
//                 reject("id is not found")
//             }
//         }, 3000)
//     })
// }


// function getUserInfo() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if ("userInfo") {

//                 resolve("get user info")
//             }
//             else {
//                 reject("not found user info")
//             }
//         }, 3000)
//     })
// }


// let getInfo = async function () {
//     let userC = await createUser()
//     console.log(userC)

//     let getU = await getuserId()
//     console.log(getU)

//     let getUi = await getUserInfo()
//     console.log(getUi)

// }
// //getInfo()




// function getUserInfo(pageNumber){
//     let request = new XMLHttpRequest()
//     request.open('GET',`https://reqres.in/api/users?page=${pageNumber}`)
//     request.send()
//     request.addEventListener('load',function(){
//         //console.log(this.response.text)


//         let obj = JSON.parse(this.responseText)
//         console.log(obj)
//         let id=obj['data'][0]['id']
//         let request = new XMLHttpRequest()
//         request.open('GET',`https://reqres.in/api/users?page=${pageNumber}`)
//         request.send()
//         request.addEventListener('load',function(){

//             let obj=JSON.parse(this.responseText)
//             console.log(obj.data)
//     })
// })
// }
// getUserInfo()

//
function getUser(pageNumber){

return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
}

function getUserInfo(id){
    return fetch(`https://reqres.in/api/users?page=${id}`)

}

// getUser(1).then(function(response){
//     return response.json()
// }).then(function(response){
//    let id = response.data[0]['id']
//     return id 
// }).then(function(id){
//     return getUserInfo(id)
// }).then(function(response){
//     return response.json()
// }).then(function(response){
//     console.log(response.data)
// })



// asyn await

let getinformation  =async function(){
    let res = await  getUser(2)
   let object =  await res.json()
  let email  = object['data'][1]['email']

  let res1 = await  getUserInfo(email)
  let object1 =  await res1.json()
 console.log(object1.data)


}

getinformation()






