// //ts-node chapter_2/index.ts
// //tsc other_less/index.ts
// //tsc --init

// function getFirstElement<Type>(arr: Type[]): Type {
//   return arr[0];
// }
// const numbers = [1, 2, 3];
// const firstNumber = getFirstElement(numbers);
// const strings = ["1", "2", "3"];
// const firstString = getFirstElement(strings);

type ApiResponse<T> = {
  data: T;
  status: number;
}
const getData = <Type>(url: string): Promise<Type> => {
  return fetch(url).then(res => res.json());
};
type Todos = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
getData<ApiResponse<Todos>>('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
  console.log(res);
});