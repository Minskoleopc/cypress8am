

// program 1 - only one chance to guess

// let randonRandom = Math.floor(Math.random()*6 ) + 1   // 1,2,3,4,5,6
// console.log(randonRandom)
// let userInput = prompt('please enter any number between 1 to 6') // 
// if(randonRandom == userInput){
//     console.log('your guess is correct')
// }
// else {
//     console.log('you guess is incorrect')
// }

// program 2

// let randonRandom = Math.floor(Math.random()*6 ) + 1 
// console.log(randonRandom)
// for(let i = 0 ; i < 5 ; i++){
//     let userInput = prompt('please enter any number between 1 to 6')
//     if(userInput == randonRandom){
//         console.log('your guess is correct')
//         break
//     }
//     else {
//         console.log('your guess is incorrect')
//     }
// }

// program 3

// let randonRandom = Math.floor(Math.random()*6 ) + 1  // 5
// console.log(randonRandom)
// let userInput = prompt('please enter any number between 1 to 6') // 5

// while(userInput != randonRandom){
//     userInput = prompt('please enter any number between 1 to 6') // 3 // 5
//     if(randonRandom == userInput){
//         console.log('you guess is correct')
//         break
//     }
//     else {
//         console.log('your guess is incorrect , please try again')
//     }

// }

// program 4
let randonRandom = Math.floor(Math.random()*6 ) + 1  // 4
console.log(randonRandom)
let userInput
do {

    userInput = prompt('Please Enter any number between 1 to 6') // 4
    if(randonRandom == userInput){
        console.log('your guess is correct')
        break
    }
    else {
        console.log('your guess is incorrect please try again')
    }


}while(userInput != randonRandom)