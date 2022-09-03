//Objects 
let person = {
    firstName:"chinmay",
    lastName:"deshpande",
    rollNo:24,
    age:990

}
// retrive(dot notation and bracket notation)
//Object.properyName  (dot notation)
//Object['propertyName'] brack notation 

console.log(person.firstName)
console.log(person['firstName'])

// update(dot notation and bracket notation)
person.firstName = "tanmay"
person['lastName'] = "dani"
console.log(person)
// add (dot notation and bracket notation)

person.city = "Pune"
person['lang'] = "Hindi"
console.log(person)

// delete(dot notation and bracket notation)

delete person.city
delete person['lang']
console.log(person)


/*-----------------------------*/
//           0           1       2       3
let arr = ["chinmay","sarika","poorva","ram"]
for(let i = 0 ; i < arr.length ; i++){
    console.log(arr[i])
}


let vehicle = {
    color:"red",
    regNo:123,
    city:"pune",
    state:"MH"

}

// console.log(vehicle.color)  X
// console.log(vehicle['color'])

for(let prop in vehicle){
    console.log(prop,vehicle[prop])
}

//  

let info =  {
    firstName:"harikesh",
    lastName:"prasad",
    city:"Nagpur",
    siblings:{
        brother:"ankit",
        sister:"ankita"
    },
    skills:["python","javscript","css"]

}


console.log(info['firstName'])
console.log(info.firstName)
console.log(info.siblings.sister)
console.log(info.skills[2])
console.log(info.skills[info.skills.length-1])

// object 
for(let property in info){
    console.log(property,info[property])
}

let  Students = [
    {
        firstName:"chinmay",
        lastName:"deshpande",
        skills:["python","java","css","html"]
    },

    {
        firstName:"poorva",
        lastName:"vyas",
        skills:["python","java","css"]
    },
    {
        firstName:"ram",
        lastName:"dani",
        skills:["python","java"]
    }

]

Students.forEach(function(el){
    console.log(`${el.firstName}:${el.skills.length}`)
})




// chinmay:4
// poorva:3
// ram:2









// console.log(Students[0].firstName)
// console.log(Students[1].lastName)
// console.log(Students[0].skills.length)
// console.log(Students[1].skills.length)





