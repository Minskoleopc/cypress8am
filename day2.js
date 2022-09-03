
/*-----------------------------*/

//type  --- object ------- property and method
// human ---- amol   ------ weigth , height , age talk() walk()
// vehicle---- audi ------- color , sedane , start() , stop()
// Bank acc  ----  chinmay ---- bal , accName , accNo depoist() withdrawl()

// Number -----> -0 ,2,3,66.7
// String ----> collection of characters "chinmay"
// Boolean ------>    true or false
let  x = 10
console.log(typeof x)

x = "chinmay"
console.log(typeof x)

x = true 
console.log(typeof x)

/*---------------------------*/

// comparision operator 
//< , > , <= , >= , != , == , === , !==
//enity < entity ====> boolean (either true or false)

console.log(3 > 2) // true
console.log( 6 < 7) // true
console.log(8 < 7) // false
console.log(5 >= 5) // true
console.log(5 <= 5) // true
console.log(7 != 7) //  false
console.log(7 == 7) // true


console.log(7 == '7') // true  // only value  and not type
console.log(7 === '7') // false // both value and type

console.log(typeof '7') // string 
console.log(typeof 7) // number
// '7' // ===> string
// 7 // =====> number
console.log(7 !== 7) // value and type
console.log(7 !== '7')  // value and type
console.log(7 === 7) //true
console.log(7 == '7') // value
console.log(8 === '8') // value and type
console.log(6 === 7) // value and type

// Logical


// OR , NOT , AND

//AND 
//True   True ====> True
//True   False ====> False
//False  True ====> False
//False  False ====> False

// OR
//True   True ====> True
//True   False ====> True
//False  True ====> True
//False  False ====> False

// NOT 
// True --> false
// False --- true

//AND  &&
//True   True ====> True
console.log(7 > 6 && 8 == 8)
//True   False ====> False
console.log(8 == 8 && 9 != 9)
//False  True ====> False
console.log(7 != 7 && true)
//False  False ====> False
console.log(8 === '8' && 2 === '2')

// OR
//True   True ====> True
console.log(true || true)
//True   False ====> True
console.log(7 === 7 || 7 != 7)
//False  True ====> True
console.log(6 !== 6 || 5 == '5')
//False  False ====> False
console.log(7 !== 7 ||  8 > 9 )

// NOT
console.log(!true)
console.log(!false)


// Mobile =================================>













