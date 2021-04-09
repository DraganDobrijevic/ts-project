const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
  //   if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //     throw new Error('Incorrect input!');
  //   }
  const result = n1 + n2;
  if (showResult) {
    // console.log(phrase + n1 + n2); Result is 52.4 WRONG
    console.log(phrase + result);
  } else {
    return result;
  }
};

const number1 = '5';
const number2 = 2.4;
const printResult = true;
const resultPhrase = 'Result is ';

// const num1: number = 5; bad practice

// const num1: number;
// num1 = 5; good practice

// console.log(add(+number1, +number2, printResult));
add(+number1, +number2, printResult, resultPhrase);
