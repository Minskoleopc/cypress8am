// objects

let info = ["chinmay","deshpande",7709192441]
console.log(info[0])

// retrive 
console.log(info[1])

// update 

info[2] = 8888537485
console.log(info)
// add

// push()
// unshift()

info.push('hindi')
info.unshift("Mr")

console.log(info)

// delete

// pop()
info.pop()
//shift()
info.shift()
// splice()
info.splice(1,2)
console.log(info)

/*---------------------------------*/
//            0          1         2   3
let info2 = ["chinmay","deshpande",21,45]
// object

// Object - property and method

let info3 = {
    // propertyName:Value 
    firstName:"chinmay",
    lastName:"deshpande",
    age:21,
    rollNo:45
}
//console.log(info3[0])
// object does not stores the value by index

// retrive  (dot notation and bracket notation)
// objectName.propertyName (dot notation)
// objectName['propertyName']
console.log(info3.age)
console.log(info3['age'])

let aa = info3.firstName
let bb = info3['firstName']
console.log(aa)
console.log(bb)

// update  (dot notation , bracket notation)
info3 = {
    // propertyName:Value 
    firstName:"chinmay",
    lastName:"deshpande",
    age:21,
    rollNo:45
}

// dot notation

info3.firstName = "tanmay"
info3['firstName'] = "amit"
console.log(info3)

// delete (dot notation and bracket notation)

delete info3.firstName
delete info3['lastName']
console.log(info3)

// add (dot notation and bracket notation )

info3.lang = "hindi"
info3['city'] = "pune"
console.log(info3)


let vehicle = {

    color:"red",
    type:"sedane",
    regNo:'123'

}

// dot notation
// retrive
console.log(vehicle.color)
// update 
vehicle.color = "red"
//add 
vehicle.city = "pune"
// delete
delete vehicle.type

console.log(vehicle)

// bracket notation

// retrive 

console.log(vehicle['color'])

// update

vehicle['color'] = "blue"
console.log(vehicle)

// add

vehicle['number'] = 43
console.log(vehicle)

// delete

delete vehicle['number']
console.log(vehicle)

// 40 minutes 

//  15 k
//  25 k
//  7.5 k 7.5k







