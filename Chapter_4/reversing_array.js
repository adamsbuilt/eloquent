/*
Reversing an array

Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which constiant do you expect to be useful in more situations? Which one is more efficient?
*/

function reverseArray(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--)
    result.push(arr[i]);
  return result;
}

function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const old = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = old
  }
  return arr;
}
const a = [1,2,3,4,5,6,7,8]
console.log(reverseArray(a));
// console.log(reverseArrayInPlace(a))
// console.log(reverseArray(['a','b','c','d',3,'f',"g"]));
