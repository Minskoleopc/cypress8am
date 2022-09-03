let ulList = document.querySelector('ul')
let addbutton = document.querySelector('#addButton')
let inputText = document.querySelector('input')

console.log(ulList)
console.log(addbutton)
console.log(inputText)

addbutton.addEventListener('click',function(){
    let text = inputText.value
    let newLi = document.createElement('li')
    newLi.textContent = text
    createButton(newLi)
    ulList.append(newLi)
    inputText.value = ""
})

function createButton(li){

    let remove = document.createElement('button') // <button></button>
    remove.textContent = "remove" // <button>remove</button>
    remove.className = "remove" // <button class = "remove">remove</button>
    li.append(remove)

    let down = document.createElement('button') // <button></button>
    down.textContent = "down" // <button>down</button>
    down.className = "down" // <button class = "down">down</button>
    li.append(down)


    let up = document.createElement('button') // <button></button>
    up.textContent = "up" // <button>up</button>
    up.className = "up" // <button class = "up">up</button>
    li.append(up)


}
// remove up and  down

ulList.addEventListener('click',function(event){
    // console.log(event.target)
    // console.log(event.target.tagName)
    // console.log(event.target.className)

    if(event.target.tagName == "BUTTON"){

        if(event.target.className === "remove"){

            let li = event.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)

        }
        else if(event.target.className === "down"){

            let li = event.target.parentElement
            let ul = li.parentElement
            let next = li.nextElementSibling
            if(next){
                ul.insertBefore(next,li)  
            }
           

        }
        else if(event.target.className === 'up'){

            let li = event.target.parentElement
            let ul = li.parentElement
            let prev = li.previousElementSibling
            if(prev){
                ul.insertBefore(li,prev)
            }
          
        }

    }
})



