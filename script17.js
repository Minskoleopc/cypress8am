
// // array 
// // object 
// // string 
// // usedefined 


// // set does not stores the value by index 
// // set does not store duplicate values 
// // while creating set you can pass iterables 

// let setA = new Set()
// console.log(setA)

// // add()

// setA.add("chinmay")
// setA.add("chinmay")
// setA.add("poorva")
// setA.add("ram")
// console.log(setA)

// //console.log(setA[0])
// // has()
// let q1 = setA.has("poorva")
// console.log(q1)

// let q2 = setA.delete("poorva")
// console.log(setA)
// console.log(q2)

// // add(), has() ,delete() ,clear() size

// let q3 =setA.clear()
// console.log(q3)
// console.log(setA)


// let setB = new Set(["dani","deshpande","deshmukh","dani"])
// console.log(setB)
// console.log(setB.size)


// let a = [11,22,33,44,55]
// for(let i = 0 ; i < a.length ; i++){
//     //console.log(i)
//     console.log(a[i])
// }

// let info = {
//     firstName:"shirish",
//     lastName:"deshpande",
//     rollNo:22,
//     skills:["python","html"]
// }

// for(let prop in info){
//     console.log(prop,info[prop])
// }

// for(let val of setB){
//     console.log(val)
// }


// setB.forEach(function(val){
//     console.log(val)
// })


// let setC = new Set(["amol","amit","amol","amit"])
// console.log(setC)  

// let setD = new Set("chinmayee")
// console.log(setD)

// Map stores the data in key val format like obj
// Unlike object map can have various type of keys

// let info2 = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     1:23
// }

// number , string , boolean

// set()
let mapA = new Map()
mapA.set('fullName',"chinmay")
mapA.set(1,"audi")
mapA.set(true,"married")
console.log(mapA)


// size has()
console.log(mapA.size)
let q33 = mapA.has(2)
console.log(q33)

// delete()
// mapA.delete(1)
// console.log(mapA)

// mapA.clear()
// console.log(mapA)

for(let [key,value] of mapA){
    console.log(key,value)
}

let k = [22,33]
let [a11,a22] = k


// Array , Objects , Map and Set
// set stores unique values 
// set does not stores the value by index
// set also has property and method
// generally used to remove the duplicate data


let SetA =  new Set()
console.log(SetA)

// add()
SetA.add("chinmay")
SetA.add("Sarika")
SetA.add("chinmay")
SetA.add("Poorva")
console.log(SetA)
// has()
let q1 = SetA.has('chinmay')
let q2 = SetA.has('Chinmay')
console.log(q1)
console.log(q2)
// delete()
let q3  = SetA.delete('chinmay')
console.log(q3)
console.log(SetA)
// clear()
// SetA.clear()
// console.log(SetA)
// size
console.log(SetA.size)
console.log(SetA)
// forEach()
SetA.forEach(function(el){
     console.log(el)
})
// for loop
for(let val of SetA){
    console.log(val)
}

// declare set with array and string 

let setB = new Set(["pune","mumbai","banglore","kolkata","pune"])
console.log(setB)

let setC = new Set("poorva")
console.log(setC)


// map and object (difference??)

let info = {
    firstName:"chinmay",
    1:"audi",
    true:"isMarried"
}
console.log(info)


let map1 = new Map()

// set('key','val')
map1.set('firstName',"chinmay")
map1.set(1,"audi")
map1.set(true,"isMarried")
console.log(map1)
// get()
console.log(map1.get(1))
// has()
console.log(map1.has(1))
// delete
map1.delete(1)
console.log(map1)

// clear()
// map1.clear()
// console.log(map1)
// size
console.log(map1.size)

// loops 

let map2 = new Map()
// set('key','val')
map2.set('firstName',"chinmay")
map2.set(1,"audi")
map2.set(true,"isMarried")

console.log(map2.keys())
console.log(map2.values())
console.log(map2.entries())

for(let key of map2.keys()){
    console.log(key)
}
for(let val of map2.values()){
    console.log(val)
}
for(let [key,val] of map2.entries()){
    console.log(key,val)
}