let arr = [1, 2, 3]
arr.push(4, 5);
console.log(arr);

let last = arr.pop();
console.log(last);
console.log(arr);

let shift = arr.shift();
console.log(first);
console.log(arr);

arr.unshift(0);
console.log(arr);

arr.splice(2, 1, 'a', 'b');
console.log(arr);

let arr1 = [1, 2]
let arr2 = [3, 4]
let combined = arr1.concat(arr2);
console.log(combined);

let sliced = arr.slice(1, 3);
console.log(sliced);

arr.forEach(element => {
    console.log(element);
});

let arr3 = [1, 2, 3];
let mapped = arr3.map(x => x * 2);
console.log(mapped);

let arr4 = [1, 2, 3, 4, 5];
let filtered = arr4.filter(x => x > 2);
console.log(filtered);

let arr5 = [1, 2, 3, 4];
let sum = arr5.reduce((accumulator, currentValue) => accumulator, currentValue, 0);
console.log(sum);

let arr6 = [1, 2, 3, 4]
let hasEven = arr6.some(x => x % 2 === 0);
console.log(hasEven);