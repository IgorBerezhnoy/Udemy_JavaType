// //ts-node chapter_1/index.ts
// //tsc chapter_1/index.ts
// //tsc --init
// // tsc -help

// //lesson 9
let userData = "{ isBirthday: true, age: 40, userName: 'John' }";
let userObj=JSON.parse(userData)
let logBrtMsg = function (isBirthday, userName, age) {
    if (isBirthday) {
        return "Congrats ".concat(userName, ", ").concat(age + 1);
    }
    else {
        return 'Error';
    }
};
console.log(logBrtMsg(userObj.isBirthday, userObj.userName, userObj.age));
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
