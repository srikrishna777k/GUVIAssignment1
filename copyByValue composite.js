let arr = [1,2,3];
let obj = {name:"dom",age:20};

let arrByRef = arr;
let objByRef = obj;

console.log(arrByRef == arr,objByRef == obj);      //true true

// using stringify to copy by value objects
let arrByValue = JSON.parse(JSON.stringify(arr));
let objByValue = JSON.parse(JSON.stringify(obj));

console.log(arrByValue == arr,objByValue == obj);  //false false

//There are numerous ways copy by value an array, with methods like slice,split&join etc, but JSON.stringify and parse is universal and works with both objects and arrays.