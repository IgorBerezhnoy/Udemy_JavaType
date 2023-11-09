// //ts-node chapter_1/index.ts
// //tsc chapter_1/index.ts
// //tsc --init
// // tsc -help
// //lesson #20 Примитивные литеральные типы (Literal types)
var msg = 'hello';
msg = 'Hello';
var port3000 = 3000;
var port3001 = 3001;

function startServer(protocol, port) {
  if (port === port3000 || port === port3001) {
    console.log('Serer started in '.concat(protocol, ': //server:').concat(port));
  } else {
    console.log('Error!!!');
  }
  return 'Serer started';
}

var createAnimation = function (id, animationName, timingFunc, duration, iterCount) {
  if (timingFunc === void 0) {
    timingFunc = 'ease';
  }
  var elem = document.querySelector('#'.concat(id));
  if (elem && elem.style) {
    console.log(''.concat(animationName, ' ').concat(timingFunc, ' ').concat(duration, ' ').concat(iterCount));
    // elem.style.animation = `${animationName} ${timingFunc} ${duration} ${iterCount}`;
    // console.log(elem.style.animation);
  }
};
// //lesson #19 Сужение типов (Narrowing)
//
//
// let message: string | number = '';
// let messages: string[] | number[] = ['m', 'ss'];
// //
// // function printMess(msg: string | number|boolean) {
// //   if (typeof msg !== 'number'||typeof msg==="number") {
// //     console.log(msg.toString());
// //   } else {
// //     console.log(msg);
// //   }
// //   console.log(msg)
// // }
// function printMess(msg: string[] | number | boolean) {
//   if (Array.isArray(msg)) {
//     msg.forEach(el => console.log(el));
//   } else if (typeof msg === 'number') {
//     console.log(msg.toFixed());
//   } else {
//     console.log(msg);
//   }
// }
//
// const printReadings = (a: number | string, b: number | boolean) => {
//   if (a === b) {
//     console.log(a, b);
//   }
// };
// const printReadings2 = (a: number[] | string) => {
//   console.log(a.slice(0, 2));
// };
//
// const checkReadings = (reading: { sysytem: number } | { user: number }): void => {
//   if ('sysytem' in reading) {
//     console.log(reading.sysytem);
//   } else {
//     console.log(reading.user);
//   }
// };
//
// function logValue(x: string | Date) {
//   if (x instanceof Date) {
//     console.log(x.getMinutes());
//   } else {
//     console.log(x.toUpperCase());
//   }
// }
// //lesson #17 Tuples (Кортежи)
//
// type ObjType = {
//   isBirthday: boolean, userName: string, age: number, messages: {
//     error: string
//   }
// };
//
//
//
// let message: string | number = '';
// let messages: string[] | number[] = ['m',"ss"];
//
// function printMess(msg:string|number) {
//   console.log(msg);
// }
// //lesson #18 Union (Объединение)
//
// let message: string | number = '';
// let messages: string[] | number[] = ['m',"ss"];
//
// function printMess(msg:string|number) {
//   console.log(msg);
// }
//
// // //lesson #17 Tuples (Кортежи)
//
//
// type ObjType = {
//   isBirthday: boolean, userName: string, age: number, messages: {
//     error: string
//   }
// };
//---
//
// const userData = {
//   isBirthday: true,
//   age: 40,
//   userName: 'John',
//   messages: {
//     error: 'Error'
//   }
// };
//
//
// // const userDataTuple:[boolean,number,string] = [true, 40, 'john'];
// const userDataTuple: [boolean, number, ...string[]] = [true, 40, 'john', 'adas', 'asdas'];
// // userDataTuple[3]=0
// // console.log(userDataTuple);
// // userDataTuple[0] = 'true';
//
// // userDataTuple.map((el)=> "throw new Error(el)")
//---
// const [isBirthday, age, userName] = userDataTuple;
//
// const createError = (msg: string): never => {
//   throw new Error(msg);
// };
//
// const logBrtMsg = ({isBirthday, userName, age, messages: {error}}: ObjType): string => {
//   if (isBirthday) {
//     return `Congrats ${userName}, age: ${age + 1}`;
//   } else {
//     return createError(error);
//   }
// };
// // const logBrtMsg = (userData: ObjType): string => userData.isBirthday
// //   ? `Congrats ${userData.userName}, age: ${userData.age + 1}`
// //   : createError('Error');
// console.log(logBrtMsg(userData));
// //
//
// const departments: string[] = ['dev', 'design', 'marketing'];
// const department: string = departments[0];
// // departments.push(5)
// const report = departments.filter(el => el !== 'dev').map(el => `${el} - done`);
//
// const nums: number[][] = [[1, 2], [3, 4], [5]];
// const [first] = report;
// console.log(first);
//
// // //lesson #14-15
// type ObjType = {
//   isBirthday: boolean, userName: string, age: number, messages: {
//     error: string
//   }
// };
// const userData = {
//   isBirthday: true,
//   age: 40,
//   userName: 'John',
//   messages: {
//     error: 'Error'
//   }
// };
//
// const createError = (msg: string): never => {
//   throw new Error(msg);
// };
// // let userData = {isBirthday: true, age: 40, userName: 'John'};
// // let userObj: ObjType = JSON.parse(userData);
//
//
// const logBrtMsg = ({isBirthday, userName, age, messages:{error}}: ObjType): string => {
//   if (isBirthday) {
//     return `Congrats ${userName}, age: ${age + 1}`;
//   } else {
//     return createError(error);
//   }
// };
// // const logBrtMsg = (userData: ObjType): string => userData.isBirthday
// //   ? `Congrats ${userData.userName}, age: ${userData.age + 1}`
// //   : createError('Error');
// console.log(logBrtMsg(userData));
// //
//
// const departments: string[] = ['dev', 'design', 'marketing'];
// const department: string = departments[0];
// // departments.push(5)
// const report = departments.filter(el => el !== 'dev').map(el => `${el} - done`);
//
// const nums: number[][] = [[1, 2], [3, 4], [5]];
// const [first] = report;
// console.log(first);
// //lesson 12
//
// const test: null = null;
// // const test2: string = null;//strictNullChecks
// // const test4: number = null;////strictNullChecks
//
// function getRndData() {
//   if (Math.random() < 0.5) {
//     return null;
//   } else {
//     return '  Some string';
//   }
// }
//
// const data = getRndData();
// const trimmedData = data?.trim();
// //lesson 11
// type ObjType = { isBirthday: boolean, userName: string, age: number };
// const isBirthday = true;
// const age = 40;
// const userName = 'John';
// const createError = (msg: string): never => {
//   throw new Error(msg);
// };
// // let userData = {isBirthday: true, age: 40, userName: 'John'};
// // let userObj: ObjType = JSON.parse(userData);
//
//
// const logBrtMsg = (isBirthday: boolean, userName: string, age: number): string => {
//   if (isBirthday) {
//     return `Congrats ${userName}, ${age + 1}`;
//   } else if (!isBirthday) {
//     return createError('Error');
//     // return 'Too bad';
//   }
// };
//
// console.log(logBrtMsg(isBirthday, userName, age));
//
// //lesson 9
// let salary:number;
// salary = 5000;
//
//
// type ObjType = { isBirthday: boolean, userName: string, age: number };
// let userData = '{ isBirthday: true, age: 40, userName: \'John\' }';
// let userObj: ObjType = JSON.parse(userData);
//
//
// const logBrtMsg = (isBirthday: boolean, userName: string, age: number): string => {
//   if (isBirthday) {
//     return `Congrats ${userName}, ${age + 1}`;
//   } else {
//     return 'Error';
//   }
// };
//
// console.log(logBrtMsg(userObj.isBirthday, userObj.userName, userObj.age));
// //lesson 7-8
//
// // const str = 'str';
// // console.log(str);
// //
// //
// // let userName: string = 'Ivan';
// // userName = '5';
//
// const isBirthday: boolean = true;
// const age: number = 40;
// const userName: string = 'John';
//
// // function logBrtMsg(isBirthday: boolean, userName: string, age: number): void {
// //   if (isBirthday) {
// //     console.log(`Congrats ${userName}, ${age + 1}`);
// //   }
// // }
// const logBrtMsg = (isBirthday: boolean, userName: string, age: number): void=> {
//   if (isBirthday) {
//     console.log(`Congrats ${userName}, ${age + 1}`);
//   }
// }
//
// logBrtMsg(isBirthday, userName, age);
//
// // if (isBirthday) {
// //   console.log(`Congrats ${userName}, ${age + 1}`);
// // }
// //
//
// //ts-node chapter_1/index.ts
// //tsc chapter_1/index.ts
// //tsc --init
// // tsc -help
