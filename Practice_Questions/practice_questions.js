// Problem: Create an array containing different types of teas

const teas = ["Green tea", "Black tea", "Oolong tea", "white tea", "Herbal Tea"];

// Problem: Add "Chamomile Tea" to the existing list of teas

// Problem: Remove "Oolong Tea" from the list of teas

// Problem: Filter the list to only include teas that are caffeinated

// Problem: Sort the list of teas in alphabetical order

// Problem: Use a for loop to print each type of tea in the array

// Problem: Use a for loop to count how many teas are caffeinated (excluding "Herbal Tea")

// Problem: Use a for loop to create a new array with all tea names in uppercase

// Problem: Use a for loop to find the tea name with the most characters

// Problem: Use a for loop to reverse the order of the teas in the array




//mastering all the array methods

//Push method:
//  const fruits = ["Apple", "Banana", "Cherry"];
//  fruits.push("Mango");
//  console.log(fruits); // ["Apple", "Banana", "Cherry", "Mango"]
//  const returnValue = fruits.push("Orange");
//   console.log(returnValue); // 5 (new length of the array)

//Practice question to use all array methods

// ✅ 1. push()
// Q1: Create an empty array and push 3 different fruits into it.
const fruits = [];
fruits.push("mango", "banana", 'apple')
// console.log(fruits);
// Q2: What is the return value of the push() method? Store it and print it.
const value = fruits.push("mango", "banana", 'apple')
// console.log(fruits);
// console.log(value);


// ✅ 2. pop()
// Q1: Create an array of 4 cities. Use pop() to remove the last one. Print the removed city and the updated array.
const cities = ["city1", 'city2', "city3", "city4"]
const removedCity = cities.pop();
console.log(removedCity);
console.log(cities);
// Q2: What happens if you pop() an empty array?
const emptyArray = [];
const emptyarrayPop = emptyArray.pop();
console.log(emptyArray); //[]
console.log(emptyarrayPop); //undefined


// ✅ 3. shift()
// Q1: Create an array of numbers. Use shift() to remove the first number. Log the result and the modified array.
const num = [1,2,3,4,5];
const removedNum = num.shift();
console.log(num);
console.log(removedNum);


// ✅ 4. unshift()
// Q1: Add two names at the beginning of an array using unshift() and print the returned value and updated array.
const names = ['name3', 'name4', 'name5'];
console.log("returnedValue", names.unshift('name1', 'name2'));
console.log("names:", names);



// ✅ 5. map()
// Q1: Create an array of numbers. Use map() to square each number.
const single = [1,2,3,4,5]
const square = single.map(num => num*num);
console.log('single', single , 'square', square);
// Q2: Use map() to extract names from an array of user objects.
const users = [
  { id: 1, name: "Agnay", age: 22 },
  { id: 2, name: "Riya", age: 25 },
  { id: 3, name: "Aryan", age: 30 },
  { id: 4, name: "Megha", age: 19 },
  { id: 5, name: "Dev", age: 28 }
];
const userNames = users.map(obj => obj.name);
console.log("userNames", userNames);


// ✅ 6. filter()
// Q1: Filter out odd numbers from an array.
const numArray = [1,2,3,4,5,6,7,8,9];
const ODDnum = numArray.filter(num => !(num%2==0))
console.log("Odd num:", ODDnum);
// Q2: Given an array of strings, filter out the ones with length < 5.
const words = [
  "tree",
  "sun",
  "cloud",
  "sky",
  "river",
  "mountain",
  "fog",
  "lake",
  "ice",
  "storm"
];

const shortWords = words.filter(word => word.length < 5);
console.log(shortWords);


// ✅ 7. reduce()
// Q1: Sum all the numbers in an array using reduce().
const sum = numArray.reduce((acc, value) => (acc + value) , 0 )
console.log('numarray:', numArray);
console.log("sum :", sum);

// Q2: Use reduce() to find the product of all numbers.
const product = numArray.reduce((acc, value) => (acc * value) , 1 )
console.log('product' , product);


