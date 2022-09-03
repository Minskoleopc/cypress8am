// ===> input 

// output --- 10
// output ---- 15

// numberOfTickets == <= 5  ===> 10%
// numberoftickets > 5 ===> 20 %


// 1 <= 5 ==> 5 %
// 5 > && <= 10  ==> 20 %
// 10 > =====> 30 %

// syntax

// if(condition){
//     // statement 
// }
// else {
//     condition
// }

// let numberOfTicket =11
// if(numberOfTicket > 0 && numberOfTicket <=5){
//     console.log('10 % discount')
// }
// if(numberOfTicket > 5 && numberOfTicket <=10){
//     console.log('20 % discount')
// }
// if(numberOfTicket > 10){
//     console.log('50 % discount')
// }
// ------------------------------------>

let numberOfTicket = - 11
if(numberOfTicket > 0 && numberOfTicket <=5){
    console.log('10 % discount')
}
else if(numberOfTicket > 5 && numberOfTicket <=10){
    console.log('20 % discount')
}
else if(numberOfTicket > 10){
    console.log('50 % discount')
}
else {
    console.log('incorrect input')
}

// Truthy and Falsy value in js

// falsy = > undefined , null , NaN , 0 , false , 8 !== 8
// truthy value ==>  1 , true , -2 , -4 ,4,'A', '!'

let a 
console.log(a)
if(a){
    console.log('hello')
}
else {
    console.log('bye')
}

// NaN
let b  = undefined + undefined
if(b){
    console.log("hello")
}
else {
    console.log('bye')
}

// 0

if(0){
    console.log('hello')
}
else {
    console.log('bye')
}

if(null){
    console.log('hello')
}
else {
    console.log('bye')
}

if(8 !== 8){
    console.log('hello')
}
else {
    console.log('bye')
}

/*---------------------*/

if(8){
    console.log('hello')
}
else {
    console.log('bye')
}

if(-8){
    console.log('hello')
}
else {
    console.log('bye')
}


if("hello"){
    console.log('hello')
}
else {
    console.log('bye')
}


if("@"){
    console.log('hello')
}
else {
    console.log('bye')
}


if(8 == '8'){
    console.log('hello')
}
else {
    console.log('bye')
}


let city = "indore"


// switch(city){
//     case "pune":
//         console.log('MH')
//     case 'bhopal':
//         console.log('MP')
    
//     case 'lucknow':
//         console.log('UP')
//     case "patna":
//         console.log('Bihar')
//     default:
//         console.log('incorrect city')
// }


// switch(city){
//     case "pune":
//         console.log('MH')
//         break
//     case 'bhopal':
//         console.log('MP')
//         break
//     case 'lucknow':
//         console.log('UP')
//         break
//     case "patna":
//         console.log('Bihar')
//         break
//     default:
//         console.log('incorrect city')
// }

// switch(city){
//     case "pune":
//     case "nagpur":
//         console.log('MH')
//         break
//     case 'bhopal':
//     case "indore":
//         console.log('MP')
//         break
//     case 'lucknow':
//     case 'kanpur':
//         console.log('UP')
//         break
//     case "patna":
//     case 'Gaya':
//         console.log('Bihar')
//         break
//     default:
//         console.log('incorrect city')
// }









