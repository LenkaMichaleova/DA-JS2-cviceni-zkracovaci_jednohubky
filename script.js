// ----- 1. příklad -----------------//
// const isEmail = (str) => {
//   return str.includes('@');
// };
const isEmail = (str) => str.includes('@');

// ------- 2. příklad --------------//
// const roll = () => {
//   return Math.floor(Math.random() * 6) + 1;
// };
const roll = () => Math.floor(Math.random() * 6) + 1;

// ------- 3. příklad ----------------- //
// const getNumber = (id) => {
//   return Number(document.querySelector(`#${id}`).value);
// };
const getNumber = (id) => Number(document.querySelector(`#${id}`).value);

// --------- 4. příklad ---------------//
// const weather = (temperature) => {
//     if (temperature > 16) {
//       return 'teplo';
//     }
  
//     return 'zima';
//   };
const weather = (temperature) => (temperature > 16 ? 'teplo' : 'zima');

console.log(isEmail("Lenka@mail.com"))
console.log(roll())
console.log(getNumber("tre"))
console.log(weather(15))