//map
//The map() method creates a new array by applying a function to each element of the original array. It transforms the elements based on the logic you provide.


let numbers =[1,2,3,4,5,6,7]
let newNum = numbers.map((keys)=>{
    return keys+10
})
// console.log(newNum)


//chaining ::Chaining in JavaScript refers to the practice of calling multiple methods on an array (or other objects) in a single, continuous line of code. This is possible because many array methods, such as map and filter, return a new array, allowing you to call another method on the result immediately.
let numbrs =[1,2,3,4,5,6,7]
let chaining = numbrs
.map((nums)=>nums*10)
.map((nums)=>nums+1)



//about reduce 
//reduce()
//The reduce() method executes a reducer function on each element of the array, resulting in a single output value. It is used for combining or reducing an array into a single value.
const products = [
    { name: 'Phone', price: 300 },
    { name: 'Laptop', price: 1000 },
    { name: 'Mouse', price: 15 },
    { name: 'Keyboard', price: 25 }
  ];
  
  // 1. Filter products priced above $20
  const expensiveProducts = products.filter(product => product.price > 20);
  
  // 2. Convert product names to uppercase
  const productNames = expensiveProducts.map(product => product.name.toUpperCase());
  
  console.log(productNames);  // Output: ['PHONE', 'LAPTOP', 'KEYBOARD']
  
  // 3. Calculate the total price of all products
  const totalPrice = products.reduce((total, product) => total + product.price, 0);
  
  console.log(totalPrice);  // Output: 1340
  



  /* you're right! The accumulator in the reduce() method is essentially the running total (or whatever value you're accumulating) throughout the function.

To break it down step-by-step:

Initial step: The accumulator is set to the initial value you pass to reduce().
First iteration: The function processes the first element of the array, and the accumulator becomes the result of applying the callback function on the initial value and the first element.
So in simple terms, you can think of the accumulator after the first iteration as the sum (or result of the operation) of the initial value and the first element of the array.