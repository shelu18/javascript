/*u're right that both the nullish coalescing operator (??) and the logical OR (||) operator in JavaScript are used to choose between values, but they behave differently in certain cases. The key difference lies in what values they consider "falsy."

Difference Between ?? (Nullish Coalescing) and || (Logical OR)
|| (Logical OR): It returns the right-hand operand if the left-hand operand is falsy, which means any of these values: false, 0, '' (empty string), null, undefined, or NaN.
?? (Nullish Coalescing): It only considers null and undefined as "falsy" values and ignores other falsy values like 0, false, or '' (empty string). It returns the right-hand operand only if the left-hand operand is null or undefined.*/


let a = 0;
let b = null;
let c = false;
let d = undefined;

// Using Logical OR (||)
console.log(a || "default value");   // Output: "default value" (because 0 is falsy)
console.log(b || "default value");   // Output: "default value" (because null is falsy)
console.log(c || "default value");   // Output: "default value" (because false is falsy)
console.log(d || "default value");   // Output: "default value" (because undefined is falsy)

// Using Nullish Coalescing (??)
console.log(a ?? "default value");   // Output: 0 (because 0 is not null or undefined)
console.log(b ?? "default value");   // Output: "default value" (because b is null)
console.log(c ?? "default value");   // Output: false (because false is not null or undefined)
console.log(d ?? "default value");   // Output: "default value" (because d is undefined)
