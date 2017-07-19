/*
Deep Comparison

The == operator compares objects by identity. But sometimes, you would prefer to compare the values of their actual properties.

Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.

To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: by a historical accident, typeof null also produces "object".
*/

function deepEqual(a, b) {
  if (a === b) return true; // compare by identity
  if (typeof a != "object" || a == null ||
      typeof b != "object" || b == null) // check if object
    return false;

  var propsInA = 0; //set object property variable
  var propsInB = 0;

  for (var prop in a) // property count
    propsInA += 1; // +1 for each property

  for (var prop in b) {
    propsInB += 1;
    // check if there's an existing property in a.
    // for each property at same index call deepEqual to see if prop & values match
    // if true, recursion continues; return false if not.
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
    return false;
  }
  // true if equal number of prop.
  return propsInA === propsInB;
}

var obj = {here: {is: "an"}, object: 2};
var one = 5;
var two = 5;
var three = "5";
var four = "5";
console.log(deepEqual(one,two));
// true
console.log(deepEqual(one,three));
// false
console.log(deepEqual(one,four));
// false
console.log(deepEqual(two,three));
// false
console.log(deepEqual(two,four));
// false
console.log(deepEqual(three,four));
// true
console.log(deepEqual(obj, obj));
// true
console.log(deepEqual(obj, {here: 1, object: 2}));
// false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// true
