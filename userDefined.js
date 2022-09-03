// // Object -- property and method

// // Object literal

// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     age:12,
//     rollNo:123,
//     display:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:11,
//     rollNo:111,
//     display:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// chinmay.display()



// // console.log(amol.firstName)
// // console.log(amol.lastName)
// // amol.display()

// // // template ----> object creation 


// // setting property value of object outside the class

// // class Person {

// //     firstName=undefined
// //     lastName= undefined
// //     rollNo=undefined
// //     age = undefined

// //     display(){
// //         console.log(this.firstName + this.lastName)
// //     }

// // }

// // let chinmay2 = new Person()
// // console.log(chinmay2)

// // chinmay2.age = 12
// // chinmay2.lastName = "deshpande"
// // chinmay2.rollNo = 33
// // chinmay2.firstName = "chinmay"

// // console.log(chinmay2)
// // chinmay2.display()

// // setting the property value of object at the time of object creation 


// class Person1 {
//     constructor(fn,ln,roll,age){
//         this.firstName = fn
//         this.lastName = ln
//         this.roll = roll
//         this.age = age

//     }

//     display(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// let chinmay3 = new Person1("chinmay3","deshpande3",22,44)
// let harikesh = new Person1("harikesh","prasad",33,44)
// let sarika = new Person1('sarika',"pansare",44,55)

// console.log(chinmay3)
// chinmay3.display()

// sarika.lang = "hindi"
// console.log(chinmay3)
// console.log(sarika)


// Javascript object --->
//Object --- property and method
// method - action and return 

// Object literal

let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:12,
    rollNo:23,
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}
console.log(chinmay.firstName)
console.log(chinmay['firstName'])
chinmay.display()

let amol = {
    firstName:"amol",
    lastName:"rao",
    age:22,
    rollNo:34,
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}
console.log(amol.firstName)
amol.display()

// template
// Setting the object values outside the class

// class Person {

//     firstName = undefined
//     lastName = undefined
//     age = undefined
//     rollNo = undefined

//     display(){
//         console.log(this.firstName + this.lastName)
//     }

// }

// let amol2 = new  Person()
// console.log(amol2)
// amol2.firstName = "amol2"
// amol2.lastName = "rao2"
// amol2.roll = 45
// amol.age = 56
// console.log(amol2)



class Person2 {

    constructor(fn,ln,age,rollNo){
        this.firstName = fn
        this.lastName = ln 
        this.age = age
        this.rollNo = rollNo
    }

    display(){
        console.log(this.firstName + this.lastName)
    }
}

let amol3 = new Person2("amol3","rao3",22,34)
let chinmay3 = new Person2("chinmay3","deshpande3",34,45)
console.log(amol3)
amol3.display()
console.log(chinmay3)
chinmay3.display()

// setting the values using get function


class Person3 {


    setAge(ag){
        this.age = ag
    }
    setFirstName(fn){
        this.firstName = fn
    }

    setLastName(ln){
        this.lastName = ln
    }

    setRoll(rollNo){
        this.rollNo = rollNo
    }

}

let chinmay4 = new Person3()
console.log(chinmay4)
chinmay4.setAge(12)
chinmay4.setFirstName("chinmay")
chinmay4.setLastName("deshpande")
chinmay4.setRoll(23)
console.log(chinmay4)

// String , Object , Array , Functions , Userdefined datatype


// DOM - html elements

