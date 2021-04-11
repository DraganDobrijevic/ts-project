// ------------------------------------------------------------ function return types
const add = (n1: number, n2: number) => {
  return n1 + n2;
}; // ----- const add: (n1: number, n2: number) => number       <== good practice

const add4 = (n1: number, n2: number): number => {
  return n1 + n2;
}; // ----- const add4: (n1: number, n2: number) => number      <== bad practice ...): number =>...

function add2(n1: number, n2: number) {
  return n1 + n2;
} // ----- function add2(n1: number, n2: number): number        <== good practice

// function add5(n1: number, n2: number): string {
//   //   return n1 + n2; // !!! ERROR !!!
// } // ----- function add5(n1: number, n2: number): string        <== bad practice ...): string =>...

function add3(n1: number, n2: number) {
  return n1.toString() + n2.toString();
} // ----- function add3(n1: number, n2: number): string

// ------------------------------------------------------------ function return void
// function add6(n1: number, n2: number) {
//   return n1 + n2;
// }

// function printResult(num: number) {
//   console.log('Result: ' + num);
// } // ----- function printResult(num: number): void

// printResult(add6(1, 2));
// console.log(printResult(add6(1, 2))); // undefined

// let someValue: undefined;
// function printResult2(num: number): undefined {
//   return;
// }

// ------------------------------------------------------------ function types
function add7(n1: number, n2: number) {
  return n1 + n2;
}

function printResult2(num: number) {
  console.log('Result: ' + num);
}

printResult2(add7(1, 2));

// let combineValues: Function;
let combineValues: (a: number, b: number) => number;
combineValues = add7;
// combineValues = 21992; !!!undesirable!!! We can set let combineValues: Function;
// combineValues = printResult2; !!!undesirable!!! We can set let combineValues: (a: number, b: number) => number;
console.log(combineValues(7, 7));

// ------------------------------------------------------------ function types and callbacks
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(`Result from cb: ${result}`);
  // return result; we can set this, but it is ignored because of void
});
