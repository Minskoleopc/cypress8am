let ulList = document.querySelector('ul')
let addButton = document.querySelector('#addButton')
let inputBox = document.querySelector('input')

// <li>Grapes
// <button class="remove">remove</button> 
// <button class="up">up</button>
// <button class="down">down</button>
// </li>

addButton.addEventListener('click',function(){
    let text = inputBox.value
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = text
    createButton(newLi)
    ulList.append(newLi)
})


// remove // up // down
ulList.addEventListener('click',function(event){
    // console.log(event.target)
    // console.log(event.target.tagName)
    //console.log(event.target.className)

    if(event.target.tagName === "BUTTON"){

        if(event.target.className === "remove"){
            let li = event.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }
        else if(event.target.className === "up"){
           
            let li = event.target.parentElement
            let ul = li.parentElement
            let prev = li.previousElementSibling
            ul.insertBefore(li,prev)

        }
        else if(event.target.className === "down"){
            let li = event.target.parentElement
            let ul = li.parentElement
            let next = li.nextElementSibling
            ul.insertBefore(next,li)
        }

    }

})








function createButton(li){
    let remove = document.createElement('button') // <button></button>
    remove.textContent = "remove" // <button>remove</button>
    remove.className = "remove" // <button class = "remove">remove</button>
    li.append(remove)

    let up = document.createElement('button') // <button></button>
    up.textContent = "up" // <button>up</button>
    up.className = "up" // <button class = "up">up</button>
    li.append(up)

    let down = document.createElement('button') // <button></button>
    down.textContent = "down" // <button>up</button>
    down.className = "down" // <button class = "up">up</button>
    li.append(down)
}
