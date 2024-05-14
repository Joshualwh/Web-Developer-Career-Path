// const script2 = require('./script2')
// import { largeNumber } from "./script2";

// let a;
// if (1 === 1){
//   const {largeNumber} = await import ('./script2.js');
//   a = largeNumber;
// }
// const b = 7;
// console.log(a,b)

const c = require('./script2.js');

const a = c.largeNumber;
const b = 5;

console.log(a, b);