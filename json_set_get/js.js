// localStorage.setItem("name", "Revan");

// let output = localStorage.getItem("name")
// console.log(output)

// let details = {
//     name: "revan",
//     age: 15,
//     place: "bangalore"
// }
// // console.log(details)

// let stringified_data  = JSON.stringify(details);
// localStorage.setItem("details", stringified_data);
// let details_new = localStorage.getItem("details")
// console.log(details_new)
// let parsed_data = JSON.parse(details_new)
// console.log(parsed_data)




// let text_area=document.getElementById("textarea")
// let button_area=document.getElementById("submit")
// button_area.onclick=function(){
//     let text_content=text_area.value
//     localStorage.setItem("desc",text_content)
// }
// text_area.value=localStorage.getItem("desc")
// text_area.value=localStorage.removeItem("desc")


// let my_array=["revan",22,"ok"];
// remove=my_array.splice(1,1,"hi")//index,no of items,inset new element
// console.log(my_array)
// remove=my_array.shift() //pop at start
// remove=my_array.unshift("hi")  //push at start
// console.log(my_array)


//  let my_array=["revan",22,"ok",101];
//  let item_index=my_array.findIndex(function(value){
//     // console.log(value)
//     if(value==101){
//         return true
//     }
//     else{
//         return false
//     }
//  })
//  console.log(item_index)
//index of method
// let name_input = document.querySelector('.name');
// let input_name = document.querySelector('#inputid'); // Use '#' for id selector
// name_input.textContent=localStorage.getItem("desc")

//     input_name.addEventListener("input", function(e) {
//         localStorage.setItem("desc", e.target.value);
        
//     });


// let obj = {
//     name: "",
//     age: ''
    
// };

// let name_input = document.querySelector('.name');
// let input_name = document.querySelector('#inputid'); // Use '#' for id selector

// // Load saved object from localStorage if it exists

//  let objj = localStorage.getItem('my');   
//         let objjj = JSON.parse(objj);
//         name_input.innerText = objjj.name || "";
        
    


// input_name.addEventListener("input", function (e) {
//     obj.name = e.target.value;
//     localStorage.setItem('my', JSON.stringify(obj));
//     name_input.textContent = e.target.value;
// });
list=[]
function array_add(name,age){
    let details = {
        name: name,
        age: age,
}
list.push(details)
    let stringified_data  = JSON.stringify(list);
    localStorage.setItem("details", stringified_data);
    let details_new = localStorage.getItem("details")
    
    let parsed_data = JSON.parse(details_new)
   
    
    
}
input={"name":"veer","age":2}
console.log(input.name)
array_add("veeru",22)
array_add("veer",2)
array_add("vee",3)
console.log(list)
for (let i of list){
if(input.name==i.name){
    console.log("found",i);
    break;
}
else{
    console.log("0")
}
}


