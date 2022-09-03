

// function additionA(){
//     console.log('one')

// }

// function additionB(){
//     console.log('two')
//     alert('hello')
// }


// additionB()
// additionA()

// Sync in nature


// function additionA(){
//     setTimeout(function(){
//         alert("helloA")
//     },2000)
// }
// function additionB(){
//     console.log('helloB')
// }

// additionA()
// additionB()


// api ----   usercreate 

// usercreate ----- id 

// id create --- userinfo

//usercreate =====> id get ======> userinfo


// function getInfo() {

//     //async  ===> sync
//     setTimeout(function () {
//         console.log('user created')
//     }, 3000)

//     setTimeout(function () {
//         console.log('get id')
//     }, 2000)

//     setTimeout(function () {
//         console.log('get userinfo')
//     }, 1000)

// }
// getInfo()

// call back hell
function getInfo() {
    //async  ===> sync
    setTimeout(function () {
        console.log('user created')
        setTimeout(function () {
            console.log('get id')
            setTimeout(function () {
                console.log('get userinfo')
            }, 1000)
        }, 2000)

    }, 3000)
}
//getInfo()

// promises === > async === sync without call backhell



let createUser = function(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('user created')
        },3000)
    })
}

let getId = function(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('get id')
        },2000)
    })
}

let getInfo2= function(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('get info')
        },1000)
    })
}

createUser()
.then(function(res){
    console.log(res) 
    return getId()
}).then(function(res){
    console.log(res)
    return getInfo2()
}).then(function(res){
    console.log(res)
})









