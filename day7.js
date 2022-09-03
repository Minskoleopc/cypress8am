/*-----------------------------------------------------*/

// map() ,filter(), reduce(), forEach(),find(),findIndex(),every(),some()

// map
let numbers = [11,22,33,44,55,66,77,88,99,100]
let a = numbers.map(function(el,index,arr){
    return el + 2
})
console.log(a)

// filter
let b = numbers.filter(function(el,index,arr){
    return el > 50
})
console.log(b)

// forEach
numbers.forEach(function(el,index,arr){
    console.log(el * 22)
})

// find
numbers = [2,3,4,11,22,33,44,55,66,77,88,99,100,4,5,6,7]

let ba =  numbers.filter(function(el,index,arr){
    return el > 50
})
console.log(ba)

let baa =  numbers.find(function(el,index,arr){
    return el > 50
})
console.log(baa)


let baaa =  numbers.findIndex(function(el,index,arr){
    return el > 50
})
console.log(baaa)


// some() , every()

let iii = [22,33,11,22,33,44,55]
let qqq = iii.every(function(el,index,arr){
    return el > 44
})
console.log(qqq)

let aaa = [33,44,55,22,33,44,55]
let ddd = aaa.some(function(el,index,arr){
    return el >30
})
console.log(ddd)

// reduce()

let marks = [11,22,33]  // 33 + 33
let total = marks.reduce(function(acc,el,index,arr){
    return acc + el /// 33
},0)
console.log(total)

// sort()
let fruits = ['apple',"mango","banana","grapes"]
let bbb = fruits.sort()
console.log(bbb)

// flat()
//                 0           1          2
//              0  1   2   0   1   2  0  1  2
let numberC = [[11,22,33],[44,55,66],[88,99,100]]

console.log(numberC[0][2])
console.log(numberC[1][1])
let bbba = numberC.flat()
console.log(bbba)

// fill()
//arrC.fill('rep',startposition,endposition(not included))

let o = ["pune","nagpur","mumbai","banglore","kolkata"]
//let qq = o.fill('A',1)
let qq = o.fill('A',1,3)
console.log(qq)
// splice()


let country = ["India","UAE","USA","JAPAN"]

// country.pop()
// console.log(country)

// country.shift()
// console.log(country)

// let tt = country.splice(2,2)
// console.log(country)
// console.log(tt)

country.splice(1,2,"CUBA","SPAIN")
console.log(country)
// join()

let info = ["chinmay","deshpande",7709192441]
let aa = info.join(' ') // chinmay-deshpande-7709192441
console.log(aa)
