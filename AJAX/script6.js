// async sync


// syn ---> 

// fn ---> 2
// fn ---> 3
// fn ----> 4   ==> 9

// async 

// fn -->2
// fn --> 3
// fn ---> 4 ==>4


// call back hell 
// promises 
// async await

//async --- sync

function getUser(userid) {
    //let data ;
    return fetch(`https://reqres.in/api/users/${userid}`)
        .then(function (res) {
            return res.json()
        })
        .then(function (res) {
            //renderHtml(res.data)
            return res.data
        })
        
}

let renderHtml = function (el) {
    let con = document.querySelector('#users')
    let html = `
        <div>
            <h1>${el.id}</h1>
            <p>${el.first_name} ${el.last_name}</p>  
            <p>${el.email}</p>
            <img src ="${el.avatar}">
        </div>
    `
    con.insertAdjacentHTML("beforeend", html)
}

async function userinfo(userOne,userTwo,userThree){
    let userone = await getUser(userOne)
    let usetwo = await getUser(userTwo)
    let userthree = await getUser(userThree)
    console.log(userone,userthree,usetwo)
} 
//userinfo(2,3,4)

async function ParallelE(userOne, userTwo, userThree) {

    let data = await Promise.all([
        getUser(userOne),
        getUser(userTwo),
        getUser(userThree)
    ])
    console.log(data)

}
//ParallelE(2,3,4)

// Promises

async function ParallelR(userOne, userTwo, userThree) {

    let data = await Promise.race([
        getUser(userOne),
        getUser(userTwo),
        getUser(userThree)
    ])
    console.log(data)

}
//ParallelR(2,3,4)


async function ParallelEa() {
    let data = await Promise.all([
        Promise.resolve("hello"),
        Promise.resolve("Bye"),
        Promise.resolve("hello")
    ])
    console.log(data)

}
//ParallelEa()


let getinfo1a = function(){
    return new Promise(function(resolve){
        setTimeout(() => {
            resolve('user created')  
        },1000);
    })

}


let getinfo2a = function(){
    return new Promise(function(reject){
        setTimeout(() => {
            reject('unable to connect')  
        },2000);
    })

}


// async function ParallelEab() {
//     let data = await Promise.race([
//         Promise.resolve("hello"),
//         Promise.reject("Bye"),
//         Promise.resolve("hello")
//     ])
//     console.log(data)

// }
// ParallelEab()

// async function ParallelEac() {
//     let data = await Promise.race([
//         getinfo1a(),
//         getinfo2a()
//     ])
//     console.log(data)

// }
// ParallelEac()

// async function ParallelEad() {
//     let data = await Promise.allSettled([
//         getinfo1a(),
//         getinfo2a(),
//         Promise.reject('bye')
//     ])
//     console.log(data)

// }
// ParallelEad()

// async function ParallelEade() {
//     let data = await Promise.any([
//         getinfo1a(),
//         getinfo2a(),
//         Promise.reject('bye'),
//         Promise.resolve('hello')
//     ])
//     console.log(data)

// }
// ParallelEade()





