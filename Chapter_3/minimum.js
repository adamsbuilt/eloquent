/*#EXERCISE 1: Minimum

The previous chapter introduced the standard function Math.min that returns
its smallest argument. We can do that ourselves now. Write a function min that
takes two arguments and returns their minimum.
*/

var min = function(x, y) {
    return (x <= y) ? x : y;
};

console.log(min(2,3828));
