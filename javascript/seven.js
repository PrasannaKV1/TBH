let arr =[2,4,56,24,57,25,78,90,100];
console.log(typeof arr); // object
console.log(arr.length); // 9
console.log(arr[0]); // 2
let languages = ["javascript", "python", "java"];
console.log(languages[0]); // "javascript"
console.log(languages[1]); // "python"
console.log(languages[2]); // "java"

let arr2 = [1, 2, 3, 4, 5];
arr2.push(6); // Adds 6 to the end
console.log(arr2); // [1, 2, 3, 4, 5, 6]
arr2.push(7, 8); // Adds 7 and 8 to the end
console.log(arr2); // [1, 2, 3, 4, 5, 6, 7, 8]  
arr2.pop(); // Removes the last element (8)
arr2.push('prasanna','sanjana');
console.log(arr2); // [1, 2, 3, 4, 5, 6, 7, 'prasanna', 'sanjana']
console.log(arr2.length); // 9
console.log(arr2.indexOf(3)); // 2
arr2.shift(); // Removes the first element (1)
console.log(arr2); // [2, 3, 4, 5, 6, 7, 'prasanna', 'sanjana']
arr2.unshift(1); // Adds 1 to the beginning
arr2.splice(2, 3); // Removes 3 elements starting from index 2
console.log(arr2); // [1, 2, 6, 7, 'prasanna', 'sanjana']
arr2.slice(1, 3); // Extracts elements from index 1 to 3 (not inclusive)
console.log(arr2); // [1, 2, 6, 7, 'prasanna', 'sanjana']
arr2.reverse(); // Reverses the array
console.log(arr2); // ['sanjana', 'prasanna', 7, 6, 2, 1]
//diference between slice and splice
// slice returns a shallow copy of a portion of an array into a new array object    
// splice changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
let obj1 = {
    name: "prasanna",
    age: 25,
    city: "bengaluru",
    languages: ["javascript", "python", "java"],    

    greet: function() {
        console.log("Hello, " + this.name);
    }
};
console.log(obj1); // { name: 'prasanna', age: 25, city: 'bengaluru', languages: [ 'javascript', 'python', 'java' ], greet: [Function: greet] }
console.log(obj1.name); // "prasanna"   

console.log(obj1.age); // 25
console.log(obj1.city); // "bengaluru"
console.log(obj1.languages); // [ 'javascript', 'python', 'java' ]


console.log(obj1.languages[0]); // "javascript"
console.log(obj1.languages[1]); // "python"
console.log(obj1.languages[2]); // "java"
obj1.greet(); // "Hello, prasanna"
obj1.languages.push("c++"); // Adds "c++" to the languages a