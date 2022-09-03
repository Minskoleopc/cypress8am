// // console.log(a.page)
// // console.log(a['total'])


// // a.data.forEach(function(el){
// //   //console.log(el)
// //   for(let property in el){
// //     console.log(property,el[property])
// //   }
// // })


// let a = {
//     "page": 2,
//     "per_page": 6,
//     "total": 12,
//     "total_pages": 2,
//     "data": [
//         {
//             "id": 7,
//             "email": "michael.lawson@reqres.in",
//             "first_name": "Michael",
//             "last_name": "Lawson",
//             "avatar": "https://reqres.in/img/faces/7-image.jpg"
//         },
//         {
//             "id": 8,
//             "email": "lindsay.ferguson@reqres.in",
//             "first_name": "Lindsay",
//             "last_name": "Ferguson",
//             "avatar": "https://reqres.in/img/faces/8-image.jpg"
//         },
//         {
//             "id": 9,
//             "email": "tobias.funke@reqres.in",
//             "first_name": "Tobias",
//             "last_name": "Funke",
//             "avatar": "https://reqres.in/img/faces/9-image.jpg"
//         },
//         {
//             "id": 10,
//             "email": "byron.fields@reqres.in",
//             "first_name": "Byron",
//             "last_name": "Fields",
//             "avatar": "https://reqres.in/img/faces/10-image.jpg"
//         },
//         {
//             "id": 11,
//             "email": "george.edwards@reqres.in",
//             "first_name": "George",
//             "last_name": "Edwards",
//             "avatar": "https://reqres.in/img/faces/11-image.jpg"
//         },
//         {
//             "id": 12,
//             "email": "rachel.howell@reqres.in",
//             "first_name": "Rachel",
//             "last_name": "Howell",
//             "avatar": "https://reqres.in/img/faces/12-image.jpg"
//         }
//     ],
//     "support": {
//         "url": "https://reqres.in/#support-heading",
//         "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
//     }
// }

// a.data.forEach(function(el){
//     //console.log(el)
//     // for(let property in el){
//     //   console.log(property,el[property])
//     // }
//     renderHtml(el)

//   })



function getUsers(pageNumber){
    fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        res.data.forEach(element => {
            renderHtml(element)
        });

    })
}

getUsers(1)
getUsers(2)








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