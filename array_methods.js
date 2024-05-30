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
