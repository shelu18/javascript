//object destructuring....

let person = {
    name: "John",
    age: 25,
    gender: "Male"
  };
  
  let {name, age} = person;
  console.log(name); // "John"

  
//ese hoti he bhai array destructuring 
  let numbers = [10, 20, 30, 40];
let [a,b] = numbers;

console.log(a); // 10
console.log(b); // 20

let [first, , third] = [100, 200, 300];
console.log(first, third); // Output: 100, 300




//Rest Pattern: The rest pattern (...rest) allows you to gather the remaining elements into a new array.


let [pehla, ...bacheHuasare] = [1, 2, 3, 4];
console.log(pehla);    // 1
console.log(bacheHuasare); // [2, 3, 4]