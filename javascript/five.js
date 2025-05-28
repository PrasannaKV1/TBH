function totalsum(english, math, science) {
    return english + math + science;
}
let amount = totalsum(80, 90, 85);
console.log(amount); // 255
let str = "code threaded";
console.log(str.length); // 14
console.log(str.toUpperCase()); // "CODE THREADED"
console.log(str.toLowerCase()); // "code threaded"  

console.log(str.indexOf("threaded")); // 5
console.log(str.lastIndexOf("code")); // 0
console.log(str.includes("threaded")); // true
console.log(str.startsWith("code")); // true

console.log(str.endsWith("threaded")); // true

console.log(str.charAt(0)); // "c"
console.log(str.charCodeAt(0)); // 99
console.log(str.split(" ")); // ["code", "threaded"]
console.log(str.replace("threaded", "javascript")); // "code javascript"
console.log(str.trim()); // "code threaded"
console.log(str.slice(0, 4)); // "code"


