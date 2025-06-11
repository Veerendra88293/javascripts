//   const name="veeru";
//   console.log(name);
// let age=25;
// age=age+1;

// console.log(age);


// const profile={
//     name:"veeru",
//     isFollow:false,
//     followers:123,
//     age:25,
// };
// console.log(typeof profile);
// console.log(profile["name"]);

// profile.isFollow=true;

// a=6
// b=5
// let sum=a+b;//-,/,%

// console.log(sum);
// console.log(a==b);
// let cond1=a>b;
// let cond2=a<b;

// console.log(cond1&&cond2);


// let num=11; 
// if(num%2==0){
//     console.log("even");
// }
// else{
//     console.log("odd",num);
// }
 
//ternary operator
// a=10;
// b=5
// a>b?console.log("a is greater"):console.log("b is greater");

// let score=prompt("Enter the first number");

// if (score>=90 && score<=100)
// {
//     console.log("Grade A");
// }
// else{
//     console.log("Grade B");
// }


//loops
// let n=5;
// for(let i=1; i<n;i++){
//     console.log("hi");
//     console.log(i);
// }

// let   n=5;

// let sum=0;
// for(let i=1; i<n;i++){
//     sum+=i;
// }
// console.log("sum is:",sum)
// let i=5;
// while(i<10){   //while loop
//     console.log("hi");
//     i++;
// }


//do while loop
// let i=1;
// do{
// console.log("hi");
// i++
// }while(i<5);


// for of loops for array and strings
// let str="hello world";
// let length=str.length;

// console.log("length of string is:",length);
// for(let i of str){
//     console.log(i);
// }

// //for in loop for objects
// let stu={
//     name:"veeru",
//     age:25,
//     course:"java"
// }
// console.log(stu.name); for print onlu one item like name
// for(let i in stu)
//     {
//         console.log(i);
//         console.log(stu[i]);
// }
// let gameno=25;
// let userinput=prompt("Enter a number");
//     if (userinput==gameno){
//         console.log("Congratulations! You guessed it right");
//     }
//     else{
//         for(let i=0; i<3; i++){
//         userinput=prompt("Enter a number");
//     }}
//     let gameno=25;
// let userinput=prompt("Enter a number");
// while(userinput!=gameno){
//     userinput=prompt("Enter a number");
// }
//     console.log("Congratulations! You guessed it right");



//string method

// let str="verru"
// l=str.length;
// console.log(l);

// console.log(str.toUpperCase());

// console.log(str[2]); 

// //using ``(TEMPLATE LITERALS)
// console.log(`length of ${str} is: ${l} and `);

//   let userinput=prompt("enter full name");
//   let str1="@";
//   let str2=userinput.length;
//   conc_str=str1.concat(userinput)+str2;
// // conc_str=str1.concat(userinput)+str2;

// console.log("concatenated string is:",conc_str);
// a=[1,2,3,4,5];
// for (let i=0; i<a.length;i++){
//     console.log(a[i]);
// }
// console.log(a);

// or
// for (let i of a){
//     console.log(i);
// }
// marks=[85,97,44,37,76,60];
// total=0;
// for (let i of marks){
//     total=total+i

// }
// avg=total/marks.length;
//  console.log("avg marks are:",avg);
// let values=[250,645,300,900,50];
// let j=0;
// for (let i of values){
//     let total=i/10;
//     values[j]=values[j]-total;
    
   
//     console.log("total is:",values[j]);
//      j++;
// }

// let items=[100,200]
// for (let i=0; i<items.length;i++){
//     let offer=items[i]*0.1;
//     items[i]=items[i]-offer;
// }
// console.log("total is:",items);
// let items=[100,200,300,400,500];

// // items.splice(3,1);
// //  console.log("total is:",items);

// function vowels(str){
//     letter="aeiou";
//     count=0;
//     for(let i of str){
//         if(i==letter[0] || i==letter[1] || i==letter[2] || i==letter[3] || i==letter[4])
            
//         {
//             // console.log("vowel is:",i);
//             count++;
            
//         }


//     }
//     console.log("total vowels are:",count);
// }

// str="hlloaeiou"
// vowels(str)

//using arrow function
// const arrow_vowels=(str)=>{
//     letter="aeiou";
//     count=0;
//     for(let i of str){
//         if(i==letter[0] || i==letter[1] || i==letter[2] || i==letter[3] || i==letter[4])
            
//         {
//             // console.log("vowel is:",i);
//             count++;
            
//         }


//     }
//     console.log("total vowels are:",count);
// } 
// str="ji"
// arrow_vowels(str)  

// let arr=["hi","bye"]//three value can be passed first be ezch value and next index and next one full array
// arr.forEach((idx,idx1,arr) => {
//     console.log(idx,idx1,arr)
// })

// //map
// arr=[1,2,3,4];
// arr.map((val)=>{
//     console.log(val)
// }

