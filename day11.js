let  names = ["chinmay","shirish","sarika"]

let a = names[0]
let b = names[1]
let c = names[2]

console.log(a)
console.log(b)
console.log(c)

// array - destructing 
let [aa,bb,cc] = names
console.log(aa)
console.log(bb)
console.log(cc)


let numbers = [99,100,101]
let [x,,z] = numbers
console.log(x)
//console.log(y)
console.log(z)


// object destructure

let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNo:34
}

// let {firstName,lastName,rollNo,age} = info
// console.log(firstName)
// console.log(lastName)
// console.log(age)
// console.log(rollNo)

let {firstName:fn,lastName:ln,rollNo:rn,age:ag} = info
console.log(fn)
console.log(ln)
console.log(rn)
console.log(ag)

let vehicle = {
    color:"red",
    type:"sedane"
}
// let oo = vehicle.color
// let kk = vehicle.type

// console.log(oo)
// console.log(kk)

let  {color:cl,type:ty} = vehicle
console.log(cl)
console.log(ty)

/*--------------------------------------*/
let ns = [[11,22,33],[44,55,66],[77,88,99]]
let [[qq,nn,zz],[qqq,nnn,zzz],[oo,pp,ll]] = ns

let info2 = {
    father:{
        firstName:"Shirish",
        lastName:"Deshpande"
    },
    mother:{
        firstName:"Kanchan",
        lastName:"Dani"
    }
}

let {father:{firstName:fn3,lastName:ln3},mother:{firstName:fn4,lastName:ln4}} = info2
console.log(ln4)




// let {father:{firstName:fn1,lastName:ln1},mother:{firstName:fn2,lastName:ln2}} = info2
// console.log(fn1)
// console.log(ln1)
// console.log(fn2)
// console.log(ln2)


let info3 = [
    {
        age:12,
        marks:23,
        fName:"amol"
    },
    {
        age:122,
        marks:233,
        fName:"amol2"
    }

]
let [{age:qa,marks:mq,fName:lm},{age:q1,marks:m2,fName:mm}] = info3
console.log(qa)


let j = {

    skillsOne:["python","django","js"],
    skillsTwo:["python3","django3","es6"]

}

let {skillsOne:[q11,q22,q33],skillsTwo:[q44,q55,q66]} = j
console.log(q66)







// let [{age:a1,marks:m1,fName:f1},{age:a2,marks:m2,fName:f2}] = info3
// console.log(a1)
// console.log(a2)


