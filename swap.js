var x = 1;
var y = 2;
console.log(`x=${x}`);
console.log(`y=${y}`);
[x, y] = [y, x];
console.log(`x=${x}`);
console.log(`y=${y}`);

// var fruits = ["apple", "strawberry", "banana", "orange", "mango"];
// function checktypestr(arr) {
//   // return arr.every((elements) => typeof elements == "string");

//   return arr.every((element) => {
//     return typeof element === "string";
//   });
//   // return arr.every(element => {
//   //    typeof element==='string'
//   // })
// }

// console.log(" array is a string " + checktypestr(fruits));
