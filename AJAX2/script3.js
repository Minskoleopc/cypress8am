
// // pagewise ---- id 
// // id single user id

// function renderHtml(el){
//     let html = `
//         <div>
//             <h1>${el.id}</h1>
//             <h2>${el.first_name}${el.last_name}</h2>
//             <h2>${el.email}</h2>
//             <img src ="${el.avatar}">
//         </div>
//     `
//     document.querySelector('#container').insertAdjacentHTML('beforeend',html)

//   }

// function getId(pageNumber){
//     return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
//     .then(function(res){
//         return res.json()
//     }).then(function(res){
//         let id = res.data[0].id
//         return id
//     })
// }

function getSingleUser(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(res){
        return res.json()
    }).then(function(res){
        return res.data
    })
}

function getPageTimeOut(timeout){
    return new Promise(function(reject){
        setTimeout(function(){
            reject('promise reject')
        },timeout)
    })
}




// getId(2)
// .then(function(id){
//     return getSingleUser(id)
// }).then(function(res){
//     renderHtml(res)
// })

// async function getInfo(){
//      let a =  await getId(1)
//      let b =  await getSingleUser(a)
//      renderHtml(b)

// }
// getInfo()
// parallel execution of promises




// async function getAllData(){

//     let data = await Promise.all([
//         getSingleUser(1),
//         getSingleUser(2),
//         getSingleUser(3)
//     ])
//     console.log(data)
// }
// getAllData()


// program2
// async function getFirstDataORError(){
//     let data = await Promise.race([
//         getSingleUser(1), // 7-8
//         getPageTimeOut(0.5)
//     ])
//     console.log(data)
// }
// getFirstDataORError()

// program 3
// async function getAllValues(){
//     let data = await Promise.allSettled([
//         getSingleUser(1), 
//         getPageTimeOut(0.5),
//         getSingleUser(2),
//         getSingleUser(3),
//     ])
//     console.log(data)
// }
// getAllValues()


// program 4 


// async function firstPass(){
//     let data = await Promise.any([
//         getSingleUser(1), 
//         getPageTimeOut(0.5),
//         getSingleUser(2),
//         getSingleUser(3),
//     ])
//     console.log(data)
// }
// firstPass()

// cypress - 10 am
// 9 pm 
// javascript - projects -- concepts
// python

// Modules in javascript 
// 4 pm

// 9 pm , banlist , advanced ,events --- 9 pm





// A  - 3     
// B  - 6
// C  - 9

















// getId().then(function(id){
//     console.log(id)
// })