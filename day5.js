/*------------------------------------*/



let city = "Pune"
// 0 1 2 3
// P u n e

console.log(city[0])
// Object --- property and method
// method  action and return type 
let a = city.length
console.log(a)


let city2 = "Nagpur"

// 0 1 2 3 4 5
// N a g p u r
//console.log(city[0])


// for loop

// for(intilization ; conditionCheck ; increment/decrement){
//     // statements
// }

// for(let i = 0 ; i < 4 ; i++){ // 1 // 2 // 3 // 4
//     console.log(i) // 0 , 1 , 2 , 3
// }

let city3 = "Bhopal"
//  0 1 2 3 4 5
//  B h o p a l

for(let i = 0 ; i < 6 ; i++){
   // console.log(i)
   console.log(city3[i])
}

// Methods
// 0 1 2 3 4 5
// J a i p u r

let city4 = "Jaipur" 

let aa = city4.toUpperCase()
console.log(aa)

let bb = city4.toLowerCase()
console.log(bb)

let cc = city4.includes('Jai')
console.log(cc)

let dd = city4.indexOf('i')
console.log(dd)

let ff = city4.charAt(2)
console.log(ff)

let gg = city4.indexOf('z')
console.log(gg)

let city6 = "mumbai"

//  0  1  2  3  4  5  // 1,5
//  m  u  m  b  a  i
// -6 -5 -4 -3 -2 -1
// slice()

// stringName.slice(IndexstartPosition ; Indexendposition(included))
let aaa = city6.slice(1)
console.log(aaa)
console.log(city6.slice(1,5)) 
console.log(city6.slice(2,5)) 
console.log(city6.slice(0,4))
console.log(city6.slice(2,-1))
console.log(city6.slice(-5,-1))
console.log(city6.slice(-1,-6))


//5 more mthods

let nameA = " hari"
console.log(nameA.length)
let nameAa = nameA.trimStart()
console.log(nameAa)
console.log(nameAa.length)

let nameB = "hari "
console.log(nameB.length)
let nameBb = nameB.trimEnd()
console.log(nameBb.length)

let nameC = " hari "
console.log(nameC.length)
let nameCc = nameC.trim()
console.log(nameCc.length)

// startsWith()
// endsWith()
let nameE = "chinmay"
let qwerty = nameE.startsWith('chi')
let qwerty2 = nameE.startsWith('nm')
let qwerty3 = nameE.endsWith('may')
let qwerty4 = nameE.endsWith('y')
let qwerty5 = nameE.endsWith('z')
console.log(qwerty)
console.log(qwerty2)
console.log(qwerty3)
console.log(qwerty4)
console.log(qwerty5)












