

// let and const 

let x = 10 
x = 100
console.log(x)
x = 400
console.log(x)

// const 

const f = 100
console.log(f)
//f = 4000

let a = 100
let b = 50

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

let q = 1000
let e = 500

console.log(q+e)
console.log(q-e)
console.log(q*e)
console.log(q/e)
console.log(q%e)


// function 

function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x/y)
    console.log(x%y)
    console.log(x*y)
}
Calculator(12,3)
Calculator(22,11)


// function --


// function without param without return 

function add(){
    console.log(9+9)
}
add()
add()
add()


// function with param without return 


function sub(x,y){
    console.log(x-y) 
}
sub(22,12) //10
sub(44,22) // 22



//function with param with return  type

function addB(x,y){
    return x + y
}

let aa = addB(12,3)
console.log(aa)
console.log(aa + aa)
console.log(aa * 0.10)

// Array 
// Object - property and method

//            0       1        2        3       4
let names = ["amol","hari","chetan","sanket","chinmay"]
console.log(names[0])

// for loop
for(let i = 0 ; i < names.length ; i++){
    //console.log(i)
    console.log(names[i])
}
//        0       1        2        3         4
names = ["amol","hari","chetan","sanket","chinmay"]

let x1 = names.push('shraddha') // new length of array
console.log(names)
console.log(x1)

names.unshift("amit") // new length if array
console.log(names)

names.pop()// returns the same element 
console.log(names)

names.shift() // return same element 
console.log(names)


let marks  = [11,22,33,44]
// [13,24,35,46]

let t1 = marks.map(function(el,index,arr){
    return el + 2
})
console.log(t1) //return array

let t2 = marks.filter(function(el,index,arr){
    return el > 20
})
console.log(t2) // return array

let t3 = marks.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(t3)


marks  = [11,22,33,44]


let t4 = marks.find(function(el,index,arr){
    return el > 20
})
console.log(t4)


let t5 = marks.findIndex(function(el,index,arr){
    return el > 20
})
console.log(t5)



let t6 = marks.every(function(el,index,arr){
    return el > 100
})
console.log(t6)

let t7 = marks.some(function(el,index,arr){
    return el > 30
})
console.log(t7)

// push()
//pop()
//shift()
//unshift()
//map()
//filter()
//reduce()
//find()
//findIndex()
// some()
//every()

let nums = [11,22,33,44]
nums.forEach(function(el,index,arr){
    console.log(el + 2)
})

//             0         1      2
let fruits = ["apple","mango","banana"]
console.log(fruits.includes("apple"))
console.log(fruits.indexOf("Apple"))

let aaa = [1,2,3]
let bbb = [11,22,33]
console.log(aaa.concat(bbb))


let fa =[[2,3,4],[33,44,55],[55,66,7]]
console.log(fa.flat())

//                  0         1        2          3
let vegetables = ["tomato","potato","brinjal","ladyfinger"]
console.log(vegetables.sort())
console.log(vegetables.reverse())
console.log(vegetables.join('@'))
//console.log(vegetables.fill("a",1,3))
console.log(vegetables.fill("a",1))

// slice()

//              0      1         2          3
let cities = ["pune","mumbai","banglore","kolkata"]
//              -4       -3      -2          -1

console.log(cities.slice(1))
console.log(cities.slice(-3))
console.log(cities.slice(1,4))
console.log(cities.slice(2,-1))
console.log(cities.slice(-1,-4))

// cities.splice(1,2)
// console.log(cities)

cities.splice(1,2,"nagpur","wardha")
console.log(cities)

// string 

let country = "India"
country = 'India'
country = `India`

let firstName = "chinmay"
let lastName = "deshpande"
console.log(`My firstName is ${firstName} and lastName is ${lastName}`)


// string - object -- property and method

// string stores the value by index

let district = "nagpur"

// 0 1 2 3 4 5
// n a g p u r

for(let i = 0 ; i < district.length ; i++){
    console.log(i,district[i])
}
// property 
console.log(district.length)

// method

district =  " Nagpur "

console.log(district.toUpperCase())
console.log(district.toLowerCase())
console.log(district.includes('ag'))
console.log(district.indexOf('p'))
console.log(district.trimStart())
console.log(district.trimEnd())
console.log(district.trim())
console.log(district.startsWith('N'))
console.log(district.endsWith('z'))

let splitA = "chinmay shirish deshpande"
let tta = splitA.split(' ')
//["chinmay","shirish","deshpande"]
console.log(tta)

let ttb = splitA.split('a')
//"chinm","y shirish deshp","nde"
console.log(ttb)

let aq ="wardha" 
let nn = aq.charAt(0)
console.log(nn)

// Object

let info = ["chinmay","deshpande",22,33]

let info2 = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:12,
    rollNo:55
}

// retrive 

// console.log(info2.firstName)
// console.log(info2['firstName'])

// // delete 

// delete info2['firstName']
// delete info2.age

// // update

// info2.firstName = "amol"
// info2['firstName'] = "amol2"

// // add

// info2.lang = "hindi"
// info['city'] = "pune"

for(let prop in info2){
    console.log(prop,info2[prop])
}