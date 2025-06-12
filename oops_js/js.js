// encapsulation all are in single unit
// const user={
//     name:"veeru",
//     age:25,
//     getage:function(){
//         return new Date().getFullYear()-user.age
//     }
    
// }
// to make more user,user2,user3 it will lenthy

// function createuser(name,age){
// const user={
//     name:name,
//     age:age,
//     getage:function(){
//         return new Date().getFullYear()-user.age
//     },
    
// }

// return user}

// user1=createuser("veeru",21)
// console.log(user1.getage())
// user2=createuser("amogh",22)
// console.log(user2.getage())//but here obj are creatig with  multiple function 
// console.log(user1.getage===user2.getage)



// function getage(){
//         return new Date().getFullYear()-this.age
//     }
// function createuser(name,age){
// const user={
//     name:name,
//     age:age,
//     getage:getage
    
// }
// return user}
// user1=createuser("veer",21)
// user2=createuser("veeru",22)
// console.log(user1.getage===user2.getage)
// console.log(user2.getage())

//above methos are manualy but below  code is constructore function with .this and new(), real oops


// function user_(firstname,age){
//     this.firstname=firstname
//     this.age=age
// }
// user_.prototype.getage=function (){
//         return new Date().getFullYear()-this.age
//     }
// const user1=new user_("vveru",8)
// console.log(user1)


//we have not used class so below code is full oops 
//it does not need user_.prototype.get it is inbuillt in it

// class user_{
//     constructor(name,age){
// // console.log(age,name)
// this.name=name
// this.age=age

//     }
//     getage (){
//         return new Date().getFullYear()-this.age
//     }
    
// //can add n number of fuctions()with diffrent name
// }

// let user1=new user_("veeru",8)
// console.log(user1.getage())
//above code is oops method using class and obj and all oops 4 piller mostly applied


//inheritance

class user_{
    constructor(name,age){

        this.name=name
        this.age=age

    }
    getage (){
        return new Date().getFullYear()-this.age
    }
    
}
class student extends user_{
    constructor(name,age,branch){
            super(name,age)
            this.branch=branch
    }
    study(){
        console.log("studying")
    }
}

class employee extends user_{
    constructor(name,age,company){
super(name,age)
this.company=company
    }
}


let user1=new user_("veeru",8)
console.log(user1.getage())
let student1=new student('Mikey',21,"b-tech")
console.log(student1)
student1.study()
console.log(student1.getage())
let emp1=new employee('Mikey',21,"N-vidia")
console.log(emp1)
console.log(emp1.getage())

