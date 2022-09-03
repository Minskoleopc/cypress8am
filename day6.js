let  names = "chinmay"
let x = 10
let y = true

console.log(typeof names)
console.log(typeof x )
console.log(typeof y)

//              0       1         2       3
let fruits = ["apple","mango","banana","grapes"]
console.log(fruits[0])
console.log(fruits[2])
fruits[2] = "chikoo"
console.log(fruits)


/*----------------------------------------------------------*/

fruits = ["apple","mango","banana","grapes"]
// Array - object -- property and method 
// method - action and return type
// property
let a  = fruits.length
console.log(a)
console.log(typeof a)

// 23

fruits = ["apple","mango","banana","grapes"]
// push()
// action - adds the element at last 
// return - new length of array
let aa = fruits.push('papaya')
console.log(aa)
console.log(fruits)

// unshift()
//action - adds the element at first
//return - new length of array
//[ 'apple', 'mango', 'banana', 'grapes', 'papaya' ]
let bb = fruits.unshift('grapes')
console.log(bb)
console.log(fruits)

// pop()
// action - removes the last element
// return - same element
fruits = ["apple","mango","banana","grapes"]
let cc = fruits.pop()
console.log(cc)
console.log(fruits)

//shift()
//action - removes the first element
// return -- same element 

let dd = fruits.shift()
console.log(dd)
console.log(fruits)


fruits = ["apple","mango","banana","grapes"]

// includes - 
// action - search the element
// return --- if element is found return true else false(boolean)
let ee  = fruits.includes('Mango')
let ff  = fruits.includes('mango')
console.log(ee)
console.log(ff)

// indexOf()
// action - search for the index of element 
// if element is found return index(number) else return -1

//         0         1       2        3
fruits = ["apple","mango","banana","grapes"]
let gg = fruits.indexOf('mango')
let hh = fruits.indexOf('Banana')
console.log(gg)
console.log(hh)

// push(), unshift(), pop(),shift(),includes(),indexOf()

let vegetables = ["tomato","potato","brinjal","onion"]
let jj = vegetables.reverse()
console.log(jj)


// concat()
let numbersA  = [11,22,33]
let numbersB = [44,55,66]

let kk = numbersA.concat(numbersB)
console.log(kk)
let kkB = numbersB.concat(numbersA)
console.log(kkB)

//             0        1        2        3        4
let cities = ['pune','nagpur','bhopal','indore','mumbai']
//              -5      -4       -3      -2         -1
//cities.slice(startPosition,endposition(includes))

console.log(cities.slice(2))
console.log(cities.slice(1,5))
console.log(cities.slice(0,-2))
console.log(cities.slice(-4,-1))
console.log(cities.slice(-4))
console.log(cities.slice(-1,-4))

// let city = "nagpur"
// let jja = city.slice(2)
// console.log(jja)


// for

// let city3 = "mumbai"
// // 0 1 2 3 4 5
// // m u m b a i 

// for(let i = 0 ; i < city3.length ; i++){
//     //console.log(i)
//     console.log(city3[i])
// }
//              0       1     2     3      4
let country = ['india',"uk","uae","usa","pakistan"]
for(let i = 0 ; i < country.length ; i++){
    //console.log(i)
    console.log(country[i])
}


// parallel 

//               0        1       2         3       4
let fruits2 = ["apple","mango","banana","grapes","papaya"]
for(let i =  0 ;  i < fruits2.length ; i++){
    console.log(fruits2[i])
}

// map() ,filter() , reduce() , some(), every(),find(),findIndex(),forEach()

let  arr = [1,2,3,4,5,6,7,8,9,10]
// [2,4,6,8,10,12,14,16,18,20]
let oo =arr.map(function(el,index,arr){
    return el * 2
})  
console.log(oo)


let arr2 = [11,22,33,44,55]
// [16,27,38,49,60]
let ppp = arr2.map(function(el,index,arr){
    return el + 5
})
console.log(ppp)


// filter 
let j = [22,33,44,11,22,33,44,55,66,77,11,22,33,44,55]
//[55,66,77,55]
let kkk = j.filter(function(el,index,arr){
    return el > 50
})
console.log(kkk)

// forEach()


let namess = ["chinmay","poorva","ram","sham","jay"]
// welcome

let lll = namess.forEach(function(el,index,arr){
    console.log('welcome ' + el)
})
//console.log(lll)


//       0   1  2  3  4  5  6
let l = [33,44,55,66,77,22,33]
// [66,77]


// filter()
let aaa = l.filter(function(el){
    return el > 60
})
console.log(aaa)

// find()

let aaaa = l.find(function(el){
    return el > 60
})
console.log(aaaa)


let aaaaa = l.findIndex(function(el){
    return el > 60
})
console.log(aaaaa)


let rr = [44,55,11,22,33,44,5]
let ttt = rr.every(function(el,index,arr){
    return el > 10
})
console.log(ttt)

let ttta = rr.some(function(el,index,arr){
    return el > 100
})
console.log(ttta)

// map()
// filter()
// forEach() - does not return anythin
// find()
// findIndex()
// every()
// some()
// push()
// pop()
// shift()
// unshift()
// concat()
// reverse()
// includes()
// indexOf()
// reduce()
// slice()

/*--------------------------------------------*/
