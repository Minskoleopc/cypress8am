// // lexical scope 
// {
// function addition(){
//     let a = 10
//     let b = 20 
//     console.log(a+b) // 30

//     function additionB(){
//         let c = 40
//         let d = 30
//         console.log(a+b) // 30
//         console.log(c+d)
//         //console.log(e)
//         function additionC(){
//             let e = 50
//             let f = 90
//             console.log(a+b+c+d+e+f)

//         }
//         additionC()
//     }
//     additionB()

// }
// addition()

// // closures 

// // function add(x,y){
// //     console.log(x+y) // 25
// //     return x + y
// //     console.log('hello')
// // }
// // let t = add(12,13)
// // console.log(t) // 25

// function addC(){
//     let x = 100
//     let y = 50
//     return function(){
//         console.log(x+y)
//     }
// }
// let tt = addC()

// // let tt = function(){
// //     console.log(x+y)
// // }

// console.log(tt)
// tt()


// // let and const  are bloceked scope

// // program 3

// // let x = 10
// // console.log(x)

// // {
// //     let y = 40
// //     console.log(y)
// // }

// // console.log(y)


// let i = 100 
// {
//     i = 300
//     console.log(i) // 300
// }
// console.log(i) // 300


// let u = 100 
// {
//     let u = 700
//     console.log(u) //700
// }
// console.log(u)// 100


// const o = 900
// {
//     let o = 77
//     console.log(o) // 77
// }

// console.log(o) // 900


// const hh = 100
// {
//     const hh = 300
//     console.log(hh)
// }
// console.log(hh) // 100





// // actual difference between arrow function and normal function


//     let info = {
//         firstName:"chinmay",
//         lastName:"deshpande",
//         display:function(){
//             console.log(this.firstName + this.lastName)
//             let display2 = function(){
//                 console.log(this.firstName + this.lastName)
//             }
//             display2()
//         }
//     } 
//     info.display()


//}

// lexical scope 

function additionA() {
    let x = 10
    let y = 20
    console.log(x + y)
    //console.log(g)
    function additionB() {
        let a = 100
        let b = 50
        console.log(x + y)
        console.log(a + b)
        console.log(g)
        function additionC() {
            // let g = 10
            console.log(a + b + x + y)
            console.log(g)
        }

        additionC()
    }

    additionB()
}
//additionA()


// closure 

function additionE(x, y) {
    return x + y
    console.log('hello')

}
let a = additionE(12, 13)
console.log(a)

function additionF() {
    let x = 100
    let y = 30
    return function () {
        console.log(x + y)
    }
}

let r = additionF()
console.log(r)
// let r = function(){
//     console.log(x+y)
// }

r()

// actual difference between expression and arrow function

// var firstName = "ram"
// var lastName = "dani"


// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     display:function(){
//         console.log(this) // this ===> info
//         console.log(this.firstName + this.lastName)
//         let display2 = function(){
//             // this ===> window
//             console.log(this.firstName + this.lastName)
//         }
//         display2()
//     }
// }
// info.display()




// var firstName = "ram"
// var lastName = "dani"


// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     display:function(){
//         console.log(this) // this ===> info
//         console.log(this.firstName + this.lastName)//
//         let display2 = ()=>{
//             // this ===> info
//             console.log(this.firstName + this.lastName) //
//         }
//         display2()
//     }
// }
// info.display()


// info  ==> this ===> window
let info = {
    firstName: "chinmay",
    lastName: "deshpande",
    display: () => {
        console.log(this) // this ===> window
        console.log(this.firstName + this.lastName)//
        let display2 = () => {
            // this ===> window
            console.log(this.firstName + this.lastName) //
        }
        display2()
    }
}
info.display()

// why not let
// var x = 10
// console.log(window.x)


// call() , bind() apply()

// let amol = {
//     firstName: "amol",
//     lastName: "rao",
//     age: 23,
//     rollNo: 23,
//     display: function () {
//         console.log(this.firstName + this.lastName)
//     }
// }
// amol.display()
// // method borrowing
// let display2 = amol.display

// // let display2 = function(){
// // console.log(this.firstName + this.lastName)
// // }

// display2()









