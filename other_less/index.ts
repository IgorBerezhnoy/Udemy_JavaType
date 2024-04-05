// //ts-node chapter_2/index.ts
// //tsc other_less/index.ts
// //tsc --init

// TypeScript #12 Утилиты (Utility Types)

///////////////////////////////////Omit
// type Tod2o = {
//   title: string;
//   description: string;
//   completed: boolean;
// }
// type TodoPreview = Omit<T2odo, 'title'>;
// const obj: TodoPreview = {
//   description: 'World',
//   completed: true
// };
// /////////////////////////////////// Pick
// type T2odo = {
//   title: string;
//   description: string;
//   completed: boolean;
// }
// type TodoPreview = Pick<Tod o, 'title' | 'description'>;
// const obj: TodoPreview = {
//   title: 'Hello',
//   description: 'World'
//
// };


//
// /////////////////////////////////// Record
// type PageInfo = {
//   title: string;
// }
// type Page = 'home' | 'about' | 'contact';
// const obj: Record<Page, PageInfo> = {
//   home: {title: 'Home'},//Cool
//   about: {title: 'About'},
//   contact: {title: 'Contact'},
// };


// //////////////////////////////// Required
// type User = {
//   a?: number;
//   b?: number;
// }
// const obj: Required<User> = {
//   b: 2,
// ////Ошибка
// };


/////////////////////////////Readonly
// type User = {
//   a: number;
//   b: number;
// }
// const obj: Readonly<User> = {
//   a: 1,
//   b: 2
// };
// // obj.a = 12 Ошибка
// // delete obj.a Ошибка


//TypeScript #10 Общие типы (Generic)

// const getter =<T> (data: T): T => data;
// let a=getter(1)
// getter(12)
// let b=getter("12")
///TypeScript - Union типы и TypeGuards
// let id: string | number;
// id = '5';
//
// interface Success {
//   res: 'success';
//   data: { a: 1 };
// }
//
// interface Fail {
//   res: 'error';
//   errorMessage: string;
//
// }
//
// type ResType = Success | Fail;
//
// function processRes(res: ResType) {
//   if (res.res === 'success') {
//     console.log(res.data.a);
//   }else {
//     console.log(res.errorMessage);
//   }
// }
//
// function logId(id: string | number) {
//   if (typeof id === 'string') {
//     console.log(id.toUpperCase());
//   } else {
//     console.log(id + 555);
//   }
// }

// function getFirstElement<Type>(arr: Type[]): Type {
//   return arr[0];
// }
// const numbers = [1, 2, 3];
// const firstNumber = getFirstElement(numbers);
// const strings = ["1", "2", "3"];
// const firstString = getFirstElement(strings);
//
// type ApiResponse<T> = {
//   data: T;
//   status: number;
// }
// const getData = <Type>(url: string): Promise<Type> => {
//   return fetch(url).then(res => res.json());
// };
// type Todos = {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }
// getData<ApiResponse<Todos>>('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
//   console.log(res);
// });