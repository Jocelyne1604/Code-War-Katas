// https://www.codewars.com/kata/implement-a-filter-function/train/javascript

Array.prototype.filter = function(fn) {
  var res = [];
  for (var i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      res.push(this[i]);
    }
  }
  return res;
};

// What we want to implement is a filter function, like Array.filter(), also similar to the _.filter() in underscore.js and lodash.js.

// The usage is quite simple, like:

// [1,2,3,4].filter((num)=>{ return num > 3})
// should output [4]
