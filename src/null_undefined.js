/*
null and undefined are not the same. A variable initialized with "undefined" means that the variable has no 
value or object assigned to it while "null" means that the variable has been set to an object whose value is 
undefined.
*/

let v = null;
console.log(v);
console.log(typeof v);

let n = undefined;
console.log(n);
console.log(typeof n);

if (undefined == null) {
  console.log("undefined == null");
}

if (undefined === null) {
  console.log("undefined === null");
}
