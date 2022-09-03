
// 15 minutes 


let x =10 
x = 100
console.log(x)

const y = 100
//y = 2200 compile time erroe 

// Arthmetic operation

// + - * / % 

let a = 100
let b = 50

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

// function 


function add(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x/y)
    console.log(x%y)
    console.log(x*y)
}
add(22,11)



function add(){
    console.log(8+8)
}
add()
add()


function add2(x,y){
    console.log(x+y)
}

add2(12,13)
add2(14,13)


function add3(x,y){
    return x + y
}
let aa = add3(12,4)
console.log(aa)
console.log(aa + aa)
console.log(aa * 0.10)


// types Number , Boolean , String


let x1 = 10
console.log(typeof x1)  // Number

let x2 = "chinmay"
console.log(typeof x2) // String

let x3 = true 
console.log(typeof x3) // Boolean


// comparision operators


//< , > , <= , >= , == , != , === , !==
  
console.log(2 > 3)  // False
console.log(21 < 5) // False
console.log(6 <= 7) // True
console.log(7 >= 7) // True
console.log(8 == '8') // True
console.log(6 != 6) // False
console.log(7 === '7')  // False
console.log(8 !== 8)  // False

//  Logical operators

// AND  ----
//TRUE   TRUE  ==> TRUE
//TRUE   FALSE  ==>FALSE
//FALSE  TRUE  ==> FALSE
//FALSE  FALSE  ==>FALSE

// OR 

//TRUE   TRUE  ==> TRUE
//TRUE   FALSE  ==>TRUE
//FALSE  TRUE  ==> TRUE
//FALSE  FALSE  ==>FALSE


// NOT

// FALSE ==> TRUE
// TRUE ===> FALSE
console.log(3 >= 3 && 3 == 3)
//           True  &&  True
console.log(6 !== 6 || 7 ===7)
//            False  || True
console.log(!(3>=3))
//             !True


/*********** String ******/

// string stores the value by index


let city = "PUNE" 
let city2 = 'pune'
let city3 = `pune` 

//  0 1 2 3
//  P U N E
console.log(city[0])
console.log(city[2])


let firstName = "chinmay"  // camelCase
let lastName = "deshpande"

// My firstName is chinmay and lastName is deshpande

// str concate
console.log("My firstName is "+firstName+" "+"and lastName is "+lastName)
console.log(`My firstName is ${firstName} and my lastName is ${lastName}`)


// Strings and Number 

// String + String ===> string 
// Number + String ===> String 
// String + Number  ===> String 
// Number + Number =====> Number

let a1 = 10 
let b1 = 20 
let c1 = "chinmay"

console.log(c1 + a1 + b1) 
// 'chinmay'+10 ===> 'chinmay10' + 20 ==> chinmay1020
console.log(a1+b1+c1)
//   10 + 20 ==> 30 + 'chinmay' ===> 30chinmay
console.log(c1+b1+a1) 
//  'chinmay'+20 ===> 'chinmay20'+10 ===> chinamy2010

// Javascript --

//Object  --- property and method
// Human -- amol
// property -- age , weight , height
// method -- walk() , talk()

// Vehicle - audi
// property - color , regNo, type,cc
// method start()  stop()

// Bank - chinmay
// property -- accName , accNo , bal ,branchName
// method depoist() and withdrawl()


// Method --- Gym (action and return type)

// action - excercise 
// return muscles


// Javascript - object 
// Property and method 
// method --- action and return type

let country = "India"

//  0  1 2  3  4
//  I  n d  i  a 

// property (length)

let aaa = country.length
console.log(aaa)
console.log(typeof aaa)

// toUpperCase()

// action - convert every character to UpperCase()
// return - string

let bbb = country.toUpperCase()
console.log(bbb)
console.log(typeof bbb)

// toLowerCase()
// action - convert every character to LowerCase
// return - string
let ccc = country.toLowerCase()
console.log(ccc)

// includes()


let country2 = 'Cuba'

// 0 1 2 3
// C u b a

// action -- serch for character in string or substring 
// return - booleab

let ddd =country2.includes('B')
let ddd1 =country2.includes('a')
console.log(ddd)
console.log(ddd1)
console.log(typeof ddd)
console.log(typeof ddd1)

// indexOf()
let country3 = "Austria"
// 0 1 2 3 4 5 6
// A u s t r i a

let eee =  country3.indexOf('u')
console.log(eee)
console.log(typeof eee)

let fff = country3.indexOf('z')
console.log(fff)

// CharAt()

let country5 = "China"
// 0 1 2 3 4
// C h i n a

let ggg = country5.charAt(1)
console.log(ggg)



// String-


// String - object ---
// property and method 
// method --- action and return 


let country6 = "Russia"

// 0 1 2 3 4 5
// R u s s i a
console.log(country6[0])

// property -- length

console.log(country6.length)

let a2 = country6.toUpperCase()
let b2 = country6.toLowerCase()
let b3 = country6.includes('r')
let b4 = country6.indexOf('i')
let b5 = country6.charAt(4)




















