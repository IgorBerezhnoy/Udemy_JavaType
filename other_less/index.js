// //ts-node chapter_2/index.ts
// //tsc other_less/index.ts
// //tsc --init
// var getData = function (url) {
//     return fetch(url).then(function (res) { return res.json(); });
// };
// getData('https://jsonplaceholder.typicode.com/todos/1').then(function (res) {
//     console.log(res);
// });
let b = {b: 1, a: 2};
if ("a" in b) {
  console.log(111);
} else {
  console.log(2222);
}