// ✅ 8. forEach()
// Q1: Log each element of an array along with its index.
const colors = ["red", "blue", "green", "yellow", "purple"];
colors.forEach((color , idx)=> (console.log(`the color is ${color} with the index ${idx}`)))

// Q2: Count how many times a specific value (like 'apple') occurs in an array.
const fruitsArray = [
  "apple",
  "banana",
  "apple",
  "orange",
  "mango",
  "apple",
  "banana",
  "apple"
];
let count = 0;
fruitsArray.forEach((fruit)=> {if(fruit=== "apple"){count++}});
console.log("no. of apple in array:", count);



// ✅ 9. find()
// Q1: Find the first number greater than 10 in an array.
const numbers = [2, 5, 8, 11, 4, 15, 7];
const firstNo = numbers.find(num => num>10);
console.log('first no. greater than 10 was 11 , and hence the anser is:', firstNo);
// Q2: Find the first user whose age is over 18 in an array of user objects.
const usersArray = [
  { id: 1, name: "Agnay", age: 16 },
  { id: 2, name: "Riya", age: 17 },
  { id: 3, name: "Aryan", age: 19 },
  { id: 4, name: "Megha", age: 22 },
  { id: 5, name: "Dev", age: 15 }
];
const First18 = usersArray.find(user => user.age>18)
console.log('the name of first user with age greater than 18 is :', First18.name);

// ✅ 10. findIndex()
// Q1: Find the index of the first negative number in an array.
const number = [3, 7, 0, -5, 12, -2];
const index = number.findIndex(num => num<0);
console.log("the first negative num index is :", index);

// Q2: If no value is found, what does findIndex() return?
const positiveNumbers = [4, 10, 22, 0, 8];
const Indexforpositive = positiveNumbers.findIndex(num => num<0);
console.log("for positive no. , it gives:", Indexforpositive); //-1


// ✅ 11. includes()
// Q1: Check if the array [1, 2, 3, 4] includes 3.
// Q2: Check if NaN is included in an array containing NaN.


// ✅ 12. indexOf()
// Q1: Find the index of "banana" in an array of fruits.
// Q2: What does it return if the item doesn’t exist?


// ✅ 13. slice()
// Q1: Extract a sub-array from the 2nd to 4th index of [10, 20, 30, 40, 50].
// Q2: What happens if you use negative indices?


// ✅ 14. splice()
// Q1: Remove 2 items starting from index 1.
// Q2: Replace the second item in an array with a new value.


// ✅ 15. sort()
// Q1: Sort an array of numbers: [5, 1, 10, 3] (hint: needs a compare function).
// Q2: Sort an array of strings alphabetically and reverse-alphabetically.


// ✅ 16. reverse()
// Q1: Reverse the array [1, 2, 3, 4].
// Q2: Check whether the original array is modified or not.


// ✅ 17. concat()
// Q1: Merge two arrays [1, 2] and [3, 4].
// Q2: Merge arrays of strings and numbers — what happens?


// ✅ 18. join()
// Q1: Join an array of words into a sentence separated by space.
// Q2: What happens when you join an array with a "-"?


// ✅ 19. every()
// Q1: Check if all elements in [2, 4, 6] are even.
// Q2: Use every() on an array of users to check if all are adults.


// ✅ 20. some()
// Q1: Check if at least one number in [1, 3, 5, 7] is even.
// Q2: Check if a to-do list has any item marked as completed.


// ✅ 21. flat()
// Q1: Flatten the array [1, [2, [3, 4]], 5] to a depth of 1, then 2.
// Q2: What happens if you pass no argument?


// ✅ 22. flatMap()
// Q1: Multiply each number by 2 and return both original and doubled values using flatMap().
// Q2: Convert an array of sentences to an array of all words (split and flatten).


// 💡 BONUS CHALLENGE:
// 1. Start with an array of numbers: [2, 5, 8, 1, 3, 7, 4]
// 2. Filter out odd numbers.
// 3. Multiply remaining numbers by 10.
// 4. Sort the result in descending order.
// 5. Get the sum of the final array using reduce().
