var _= require("lodash");

numbers = [5, 4, 10, 7, 25, 41, 7, 19, 36, 23];

const last_element = _.last(numbers);
// console.log(last_element);

const chulked_element = _.chunk(numbers,3);
// console.log(chulked_element);

array1 = [0, 1, false, 2, '', 3, NaN];
// console.log(_.compact(array1));

A1 = [4,5,17,36]
B1 = [5,20,17]
// console.log(_.difference(A1, B1));

// console.log(_.drop(numbers, 4));
// console.log(_.dropRight(numbers, 5));


// console.log(global);

console.log(__dirname);
console.log(__filename);