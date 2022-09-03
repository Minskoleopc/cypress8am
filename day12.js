// actual difference between for loop and while loop


//Math

// console.log(Math.floor(12.3)) // 12
// console.log(Math.ceil(22.4)) // 23
// console.log(Math.round(22.4)) // 22
// console.log(Math.round(22.5))//23
// console.log(Math.random()) // 0 - 1 e.g 0.33 , 0.44
// console.log(Math.random()*6) // 0 - 5.99 e.g 5.12 ,4.33
// console.log(Math.floor(Math.random() * 6)) // 0 ,1 ,2 ,3,4,5
//console.log(Math.floor(Math.random() * 6)+1)

// guess one time 
// let randomNumber = Math.floor(Math.random()*6)+1
// console.log(randomNumber)
// let userInput = prompt('Enter any number between 1 to 6')
// if(randomNumber == userInput){
//     console.log('your guess is correct')
// }
// else {
//     console.log('your guess is incorrect')
// }


// guess 5 times  (for loop)

// let randomNumber = Math.floor(Math.random()*6)+1 // 5
// console.log(randomNumber)
// for(let i = 0 ; i < 5 ; i++){
//     let userInput = prompt('Enter any number between 1 to 6') //4 , 3 // 5
//     if(randomNumber == userInput){ 
//         console.log('you guess is correct')
//         break
//     }
//     else {
//         console.log('incorrect guess , please try again')
//     }

// }






// guess until it matches


// progrom 

// Math.floor(12.3) // 12
// Math.ceil(23.22)// 23
// Math.round(12.3)// 12
// Math.round(12.5) // 13
// Math.random() // 0 - 1
// Math.random()*6 // 0 - 5.99
// Math.floor(Math.random()*6) // 0,1,2,3,4,5
// Math.floor(Math.random()*6) + 1 // 1,2,3,4,5,6

// program 


// let randomNumber = Math.floor(Math.random()*6) + 1
// console.log(randomNumber)
// let userInput = prompt('Please enter any number between  1 to 6')
// if(randomNumber == userInput){
//     console.log('you guess is correct')
// }
// else {
//     console.log('you guess is incorrect')
// }

// program 2

// let randomNumber2 = Math.floor(Math.random()*6) + 1
// console.log(randomNumber2)
// for(let i = 0  ; i < 5 ; i++){
//     let userInput = prompt('Please Enter any number from 1 to 6')
//     if(userInput == randomNumber2){
//         console.log('your guess is correct ')
//         break
//     }
//     else {
//         console.log('you guess is incorrect please try again')
//     }
    
// }

// program 3

//let randomNumber2 = Math.floor(Math.random()*6) + 1  //3
// console.log(randomNumber2)
// let userInput = prompt('Please Enter any number from 1 to 6')   // 3
// while(randomNumber2 != userInput){
//     userInput = prompt('Please Enter any number from 1 to 6')  
//     if(userInput == randomNumber2){
//         console.log('you guess is correct ')
//         break
//     }
//     else {
//         console.log('you guess is correct please try again')
//     }

// }


// program 4
// let randomNumber2 = Math.floor(Math.random()*6) + 1  // 3
// console.log(randomNumber2)
// do {
//     let userInput = prompt('Please Enter any number from 1 to 6')   //3
//     if(randomNumber2 == userInput){
//         console.log('your guess is correct ')
//         break
//     }
//     else {
//         console.log('you guess is incorrect try again')
//     }
// }while(userInput != randomNumber)