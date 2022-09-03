
// conditional statement 


// either true or false
// if(condition){

// }
// else {


// }
// when ??


// input ----- numberofTicket ==>  1 to 5 ====> 10 %
//                    5 > && <=10   ===========>  20 %
//                    10 >          ===========> 50 %

// program 1

// let numberOfTickets = 5
// if(numberOfTickets > 0 && numberOfTickets <= 5){
//     console.log('10 % discount')
// }

// if(numberOfTickets >= 5 && numberOfTickets <= 10){
//     console.log('20 % discount')
// }
// if(numberOfTickets > 10){
//     console.log('50 % discount')
// }

/*------------------------------------------------*/

// program 2

// let numberOfTickets2 =  5
// if(numberOfTickets2 > 0 && numberOfTickets2 <= 5){
//     console.log('10 % discount')
// }

// else if(numberOfTickets2 >= 5 && numberOfTickets2 <= 10){
//     console.log('20 % discount')
// }
// else if(numberOfTickets2 > 10){
//     console.log('50 % discount')
// }
// else {
//     console.log('Incorrect input')
// }


// falsy value  -  null, undefined ,NaN ,0 ,false ,9 !== 9
// truthy value  - 'A','chinmay',1,-2 '@', true, 9 === 9


// if(9 === 9){
//     console.log('hello')
// }
// else {
//     console.log('bye')
// }


// if(true){
//     console.log('hello')
// }
// else {
//     console.log('bye')
// }



// if("hello"){
//     console.log('hello')
// }
// else {
//     console.log('bye')
// }


// if(-1){
//     console.log('hello')
// }
// else {
//     console.log('bye')
// }


// if(1){
//     console.log('hello')
// }
// else {
//     console.log('bye')
// }


// if("A"){
//     console.log('hello')
// }
// else {
//     console.log('bye')
// }

// if(9 !== 9){
//     console.log('hello')
// }
// else {
//     console.log('bye')
// }



// if(false){
//     console.log('hello')
// }
// else {
//     console.log('bye')
// }

// if(undefined + undefined){ // NaN
//     console.log('hello')
// }
// else {
//     console.log('bye')
// }


// if(0){
//     console.log('hello')
// }
// else {
//     console.log('bye')
// }





// let a 

// if(a){
//     console.log('hello')
// }
// else {
//     console.log('bye')
// }



// if(null){
//     console.log('hello')
// }
// else {
//     console.log('bye')
// }

let city = "nagpur"

// switch(city){
//     case "pune":
//         console.log("MH")
//     case "bhopal":
//         console.log("MP")
    
//     case "lucknow":
//         console.log("UP")
//     default:
//         console.log('Incorrect city')
// }

// switch(city){
//     case "pune":
//         console.log("MH")
//         break
//     case "bhopal":
//         console.log("MP")
//         break
//     case "lucknow":
//         console.log("UP")
//         break
//     default:
//         console.log('Incorrect city')
// }

switch(city){
    case "pune":
    case "nagpur":
        console.log("MH")
        break
    case "bhopal":
    case "indore":    
        console.log("MP")
        break
    
    case "lucknow":
    case "kanpur":
        console.log("UP")
        break
    default:
        console.log('Incorrect city')
}