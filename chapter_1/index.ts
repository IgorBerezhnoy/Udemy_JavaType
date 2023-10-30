// //ts-node chapter_1/index.ts
// //tsc chapter_1/index.ts
// //tsc --init
// // tsc -help

// //lesson #18 Union (Объединение)


let message: string | number = '';
let messages: string[] | number[] = ['m',"ss"];

function printMess(msg:string|number) {
  console.log(msg);
}

// //lesson #17 Tuples (Кортежи)


type ObjType = {
  isBirthday: boolean, userName: string, age: number, messages: {
    error: string
  }
};
const userData = {
  isBirthday: true,
  age: 40,
  userName: 'John',
  messages: {
    error: 'Error'
  }
};
// const userDataTuple:[boolean,number,string] = [true, 40, 'john'];
const userDataTuple: [boolean, number, ...string[]] = [true, 40, 'john', 'adas', 'asdas'];
// userDataTuple[3]=0
// console.log(userDataTuple);
// userDataTuple[0] = 'true';

// userDataTuple.map((el)=> "throw new Error(el)")
const [isBirthday, age, userName] = userDataTuple;

const createError = (msg: string): never => {
  throw new Error(msg);
};

const logBrtMsg = ({isBirthday, userName, age, messages: {error}}: ObjType): string => {
  if (isBirthday) {
    return `Congrats ${userName}, age: ${age + 1}`;
  } else {
    return createError(error);
  }
};
// const logBrtMsg = (userData: ObjType): string => userData.isBirthday
//   ? `Congrats ${userData.userName}, age: ${userData.age + 1}`
//   : createError('Error');
console.log(logBrtMsg(userData));
//

const departments: string[] = ['dev', 'design', 'marketing'];
const department: string = departments[0];
// departments.push(5)
const report = departments.filter(el => el !== 'dev').map(el => `${el} - done`);

const nums: number[][] = [[1, 2], [3, 4], [5]];
const [first] = report;
console.log(first);


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