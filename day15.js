
// // // Object literal
// // let chinmay = {
// //     firstName:"chinmay",
// //     lastName:"deshpande",
// //     age:12,
// //     rollNo:45
// // }

// // let amol = {
// //     firstName:"amol",
// //     lastName:"rao",
// //     age:23,
// //     rollNo:44
// // }

// // // 10  object  ====>  40 lines 

// // // function constructor
// // let Person = function(fn,ln,age,rollNo){
// //     this.firstName = fn
// //     this.lastName = ln
// //     this.age = age
// //     this.rollNo = rollNo

// // }
// // let chinmay2 = new Person("chinmay2","deshpande2",23,33)
// // let amol2 = new Person("amol2","rao2",33,44)
// // console.log(chinmay2)
// // console.log(amol2)

// // // Es6 class 
// // class Person2 {
// //     constructor(fn,ln,rollNo,age){
// //         this.firstName = fn
// //         this.lastName = ln
// //         this.rollNo = rollNo
// //         this.age = age
// //     }
// // }

// // let amol3 = new Person2("amol3","rao3",45,34)
// // let chinmay3 = new Person2("chinmay3","deshpande",34,45)
// // console.log(amol3)

// // chinmay3.city = "pune"
// // chinmay3['language'] = "hindi"
// // console.log(chinmay3)

// // // Object.create

// // // let chinmay4 = Object.create({})
// // // console.log(chinmay4)

// // // chinmay4.firstName = "chinmay4"
// // // chinmay4.lastName = "deshpande4"
// // // chinmay4.age = 23
// // // chinmay4.rollNo = 55

// // // console.log(chinmay4)


// // let proto = {
// //     init(fn,ln,age,roll){
// //         this.firstName = fn 
// //         this.lastName = ln 
// //         this.age = age 
// //         this.roll = roll
// //     }
// // }

// // let chinmay5 = Object.create(proto)
// // chinmay5.init('chinmay5',"deshpande5",34,55)
// // console.log(chinmay5)


// // // Object --- literal 
// // // function constructor 
// // // es6 class 
// // // Object.create()










// // // //retrive (dot notation and bracket notation)

// // // console.log(chinmay.firstName)
// // // console.log(chinmay['firstName'])

// // // // update (dot notation and bracket notation)

// // // chinmay.firstName = "tanmay"
// // // chinmay['firstName'] = "ram"


// // // // add(dot notation and bracket notation)

// // // chinmay.city = "pune"
// // // chinmay['language']  = "hindi"

// // // // delete(dot notation and bracket notation)

// // // delete chinmay.firstName
// // // delete chinmay['lastName']

// // object literal

// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     rollNo:23,
//     age:44
// }

// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     age:23,
//     rollNo:55
// }

// // funnction constructor

// let Person = function(firstName,lastName,age, rollNo){

//     this.firstName = firstName
//     this.lastName = lastName
//     this.rollNo = rollNo
//     this.age = age

// }

// let amol2 =  new Person("amol2","rao2",44,55)
// console.log(amol2)

// // retrive 
// console.log(amol2.firstName)
// console.log(amol2['lastName'])
// // update 
// amol2.firstName = "tanmay"
// amol2['firstName'] = "rahul"
// // add 

// amol2.city = "pune"
// amol2['language'] = "hindi"

// // delete
// delete amol2.city
// delete amol2['city']

// // class Es6


// class Person2 {
//     constructor(firstName,lastName,age,rollNo){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age 
//         this.rollNo = rollNo
//     }

// }

// let amol3 = new Person2("amol3","rao3",12,34)
// console.log(amol3)

// // object literal 
// // function constructor 
// // Es6 class
// // Object.create


// let pro = {
//     init(firstName,lastName,age,rollNo){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age 
//         this.rollNo = rollNo
//     }
// }
// let amol4 = Object.create(pro)
// console.log(amol4)
// amol4.init("amol4","rao4",23,33)
// console.log(amol4)

// // Prototype interitance


// // let Vehicle = function(color,type,name,modelNo){
// //     this.color = color
// //     this.type = type 
// //     this.name = name 
// //     this.modelNo = modelNo
// //     this.displayColor = function(){
// //         console.log(this.color)
// //     }
// // }

