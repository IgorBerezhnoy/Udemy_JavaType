//lesson 7-8
// const str = 'str';
// console.log(str);
//
//
// let userName: string = 'Ivan';
// userName = '5';
let isBirthday = true;
let age = 40;
let userName = 'John';
function logBrtMsg(isBirthday, userName, age) {
    if (isBirthday) {
        console.log("Congrats ".concat(userName, ", ").concat(age + 1));
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
