// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array

const fruits = ['mango','banana','strawbery','grape','guava'];
console.log(fruits[3]);
fruits[2]= 'jambura';
console.log(fruits);


// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output

const destinations =['bandarban','coxs-bazar','sylhet'];
destinations.push('sitakunda');
console.log(destinations);
destinations.push('tanguar-haor','nikli-haor');
console.log(destinations);
destinations.pop();
console.log(destinations);

// Create an array of books containing different book.
// Use the includes method to check if the array contains a javascript book.
// Print a message to the console indicating whether the element is present in the array or not.

const books =['bangla','english','math','javascript'];

console.log(books.includes('javascript'));


// Create different variables, each containing either an array or a non-array value.
// Now use isArray to check if each variable is an array.
// Print a message to the console indicating whether each variable is an array or not.

const nonArr = 'hello';
const arr = [1,2,3,4,5,6];
const emArr=[];

console.log(Array.isArray(nonArr));
console.log(Array.isArray(arr));
console.log(Array.isArray(emArr));

// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().

const nums = [1,2,3,45,6,6];
const alphas =['a','b','c','d'];

console.log(nums.concat(alphas));

