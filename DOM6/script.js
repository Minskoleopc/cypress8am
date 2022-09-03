
let buttonA = document.querySelector('button')
let inputText = document.querySelector('input')
let ulList = document.querySelector('ul')

console.log(buttonA)
console.log(inputText)
console.log(ulList)

buttonA.addEventListener('click',function(){
    let text = inputText.value
    let newElement = document.createElement('li') // <li></li>
    newElement.textContent = text // <li>Chikoo</li>
    ulList.appendChild(newElement)

})