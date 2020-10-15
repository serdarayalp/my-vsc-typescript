function isBigEnough(element, index, array) {
    return element >= 10;
}
console.log("Test Value : " + [12, 5, 8, 130, 44].every(isBigEnough));
console.log("Test Value : " + [12, 5, 8, 130, 44].filter(isBigEnough));
// ---------------------------------
var alpha1 = ["a", "b", "c"];
var alpha2 = ["d", "e", "f"];
var alphaC = alpha1.concat(alpha2);
console.log("Concat: " + alphaC);
// ----------------------------------
var num = [7, 8, 9];
num.forEach(function (value) {
    console.log(value);
});
// ---------------------------
var index = [12, 5, 8, 130, 44].indexOf(8);
console.log("index is : " + index);
// ---------------------------------
var arr = new Array("First", "Second", "Third");
var str = arr.join();
console.log("str : " + str);
var str = arr.join(",");
console.log("str : " + str);
var str = arr.join("+");
console.log("str : " + str);
// --------------------------
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
console.log("roots is : " + roots);
// ------------------------
var numbers = [1, 4, 9];
var element = numbers.pop();
console.log("element is : " + element);
var element = numbers.pop();
console.log("element is : " + element);
// ------------------------
var numbers = new Array(1, 4, 9);
var length = numbers.push(10);
console.log("new numbers is : " + numbers);
length = numbers.push(20);
console.log("new numbers is : " + numbers);
// -----------------------------
var total = [0, 1, 2, 3].reduce(function (a, b) {
    return a + b;
});
console.log("total is : " + total);
// -------------------------------
var total = [0, 1, 2, 3].reduceRight(function (a, b) {
    return a + b;
});
console.log("total is : " + total);
// --------------------------------
console.log("Reversed array is : " + [0, 1, 2, 3].reverse());
// -------------------------------
console.log("Shifted value is : " + [10, 1, 2, 3].shift());
// -------------------------------------
var arr = ["orange", "mango", "banana", "sugar", "tea"];
console.log("arr.slice( 1, 2) : " + arr.slice(1, 2));
console.log("arr.slice( 1, 3) : " + arr.slice(1, 3));
// -------------------------------------
var retval = [2, 5, 8, 1, 4].some(isBigEnough);
console.log("Returned value is : " + retval);
var retval = [12, 5, 8, 1, 4].some(isBigEnough);
console.log("Returned value is : " + retval);
// ----------------------------------
var arr = new Array("orange", "mango", "banana", "sugar");
var sorted = arr.sort();
console.log("Returned string is : " + sorted);
// ----------------------------------------
var arr = ["orange", "mango", "banana", "sugar", "tea"];
var removed = arr.splice(2, 0, "water");
console.log("After adding 1: " + arr);
console.log("removed is: " + removed);
removed = arr.splice(3, 1);
console.log("After removing 1: " + arr);
console.log("removed is: " + removed);
// --------------------------------------------
var arr = new Array("orange", "mango", "banana", "sugar");
var str = arr.toString();
console.log("Returned string is : " + str);
// ----------------------------------------------
var arr = new Array("orange", "mango", "banana", "sugar");
var length = arr.unshift("water");
console.log("Returned array is : " + arr);
console.log("Length of the array is : " + length);
// --------------------------------------------
var nums = [1001, 1002, 1003, 1004];
var j;
for (j in nums) {
    console.log(nums[j]);
}
// --------------------------------------------
var multi = [
    [1, 2, 3],
    [23, 24, 25],
];
console.log(multi[0][0]);
console.log(multi[0][1]);
console.log(multi[0][2]);
console.log(multi[1][0]);
console.log(multi[1][1]);
console.log(multi[1][2]);
// --------------------------------------------
var names = new Array("Mary", "Tom", "Jack", "Jill");
function disp(arr_names) {
    for (var i = 0; i < arr_names.length; i++) {
        console.log(names[i]);
    }
}
disp(names);
// --------------------------------------------
function disp2() {
    return new Array("Mary", "Tom", "Jack", "Jill");
}
var nums2 = disp2();
for (var i in nums2) {
    console.log(nums2[i]);
}
