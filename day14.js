// function 



let x = 10
let y = 5

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)

let s = 10
let t = 5

console.log(s+t)
console.log(s-t)
console.log(s*t)
console.log(s/t)
console.log(s%t)


// function declartion 
// function addA(x,y){
//     return x + y
// }
// let a = addA(12,6)
// console.log(a)

// function expression 

// let addB = function(x,y){
//     return x + y
// }
// let b = addB(12,6)
// console.log(b)

// arrow function

// let addC = (x,y)=>{
//     return x + y
// }
// addC(12,6)


// let addC = (x,y)=> x + y
// let d = addC(12,6)
// console.log(d)



// pass string as a parameter to function and return string 

function greet(word){
    return "Good " + word // string + string ==> string
}
let f = greet("morning")
console.log(f)
console.log(typeof f)

// pass number as a parameter to function and return number only
function mul(x,y){
    return x * y
}
let g = mul(12,6)
console.log(g)
console.log(typeof g)

// pass boolean as parameter to function and return boolean only
function canDrive(haveCar,age){
    if(age > 18 && haveCar){
        return true 
    }
    else {
        return false
    }
}
let j = canDrive(true,19)
console.log(j)

// pass array as parameter to function and return array
let oo = [33,44,11,22,33,45,666,77,44,55,66]
function above30(arr){
    let q = arr.filter(function(el){
        return el > 30
    })

    return q
}
let k = above30(oo)
console.log(k)


// pass object as parameter to another function and return object 

let kk = {
    firstName:"chinmay",
    lastName:"despande",
    age:23
}


function updateAge(info){

    // let info = {
    //     firstName:"chinmay",
    //     lastName:"despande",
    //     age:23
    // }

    info.age = 55
    return info

}

let lll = updateAge(kk)
console.log(lll)


// function as parameter to another function 

// let x1 = 10
// console.log(x1)

let div = function(x,y){
    return x / y
}
// console.log(div)
// div(12,6)


function division(a,b,fn){
    // let fn = function(x,y){
    //     return x / y
    // }

    let rr = fn(a,b)
    return rr
}
let rrr = division(12,6,div)
console.log(rrr) // 2







// function as a return type from another function


