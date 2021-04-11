// ------------------------------------------------------------ unknown type: better then Any
let userInput: unknown;

userInput = 7;
userInput = 'Dragan';

let userName: string;
// userName = userInput; !!!ERROR!!! Type 'unknown' is not assignable to type 'string'

// Fix 1
if (typeof userInput === 'string') {
  userName = userInput;
}

// Fix 2
let userInput2: any;

userInput2 = 7;
userInput2 = 'Dragan';

let userName2: string;
userName2 = userInput2;

// ------------------------------------------------------------ never type
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  //   while(true) {} also never returns
}

generateError('An error occurred!', 500);

const result = generateError('An error occurred!', 500);
console.log(result); // no undefined, this function crashes, cancels our script

// Fix 1: wrap in try catch and continue with the script
// Fix 2: set : never, this never returns anything
