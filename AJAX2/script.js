
// // sync vs async


// // sync
// // program 1
// function one() {
//     console.log('hello')
// }

// function two() {
//     console.log("bye")
// }
// //two()
// //one()

// // API -----------
// // img
// // fetch
// // axios
// // program 2
// function three() {
//     setTimeout(function () {
//         console.log('three')
//     }, 2000)
// }

// function four() {
//     console.log('four')
// }
// //three()
// //four()

// // program 

// // API --- asyn calls ----- usercreate --- userid ----- userinfo


// function getInfo() {
//     setTimeout(function () {
//         console.log('usercreated')
//     }, 3000)

//     setTimeout(function () {
//         console.log('get id')
//     }, 2000)

//     setTimeout(function () {
//         console.log('get info')
//     }, 1000)

// }

//getInfo()


// asyn manage sync  (call back hell / promises , asyn await)
// parallel execution for asyn calls -- promise combinators

// call back hell
// function getInfo() {
//     setTimeout(function () {
//         console.log('usercreated')
//         setTimeout(function () {
//             console.log('get id')
//             setTimeout(function () {
//                 console.log('get info')
//             }, 1000)
//         }, 2000)

//     }, 3000)
// }
// getInfo()


// promises 

// let pro = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 100
//     if(a == b){
//         resolve('hello')
//     }
//     else {
//         reject('bye')
//     }
// })


// a
// pending , resolve , reject

// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })


// b

// pro.then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log('i will run at any cost')
// })


function createUser(){
    return new Promise(function(resolve,reject){
        setTimeout(function () {
            resolve('usercreated')
        }, 3000)
    })
}

function getID(){
    return new Promise(function(resolve,reject){
        setTimeout(function () {
            resolve('get id')
        }, 2000)
    })
}

function getInfo(){
    return new Promise(function(resolve,reject){
        setTimeout(function () {
            resolve('get info')
        }, 1000)
    })
}

// createUser().then(function(res){
//     console.log(res)
//     return getID()
// }).then(function(res){
//     console.log(res)
//     return getInfo()
// }).then(function(res){
//     console.log(res)
// })

// let pro3 = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 10

//     if(a == b){
//         resolve([11,22,33])
//     }
//     else {
//         reject([-11,-12,-13])
//     }

// })
// pro3.then(function(s){
//     console.log(s)
//     return s[0]
// }).then(function(a){
//     console.log(a)
//     return "hello"
// }).then(function(b){
//     console.log(b)
// })

// async function Ginfo(){
//    let a =  await createUser()
//    console.log(a)
//    let b = await getID()
//    console.log(b)
//    let c = await getInfo()
//    console.log(c)
// }

// Ginfo()

// promise combinators 

//  Promise.all()
//  Promise.race()
//  Promise.allSettled()
//  Promise.any()

// parellel execution of promise

async function getData(){
    let e = await Promise.all([
        Promise.resolve("hello"),
        Promise.resolve("hello2"),
        Promise.resolve("hello3")
    ])
    console.log(e)
}
getData()

// exit if reject
// async function getData(){
//     let e = await Promise.all([
//         Promise.resolve("hello"),
//         Promise.reject("hello2"),
//         Promise.resolve("hello3")
//     ])
//     console.log(e)
// }
// getData()


// async function getData2(){
//     let e = await Promise.race([
//         createUser(),
//         getInfo(),
//         getID()
//     ])
//     console.log(e)
// }
// getData2()


// async function getData3(){
//     let e = await Promise.allSettled([
//         Promise.reject("hello"),
//         Promise.resolve("bye")
//     ])
//     console.log(e)
// }
// getData3()

// async function getData4(){
//     let e = await Promise.any([
//         Promise.resolve("bye"),
//         Promise.reject("hello"),
//         Promise.resolve("hello")
//     ])
//     console.log(e)
// }
// getData4()