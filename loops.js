// for loop
// break and continue statement
// while break and continue 
// exact difference between while and for loop 
// do while 


// for(intialization ; conditionCheck ; increment/decrement){
//     // statment
// }

for(let i = 0 ; i < 3 ; i++){ //1 // 2 //3
    console.log('hello')
    console.log('bye')
}
// print 1 to 10 number
for(let i = 1 ;i <= 10 ; i++){
    console.log(i)
}

// print 10 to 1
for(let i = 10 ; i > 0 ; i--){
    console.log(i)
}

console.log('------------------------')

// print the table for 2

for(let i = 2 ; i <= 20 ; i = i + 2){
    console.log(i)
}

// break statment with for loop 

for(let i = 0 ; i < 5 ; i++){ // 1 //2
    if(i == 2){
        break
    }
    console.log(i) // 0 ,1
}


for(let i = 0 ; i < 5 ; i++){  //1 // 2
    console.log(i)  // 0 ,1 ,2
    if(i == 2){
        break
    }

}

// continue statement

for(let i = 0 ; i < 5 ; i++){ //1 // 2 // 3 // 4 // 5
    if(i == 3){
        continue
    }
    console.log(i) // 0 , 1 , 2 , 4
}


for(let h = 0 ; h < 6 ; h++){
    if(h == 2){
        continue   
    }
    console.log(h)
}


// while loop ()

//intialization

// while(condition){
//     // statement 
//     // increment / decremtn
// }


let i = 0 
while(i < 3){
    console.log('hello')
    console.log('bye')

    i ++ // 1 ,2 ,3
}


// print from 1 to 10

let ia = 1

while(ia <= 10){
    console.log(ia)
    ia ++

}

// print from 10 to 1 

let aa = 10

while(aa >= 1){
    console.log(aa)
    aa --
}

// table of 2 using while loop

let s = 2
while(s <= 20){
    console.log(s)
    s = s + 2
}


// break statement 
let t  = 5
while( t > 0) {
    if(t == 2){
        break
    }
    console.log(t) // 5 ,4 ,3
    t -- // 4 // 3 // 2

}

//while continue -- conditional statements



