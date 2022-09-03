

let ulList = document.querySelector('ul')
console.log(ulList)

let buttonA = document.querySelector('button')
console.log(buttonA)

let inputText = document.querySelector('input')
console.log(inputText)

buttonA.addEventListener('click',function(){
    let text = inputText.value
    ulList.style.color = text
    inputText.value = ""
})