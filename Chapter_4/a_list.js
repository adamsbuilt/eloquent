/*
A List

Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with the array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.

var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the variable defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. In addition, the original list is also still a valid three-element list.

Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument, and write a listToArray function that produces an array from a list. Also write the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.
*/

/*
function arrayToList(arr) {
    var length = arr.length;
    function addToList(range) {
        if (range >= length) return null;
        return {
            value: arr[range],
            rest: addToList(range + 1)
        };
    }
    return addToList(0);
}

function listToArray(list) {
    function addToArray(arr, currentList) {
        arr.push(currentList.value);
        if (!currentList.rest) return arr;
        return addToArray(arr, currentList.rest);
    }
    return addToArray([], list);
}

function prepend(value, list) {
    return {
        value: value,
        rest: list
    };
}

function nth(list, depth) {
    if (depth) return nth(list.rest, depth-1);
    return list.value;
}

*/

function prepend(value, list) {
  return {value: value, rest: list};
}

function arrayToList(arr) {
  var list = null;
  for (var i = arr.length - 1; i >= 0; i--) {
    list = prepend(arr[i], list)
  }
  return list;
}

function listToArray(list) {
  var arr = [];
  while(list !== null) {
    arr.push(list.value);
    list = list.rest;
  }
  return arr;
}

function nth(list, n) {
  if (!list)
    return undefined;
  else if (n === 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}

console.log(arrayToList([1,2,3,4,5]));
// { value: 1, rest: { value: 2, rest: { value: 3, rest: [Object] } } }
console.log(arrayToList([10, 20]));
// { value: 10, rest: { value: 20, rest: null } }
console.log(listToArray(arrayToList([10, 20, 30])));
// [ 10, 20, 30 ]
console.log(prepend(10, prepend(20, null)));
// { value: 10, rest: { value: 20, rest: null } }
console.log(nth(arrayToList([10, 20, 30]), 1));
// 20
