// fetch 
// fetch functions return promise 

let renderHtml = function(el){
    let con = document.querySelector('#users')
    let html = `
        <div>
            <h1>${el.id}</h1>
            <p>${el.first_name} ${el.last_name}</p>  
            <p>${el.email}</p>
            <img src ="${el.avatar}">
        </div>
    `
    con.insertAdjacentHTML("beforeend",html)
}

// program 1

function getUsers(pageNumber){
    fetch( `https://reqres.in/api/users?page=${pageNumber}`)
    .then(function(res){
       return res.json()
    })
    .then(function(res){
        res.data.forEach(user => {
            renderHtml(user)
        });

    })
}
//getUsers(2)

// pagewiseId ---- iduser ---- id ----2ndapi --- singleuserinfo ----html

// program 2

// function singleUserInfo(pageNumber){
//     fetch(`https://reqres.in/api/users?page=${pageNumber}`)
//     .then(function(res){
//         return res.json()
//     }).then(function(res){
//         //console.log(res.data[0].id)
//         return res.data[0].id
//     })
//     .then(function(id){
//        return  fetch(`https://reqres.in/api/users/${id}`)
//     })
//     .then(function(res){
//         return res.json()
//     })
//     .then(function(res){
//         //console.log(res.data)
//         renderHtml(res.data)
//     })
// }
// singleUserInfo(1)

// program 3

async function getSingleUser(pageNumber){
    let response = await fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    let res = await response.json()
    let id = res.data[0].id
    let response2 = await fetch(`https://reqres.in/api/users/${id}`)
    let res2 = await response2.json()
    let user = res2.data
    renderHtml(user)

}
getSingleUser(1)