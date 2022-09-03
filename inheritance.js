// class Student {
//     constructor(firstName,lastName,DOB, paddress){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.DOB = DOB 
//         this.paddress = paddress
//     }
// }

// class Teacher {

//     constructor(firstName,lastName,DOB, paddress,salary){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.DOB = DOB 
//         this.paddress = paddress
//         this.salary = salary
//     }


// }

// let chinmay = new Student('chinmay','deshpande',"7/11/1989","hadapsar pune")
// let chinmay2 = new Teacher('chinmay','deshpande',"7/11/1989","hadapsar pune",1000)
// console.log(chinmay)
// console.log(chinmay2)


// // Inheritance

// class Student {
//     constructor(firstName,lastName,DOB, paddress){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.DOB = DOB 
//         this.paddress = paddress
//     }

//     display(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Teacher  extends Student{

//     salary = 1000
// }

// let chinmay = new Teacher("ch","de","7/11/1989","pune")
// console.log(chinmay.salary)
// console.log(chinmay.firstName)
// console.log(chinmay.lastName)
// console.log(chinmay.DOB)
// console.log(chinmay.paddress)
// chinmay.display()


class StudentB {
    constructor(firstName ,lastName, age , address){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age 
        this.address = address
    }
} 

class TeacherB extends StudentB {

    constructor(firstName ,lastName, age , address,salary){
        super(firstName ,lastName, age , address)
        this.salary = salary

    }

}

let chin = new TeacherB("ch","de",12,2222,1000)
console.log(chin.firstName)
console.log(chin.lastName)
console.log(chin.age)
console.log(chin.address)
console.log(chin.salary)


/*------------------------------------------------*/

// Grandfather ----- Father ------ Son 

class Grandfather {

    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

class Father extends Grandfather {

    constructor(firstName,lastName,ffirstName){
        super(firstName,lastName)
        this.ffirstName = ffirstName
    }

    displayFName(){
        console.log(this.ffirstName + this.lastName)
    }

}

class Son extends Father {
    constructor(firstName,lastName,ffirstName,sname){
        super(firstName,lastName,ffirstName)
        this.sname = sname
    }
    displaySName(){
        console.log(this.sname + this.lastName)
    }
}



let chinmay = new Son("manohar","deshpande","shirish","chinmay")
chinmay.displayFName()
chinmay.displayName()
chinmay.displaySName()





