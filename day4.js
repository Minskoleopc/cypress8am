let city = "Pune"
//  0 1 2 3 
//  P u n e 
console.log(city[0]) // p
console.log(city)

// Object -- property and method
// property 
let a = city.length
console.log(a)

// Method --- > action and return 
// toUpperCase()
// action ---> converts every charcter to upperCase()
// return string
let city2 = "jaipur"
let b = city2.toUpperCase()
console.log(b)

// toLowerCase()
// action - convert every character to lowerCase()
// return - string 

let city3 = "Nagpur"
let c = city3.toLowerCase()
console.log(c)

// includes()
// action -- search for chracter or substring
// return boolean value 

let city4 = "bhopal"
let d = city4.includes('b')
let e = city4.includes('pal')
let f = city4.includes('z')
console.log(d)
console.log(e)
console.log(f)
// indexOf()

let city5 = "wardha"
//   0 1 2 3 4 5
//   w a r d h a
// action - search for character
// return number(if found return index number else -1)
let g = city5.indexOf('r')
let h = city5.indexOf('z')
console.log(g)
console.log(h)

// charAt()
// 0 1  2 3 4 5
// i n  d o r e 

let city6 = "indore"
let j = city6.charAt(2)
console.log(j)


let city7 = "kanpur"
console.log(city7.length) // 6
console.log(city7[1])
// for loop


// for(intialization ; conditionCheck ; increment/ decrement){
//     // statements
// }

// loop 


for(let i = 0 ; i < 3 ; i++){ // 1 // 2 // 3
    console.log('hello') // hello // hello // hello
}


for(let i = 0 ; i < 3 ; i++){ // 1 // 2 // 3
    console.log(i) // 0 , 1 , 2
}


for(let i = 5 ;  i >= 0 ; i--){ // 4 // 3 // 2 // 1 // 0 // -1
    console.log(i) // 5 , 4 , 3 , 2 , 1 , 0
}


city7 = "kanpur"
//console.log(city7[0])
// 0  1  2  3  4  5
// k  a  n  p  u  r


for(let i = 0 ; i < city7.length ; i++){
   // console.log(i)
   console.log(city7[i])
   // 1st i ===> 0
   // 2nd i ===> 1
   // 3rd i ===> 2
   // 4th i ===> 3
   // 5th i ===> 4
   // 6th i ===> 5
}
console.log(city7)


city7 = "kanpur"
rr = ""

for(let i = 0 ; i < city7.length ; i++){
    rr =  city7[i] + rr
    //   "" + k   =====> k
    //   k  +  a   ======> ka 
    //   ka  + n   ======> kan 
    //   kan  + p   =====> kanp
    //   kanp + u   =====> kanpu
    //   kanpu + r   =====> kanpur
}
console.log(rr)

// 1 st 2 nd  ==> 7:30pm







// 0 1 2 3 4 5
// k a n p u r
// console.log(city7[0])
// console.log(city7.length) // 6
// console.log(city7[1])
// console.log(city7[2])

// print every charcter of city7

//k
//a
//n 
//p
//u
//r




