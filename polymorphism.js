// // Inheritance 

// // Class - design 

// // Polymorphism 
// // Inheritance 
// // Encapsulation
// // Abstraction 

// class Grandfather{

//     constructor(firstName,lastName){
//         this.firstName = firstName
//         this.lastName = lastName
//     }

//     displayG(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Father  extends Grandfather{
//     constructor(firstName,lastName ,ffirstName){
//         super(firstName,lastName)
//         this.ffirstName = ffirstName
//     }

//     displayF(){
//         console.log(this.ffirstName + this.firstName + this.lastName)
//     }

// }

// class Son extends Father {

//     constructor(firstName,lastName,ffatherName,sname){
//         super(firstName,lastName,ffatherName)
//         this.sname = sname
//     }

//     displayS(){
//         console.log(this.sname + this.ffirstName + this.lastName)
//     }

// }




// let shirish = new Son("manohar","deshpande","shirish","chinmay")
// console.log(shirish.firstName)
// console.log(shirish.lastName)
// console.log(shirish.ffirstName)
// console.log(shirish.sname)
// shirish.displayG()
// shirish.displayF()
// shirish.displayS()


// class World {
//     constructor(si,li){
//         this.si = si
//         this.li = li
//     }

//     saveWorld(){
//         console.log(`The saving interest is ${this.si}`)
//     }

//     loadWorld(){
//         console.log(`The saving interest is ${this.li}`)
//     }
// }

// class ICICI extends World{

//     saveICIC(){
//         console.log('ICICI saved method called')
//     }

// }

// class SBI extends World {
//     saveSBI(){
//         console.log('SBI saved method called')
//     }

// }

// let SBI = new SBI(2,4)

// console.log(SBI.li)
// console.log(SBI.si)
// SBI.saveWorld()
// SBI.loadWorld()
// SBI.saveSBI()


// let ICIC = new ICIC(12,34)
// console.log(ICIC.li)
// console.log(ICIC.si)
// ICIC.saveWorld()
// ICIC.loadWorld()
// ICIC.saveICIC()


// //------------------------------>
// class Addition {
//     additionB(x, y, z) {
//         // console.log(x)
//         // console.log(y)
//         // console.log(z)
//         if(x != undefined && y!= undefined && z!= undefined){
//             console.log(x+y+z)
//         }
//         else if(x != undefined && y != undefined ){
//             console.log(x+y)
//         }
//         else {
//             console.log('Incorrect input')
//         }
//     }

// }

// let a = new Addition()
// a.additionB(1,2,3) // 6
// a.additionB(2,4) // 6
// a.additionB(1) //



// method over loading and method over riding
// same class , same method name , different signature ====>  overloading 
// different class , same method name , same signature - overriding 


class Calculation {
    // incorrect way
    // add(x){
    //     console.log('please provide correct output')
    // }

    // add(x,y){
    //     console.log(x+y)
    // }
    // add(x,y,z){
    //     console.log(x+y+z)
    // }

    addition(x, y, z) {

        if (x != undefined && y != undefined && z != undefined) {
            console.log(x + y + z)
        }
        else if(x != undefined && y != undefined){
            console.log(x+y)
        }
        else {
            console.log('please provide the correct input')
        }

    }
}

let t = new Calculation()

t.addition(1,3,4)
t.addition(3,4)
t.addition(4)


// same class , same method name , different signature ====> overloading 



// overriding 


// class worlBank {

//     constructor(si,li){
//         this.si = si
//         this.li = li
//     }

//     save(){
//         console.log(`The saving interest is ${this.si}`)
//     }
    
//     loan(){
//         console.log(`The loan interest is ${this.li}`)
//     }

// }


// class SBI extends worlBank {

//     constructor(si,li,ssi,sli){

//         super(si,li)
//         this.ssi = ssi
//         this.sli = sli

//     }

//     save(){
//         console.log(`The saving interest is ${this.ssi}`)
//     }
//     loan(){
//         console.log(`The loan interest is ${this.sli}`)
//     }

// }


// let b = new SBI(11,22,33,44)
// console.log(b.li)
// console.log(b.si)
// b.save()
// b.loan()


// let a =  new worlBank(12,4)
// console.log(a.si)
// console.log(a.li)
// a.save()
// a.loan()

class Bank {

    constructor(fullName,bal){
        this.fullName = fullName
        this.bal = bal 
        this.transaction = []
    }

    depoist(amount){
        if(amount > 0){
            this.bal = this.bal + amount
            this.transaction.push(amount)
        }
        return this.bal
    }
    withdrawl(amount){
        if(this.bal > amount){
            this.bal = this.bal - amount
            this.transaction.push(-amount)
        }
        else {
            console.log('Insufficent bal')
        }
        return this.bal
    }

    lastFivetransaction(){
        console.log(this.transaction.slice(-5))
    }

}

let chinmay = new Bank("chinmay deshpande",100000)
chinmay.depoist(100000)
chinmay.withdrawl(500)
chinmay.depoist(100000)
chinmay.withdrawl(500)
chinmay.depoist(100000)
chinmay.withdrawl(500)
chinmay.lastFivetransaction()
console.log(chinmay)

// function addition(x,y){
//     console.log(x)
//     console.log(y)
// }
// addition()

// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     firstName:"ram"
// }
// console.log(info.firstName)
