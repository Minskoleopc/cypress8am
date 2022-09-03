// // // sync execution

// // function additionA() {
// //     console.log('A')
// // }

// // function additionB() {
// //     console.log('B')
// // }

// // additionB()
// // additionA()

// // // Async

// // function additionC() {
// //     setTimeout(function () {
// //         console.log("C")
// //     }, 2000)
// // }

// // function additionD() {
// //     console.log("D")
// // }


// // additionC()
// // additionD()


// // // program 3
// // // api ------ usercreate 
// // // usercreate ----- id 
// // // id fetch ------ userinfo

// // function getInfo() {

// //     setTimeout(function () {
// //         console.log('user created ')
// //     }, 3000)

// //     setTimeout(function () {
// //         console.log('id')
// //     }, 2000)

// //     setTimeout(function () {
// //         console.log('get info')
// //     }, 1000)

// // }

// // getInfo()

// // // Async function execute sync
// // // Call back hell

// // function getInfo() {
// //     setTimeout(function () {
// //         console.log('user created ')
// //         setTimeout(function () {
// //             console.log('id')
// //             setTimeout(function () {
// //                 console.log('get info')
// //             }, 1000)
// //         }, 2000)
// //     }, 3000)
// // }
// //getInfo()

// // // Es2015 --- promise
// // // asyn call sync execution in better way by removing call back hell

// // //Basic promise


// // let pro = new Promise(function (resolve, reject) {
    
// //     let a = 10
// //     let b = 100

// //     if (a == b) {
// //         resolve("hello")
// //     }
// //     else {
// //         reject('bye')
// //     }

// // })

// // // consuming the promise
// // pro.then(function(a){
// //     console.log(a)
// // },function(b){
// //     console.log(b)
// // })

// // let pro = new Promise(function (resolve, reject) {
// //     let a = 100
// //     let b = 100

// //     if (a == b) {
// //         resolve([11,22,33])
// //     }
// //     else {
// //         reject([-11,-22,-33])
// //     }

// // })

// // // // consuming the promise
// // pro.then(function(a){
// //     console.log(a[0])
// // },function(b){
// //     console.log(b[0])
// // })


// // let pro2 = new Promise(function (resolve,reject) {
// //     let a = 10
// //     let b = 100

// //     if (a == b) {
// //         resolve([11,22,33])
// //     }
// //     else {
// //         reject([-11,-22,-33])
// //     }

// // // // })

// // // consuming the promise
// // pro2.then(function(a){
// //     console.log(a[0])
// // }).catch(function(b){
// //     console.log(b)
// // })
// // .finally(function(){
// //     console.log('i will execute')
// // })


// function getInfo() {
//     setTimeout(function () {
//         console.log('user created ')
//         setTimeout(function () {
//             console.log('id')
//             setTimeout(function () {
//                 console.log('get info')
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }
// getInfo()


function createUser(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('user created')
        },3000)
    })
}

function getId(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('Id found')
        },2000)
    })
}
function userInfo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('info')
        },1000)
    })
}

// createUser().then(function(a){
//     console.log(a)
//     return getId()
// })
// .then(function(b){
//     console.log(b)
//     return userInfo()
// }).then(function(c){
//     console.log(c)
// })

// async function getUserInfo(){
//     let a = await createUser()
//     console.log(a)
//     let b = await getId()
//     console.log(b)
//     let  c = await userInfo()
//     console.log(c)
// }
// getUserInfo()


