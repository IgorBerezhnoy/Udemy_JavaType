//lesson 7-8

// const str = 'str';
// console.log(str);
//
//
// let userName: string = 'Ivan';
// userName = '5';

const isBirthday: boolean = true;
const age: number = 40;
const userName: string = 'John';

// function logBrtMsg(isBirthday: boolean, userName: string, age: number): void {
//   if (isBirthday) {
//     console.log(`Congrats ${userName}, ${age + 1}`);
//   }
// }
const logBrtMsg = (isBirthday: boolean, userName: string, age: number): void=> {
  if (isBirthday) {
    console.log(`Congrats ${userName}, ${age + 1}`);
  }
}

logBrtMsg(isBirthday, userName, age);

// if (isBirthday) {
//   console.log(`Congrats ${userName}, ${age + 1}`);
// }
//

//ts-node chapter1/index.ts
//tsc chapter1/index.ts
//tsc --init
// tsc -help