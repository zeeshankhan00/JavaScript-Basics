  //Javascript console API
//   console.log("Hello World");
//   // alert("me");
//   // document.write("Zeeshan");
// console.warn("this is a warning");
// console.error("This is a error");

// //Javascript Variables
// //Containers to store data values
// var number1  = 22;
// var number2 = 34;
// console.log(number1+number2);

// //DAta types in javascript
// var str1 = "This is a string";
// var str2 = "hi my name is zeeshan";
// console.log(str1+str2);

// var marks = {
//     ravi: 34,
//     shubham: 78,
//     harry: 99.977
// }
// console.log(marks)

// //booleans
// var a = true;
// var b = false;
// console.log(a);

// var und = undefined;
// console.log(und);

// var arr = [1,2,3,4,5];
// console.log(arr);

//Operators in Javascript
//aARITHMETIC OPERATORS
//ADDITION,SUBSTRACTION, MULTIPLICATION, DIVISION

//ASSIGNMENT OPERATORS
// var a = 43
// var c = 90
// console.log(a==c);/


//COMAPRISION OPERATORS
// ==, >, < ,>=, <=

//logical operators
// && , || , logical not(!)



//Fuction in javascript
//DRY = do not repeat
// function avg (a,b){
//     return (a+b)/2;
// }

// c = avg(12,14);
// console.log(c);

//CONDITIONALS IN JAVASCRIPT
//  var age = 34;
//  if (age>8){
//     console.log("you are not a Kid");
//  }

// if else statement

//LOOPS IN JAVASCRIPT
// var arr = [1,2,3,4,5,6,7];
// console.log(arr);
// for(var i =0; i<arr.length; i++)
// console.log(arr[i]);

// arr.forEach(function(element){
//     console.log(element);
// })

// // the scope of let is just in the function

// let j =0;
// while(j<arr.length){
//     console.log(arr[j])
//     j++;
// }

// Break and continue statement is also used in javascript

// let myArr = ["Fan", "Camera",34, null,true];

//Array methods

// console.log(myArr.length)
// myArr.pop();
// console.log(myArr);
// myArr.push("Zeeshan");
// console.log(myArr);
// myArr.shift();// removes first element
// console.log(myArr);
// myArr.unshift("Harry");
// console.log(myArr);

//String Methods in JavaScript
// let mys = "Zeeshan is a good boy";
// console.log(mys.length);
// console.log(mys.indexOf("good"));

// console.log(mys.slice(1,3));
// console.log(mys.replace("Zeeshan","Harry"));

// let myD = new Date();
// console.log(myD.getTime());
// console.log(myD.getFullYear());
// console.log(myD.getDay());
//  let elem = document.getElementsByClassName("c");
// elem[0].classList.add("bg-primary");
// console.log(elem);
// console.log(elem[0].innerHTML);
// console.log(elem[0].innerText);

// tn = document.getElementsByTagName('div')
// console.log(tn)
// createdElement = document.createElement('p')
// createdElement.innerText = "This is a para";
// tn[0].appendChild(createdElement);
// tn[0].removeChild(createdElement);

// sel = document.querySelector('.c');
// console.log(sel)

//Events in JavaScript

// function clicked(){
//     console.log("The button wass clicked");
// }

// window.onload = function(){
//     console.log("The document was loaded");
// }
// let prevHTML = document.querySelectorAll('.c')[1].innerHTML;
// firstcontainer.addEventListener('mousedown',function(){
//     document.querySelectorAll('.c')[1].innerHTML = "<b>We have clicked</b>"
//     console.log("mousedown")
// })


// firstcontainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.c')[1].innerHTML = prevHTML;
//     console.log("mouseup")
// })

// sum = (a,b)=>{
//     return a+b
// }

// logKaro =()=>{
//     console.log("Hi")
// }
// // setTimeout(logKaro,2000)

// clr = setInterval(logKaro,2000)
// clearInterval(clr)

//LOCAL STORAGE

//JSON

// localStorage.setItem("name","Zeeshan")

// obj = {name:"Zeeshan",length:1, a:{this:"that"}}
// jso = JSON.stringify(obj);
// console.log(jso)
// console.log(typeof obj)
// parsed = JSON.parse(`{"name":"Zeeshan","length":1, "a":{"this":"that"}}`)
// console.log(parsed);

//template version in javascript