// selecting the element

//<h3 class = "three" id = "four" name ="five">Hello</h3>

// css selector

// Tagname 

let byTagName = document.querySelector('h3')
console.log(byTagName)

// ById 
let byId = document.querySelector('#four')
console.log(byId)
// ByClass
let byClassName = document.querySelector('.three')
console.log(byClassName)
// common formula

// tagName[attribute = 'value']
let byCommon = document.querySelector('h3[name="five"]')
console.log(byCommon)

byCommon.addEventListener('click',function(){
    byCommon.style.color = "red"
})





// let family = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     parent:{
//         father:"shirish",
//         mother:"deshpande"
//     }
// }

// family.parent.mother ="kanchan"
// console.log(family)