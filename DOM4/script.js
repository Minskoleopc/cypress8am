let ulList = document.querySelector('ul')
let button = document.querySelector('button')
console.log(ulList)
console.log(button)

button.addEventListener('click',function(){
    ulList.style.color = "red"
    ulList.style.backgroundColor = "black"
    ulList.style.width = "200px"
    ulList.style.height = "200px"
})