// const numbers = new Set([1,2,3,4]);
// console.log(numbers)
// numbers.add(7)
// console.log(numbers)
// const items=["hi","bye"]
// numbers.add(items)
// console.log(numbers)

// //method help for remove dublicates
// //has:-
// numbers.has(1)//true

//MAP
//key cn be int ,string
// const person=new Map()
// person.set("firstname","veeru")
// person.set(1,"hi")
// person.set([[1,2]],"heelo")
// console.log(person)
// console.log(person.get('firstname'))
// for (let key of person){
// console.log(key)//it gives in arrau form [key,value]
// }
// for (let key of person.keys()){
// console.log(key)
// }
// //because it give array output so destructuring the key value to array
// for (let [key,values]of person){
// console.log(key,values)
// }

// create without set
// const person=new Map([[[1,2,3],"veeru"],[1,1]])
// console.log(person)

const person1={
    id:1,
    firstmname:"veeru"
}

const extra=new Map()
// extra.set("hi","bye")
// console.log(extra.get("hi"))
extra.set(person1,{age:8,gender:"male"})
console.log(extra.get(person1).age)
console.log(extra)



