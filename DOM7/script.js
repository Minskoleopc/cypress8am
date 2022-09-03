//<button id = "one"  class = "two" name ="nm">Add me</button>

// document.querySelector('button')
// document.querySelector('#one')
// document.querySelector('.two')
// document.querySelector('button[name="nm"]')

let body = document.querySelector('body')
console.log(body)

body.addEventListener('click',function(event){
    //console.log(event.target)
    //console.log(event.target.tagName)
   // console.log(event.target.className)
})