
// pagewise ---- id 
// id single user id

function renderHtml(el){
    let html = `
        <div>
            <h1>${el.id}</h1>
            <h2>${el.first_name}${el.last_name}</h2>
            <h2>${el.email}</h2>
            <img src ="${el.avatar}">
        </div>
    `
    document.querySelector('#container').insertAdjacentHTML('beforeend',html)

  }

function getId(pageNumber){
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    .then(function(res){
        return res.json()
    }).then(function(res){
        let id = res.data[0].id
        return id
    })
}

function getSingleUser(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(res){
        return res.json()
    }).then(function(res){
        return res.data
    })

}
// getId(2)
// .then(function(id){
//     return getSingleUser(id)
// }).then(function(res){
//     renderHtml(res)
// })

async function getInfo(){

     let a =  await getId(1)
     let b =  await getSingleUser(a)
     renderHtml(b)

}
getInfo()






// getId().then(function(id){
//     console.log(id)
// })