// )
//using map creat new array
// arr=[1,2,3,4];
// let new_array=arr.map((val)=>{
//     return val;
// }

// )
// console.log(new_array)

//filter print even number in new array using filter
// let array=[1,2,3,4];
// let new_array=array.filter((values)=>{
//     return values%2===0;
// }

// )
// console.log(new_array)



//reduce method used for multiple input but single output 
// let ar=[1,2,3,4]
// output=ar.reduce((res,cur)=>{
//     return res+cur
// }

// )
// console.log(output)
// number=[]
// for (let i=0;i<5;i++){
//     let num=parseInt(prompt("enter"));
//     number.push(num)
// }
// console.log(number)


// DOM

// let var1=document.getElementsByClassName("hi")
// console.dir(var1)



// let var1=document.querySelectorAll(".hi");
// var1[0].innerText="byr"
// var1[1].innerText="brrr"

// let btn1=document.querySelector("#hh");
// btn1.onclick=()=>{
//     console.log("btn clicked")
//     let a=25;
//     a++;
//     console.log(a);
// }

//or eASY


// let btn1=document.querySelector(".hh")
// function mm(){
//     let a=2
//     a++
//     console.log(a)
// }

// toggel darkmlight black or white 

// let btn1=document.querySelector("#hh");
// let curr_mode="light";
// btn1.addEventListener("click",()=>{
//      if(curr_mode==="light"){
//         curr_mode="dark";

//         document.body.style.backgroundColor="black";

//     }else{
//         curr_mode="light"
//        document.body.style.backgroundColor="white";

//     }
//     console.log(curr_mode)
// })
// by using ass class list first wite two class in css like ,dark{} and .white{} then write documnet .qS("body").classlist.add("dark");



//class and object


// class ToyotaCar{
//     start(){
//         console.log("hi")
//     }
//     stop(){
//         console.log("hi")
//     }
//     setBrand(brand){
//         this.brand=brand;
//     }
// }
// let fortuner=new ToyotaCar();
// fortuner.setBrand("fortuner")


//constructor it will invoked first when we create obj
// class ToyotaCar{
//     constructor(){
//         console.log("creating new object")
//     }
//     start(){
//         console.log("hi")
//     }
//     stop(){
//         console.log("hi")
//     }
//     setBrand(brand){
//         this.brand=brand;
//     }
// }
// let fortuner=new ToyotaCar();
// fortuner.setBrand("fortuner")

// for passing value
// for passing value to assess wirte just fortuner in console

// class ToyotaCar{
//     constructor(milage){
//         console.log("creating new object")
//         this.milage=milage
//     }
//     start(){
//         console.log("hi")
//     }
//     stop(){
//         console.log("hi")
//     }
//     setBrand(brand){
//         this.brand=brand;
//     }
// }
// let fortuner=new ToyotaCar(10);
// fortuner.setBrand("fortuner")


// inheritence just write veeru.eat() to print output

// class person{
//     eat(){
//         console.log("eat")
//     }
//     walk(){
//         console.log("walk")
//     }
// }
 

// class doctor extends person{
//     check(){
//         console.log("check")
//     }

// }
// let all_person=new person();
// let veeru=new doctor();

//super keyword

// class person{
//     constructor(){
//         this.species="best"
//     }
//     eat(){
//         console.log("eat")
//     }
//     walk(){
//         console.log("walk")
//     }
// }
// class doctor extends person{
//     constructor(branch){//brah is not goimg dont know why
//         super()// to call this.somthing in child claas or inheroted class use super keyword so it call parent class also
//         this.branch="branch"
//     }
//     check(){
//         console.log("check")
//     }

// }
// let veeru=new doctor("chemicalengg")


//error handling


// let a=6
// let b=8
// console.log(a+b)
// try{
// console.log(a+c)
// }
// catch(er){
//     console.log(er)
// }

// console.log(a+b)
// console.log(a+b)

// sync
// synchronus
// function hello(){
//     console.log("hi bro")
// }
// setTimeout(hello,4000)//4sec

// setTimeout(()=>{
//     console.log("hi")
// },4000)

//call back function
// function sum(a,b){
//     console.log(a+b)
// }
// function call_back(a,b,sum){
//     sum(a,b)
// }
// call_back(1,2,sum)


// function getData(dataId){
//     function hello(){
//     console.log("hi bro")
// }
// setTimeout(hello,4000)//4sec
// }


// promise

// let promise =new promise((resolve,reject)=>{
//     console.log("i am promise");
//     resolve(123)
// });


// promise catch and then()
// function asyfun(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data")
//             resolve("susccess")
//         },4000)
//     })
// }
// console.log("fecthing....")
// let p1=asyfun();
// p1.then((res)=>{
//     console.log(res)//resolve in console backend so to print it above console
// })