// // let audi = new Vehicle("red","sedane","q6",'123')
// // let bmw = new Vehicle("blue","SUV","bw1",'456')
// // audi.displayColor()
// // bmw.displayColor()

// // console.log(audi)
// // console.log(bmw)


// // object __proto__

// let Vehicle = function(color,type,name,modelNo){
//     this.color = color
//     this.type = type 
//     this.name = name 
//     this.modelNo = modelNo
//     // this.displayColor = function(){
//     //     console.log(this.color)
//     // }
// }

// Vehicle.prototype.displayColor = function(){
//     console.log(this.color)
// }
// Vehicle.prototype.city = "pune"

// let audi = new Vehicle("red","sedane","q6",'123')
// let bmw = new Vehicle("blue","SUV","bw1",'456')
// audi.displayColor()
// bmw.displayColor()
// console.log(bmw.city)
// console.log(audi.city)

// console.log(audi)
// console.log(bmw)
// console.log(audi.__proto__ === Vehicle.prototype)
// console.log(bmw.__proto__ === Vehicle.prototype)

// console.log(audi instanceof Vehicle)
// console.log(bmw instanceof Vehicle)

// console.log(audi.hasOwnProperty('city'))
// console.log(audi.hasOwnProperty('name'))


// function add(x,y){
//     return x+y
// }
// let c = add(23,24)
// document.write(`<h1>${c}<h1>`)

// Prototype inheritance 


let Person = function(firstName,lastName , age ,rollNumber){
    this.firstName = firstName 
    this.lastName = lastName
    this.age = age 
    this.rollNumber = rollNumber
    // this.display = function(){
    //     console.log(this.firstName + this.lastName)
    // }

}

let amol5 = new Person("amol","rao",12,23)
let amol6 = new Person("amol6","rao6",23,45)

console.log(amol5)
console.log(amol6)

console.log(amol5 instanceof Person)
console.log(amol6 instanceof Person)

// Every object has one property __proto__ === parentPrototype

console.log(amol5.__proto__ === Person.prototype)
console.log(amol6.__proto__ === Person.prototype)

Person.prototype.display = function(){
    console.log(this.firstName)
}

console.log(amol5)
console.log(amol6)

amol5.display()
amol6.display()


// -------------------------------->

//every object has one property __proto__ === parent.prototype



let Vehicle = function(color,type,regNo){
    this.color = color
    this.type = type
    this.regNo = regNo
    // this.displayColor = function(){
    //     console.log(this.color)
    // }

}

let audi = new Vehicle('red',"sedane",123)
let bmw = new Vehicle('black',"SUV",567)

console.log(audi)
console.log(bmw)

// audi.displayColor()
// bmw.displayColor()

// Every object has property ----> __proto__ === Parent.prototype
Vehicle.prototype.displayColor = function(){
    console.log(this.color)
}
Vehicle.prototype.city = "pune"

console.log(audi.__proto__ === Vehicle.prototype)
console.log(bmw.__proto__ === Vehicle.prototype)

audi.displayColor()
bmw.displayColor()

console.log(audi instanceof Vehicle)
console.log(bmw instanceof Vehicle)

console.log(audi.city)
console.log(bmw.city)

console.log(audi.hasOwnProperty('city'))
console.log(bmw.hasOwnProperty('city'))

console.log(audi.hasOwnProperty('type'))
console.log(bmw.hasOwnProperty('type'))


//-----------------------------------------

// Object  ES6 Class


class Person3{
    constructor(firstName,lastName,age,rollNo){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age 
        this.rollNo = rollNo
        this.displayName = function(){
            console.log(this.firstName + this.lastName)
        }
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}


let aa = new Person3("a",'b',12,13)
let bb = new Person3("c",'d',11,10)

console.log(aa)
console.log(bb)

aa.displayName()
bb.displayName()

console.log(aa.__proto__ === Person3.prototype)
console.log(aa.__proto__ === Person3.prototype)

// Object create

let proto = {

    init(firstName,lastName,age,roll){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.rollNo = roll
    },

    displayName(){
        console.log(this.firstName + this.lastName)
    }

}

let amol7 = Object.create(proto)
console.log(amol7)
amol7.init("c","d",12,24)
console.log(amol7)






















