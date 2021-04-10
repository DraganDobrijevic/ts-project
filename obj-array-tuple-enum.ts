// ------------------------------------------------------------
//  const person = {
//   name: 'Dragan',
//   age: 29,
// };

// console.log(person.name);

// ------------------------------------------------------------ bad
// const person: object = {
//   name: 'Dragan',
//   age: 29,
// };

// console.log(person.name); name with wave

// ------------------------------------------------------------ not bad
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Dragan',
//   age: 29,
// };

// console.log(person.name);

// ------------------------------------------------------------ better
// const person = {
//   name: 'Dragan',
//   age: 29,
// };

// console.log(person.name);

// ------------------------------------------------------------ with array
// const person = {
//   name: 'Dragan',
//   age: 29,
//   hobbies: ['Snowboarding', 'Playing Video Games'],
// };

// let favoriteActivities: string[];
// favoriteActivities = ['Sports'];

// // let favoriteActivities2: any[];
// // favoriteActivities2 = ['Sports', 1];

// console.log(person.name);

// for (const hobby of person.hobbies) {
//   console.log(hobby.toLocaleUpperCase);
//   //   console.log(hobby.map()); !!! ERROR !!!
// }

// ------------------------------------------------------------ tuple
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Dragan',
//   age: 29,
//   hobbies: ['Snowboarding', 'Playing Video Games'],
//   role: [3, 'developer'],
// };

// // person.role.push('admin'); !!! works, but shouldn’t !!!
// // person.role= [0, 'admin', 'developer'] !!! ERROR !!!

// // person.role[1] = 7; !!! ERROR !!!

// console.log(person.name);

// ------------------------------------------------------------ Any  --- avoid any whenever posible
const person = {
  name: 'Dragan',
  age: 29,
  hobbies: ['Snowboarding', 'Playing Video Games'],
};

let favoriteActivities: any[];
favoriteActivities = ['Sports', 10];
