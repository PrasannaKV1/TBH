a='hello'
prasanna='code threaded'
console.log(a,prasanna);


//lets dicuss about the var keyowrod
//redeclaration AND Reassignment is possible with var keyword
var a=10;
var a=20;
console.log(a); // 20
//let keyword
//redeclaration is not possible but reassignment is possible
let b=10;
  b=30 ;
  console.log(b); // 30
//const keyword
//reassignment and redeclaration is not possible
const c=10;
c=20
console.log(c); // TypeError: Assignment to constant variable.
//let and const are block scoped
{
  let d=10;
  const e=20;
  console.log(d,e); // 10 20
}

