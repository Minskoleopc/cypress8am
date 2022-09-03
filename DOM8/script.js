
let buttonA = document.querySelector('#addButton')
let ulList = document.querySelector('ul')
let inputBox = document.querySelector('input')

buttonA.addEventListener('click',function(){
    let text = inputBox.value
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = text
    createButton(newLi)
    ulList.appendChild(newLi)
    inputBox.value = " "
})


function createButton(li){

    let remove = document.createElement('button') // <button></button>
    remove.textContent = "remove" // <button>remove</button>
    remove.className = "remove" // <button class ="remove">remove</button>
    li.appendChild(remove)

    let up = document.createElement('button') // <button></button>
    up.textContent = "up" // <button>up</button>
    up.className = "up" // <button class ="up">up</button>
    li.appendChild(up)

    let down = document.createElement('button') // <button></button>
    down.textContent = "down" // <button>down</button>
    down.className = "down" // <button class ="down">down</button>
    li.appendChild(down)


}