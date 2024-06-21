// 96.Generic関数の作成
// const names: Array<string> = []; // string[]

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('');
//   }, 2000);
// });

// promise.then((data) => {data.split(' '));

// Generic関数
// 正しくない書き方
// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }

// console.log(merge({ name: 'Max' }, { age: 30 }));
// const mergedObject = merge({ name: 'Max' }, { age: 30 });
// エラーが検知されてしまう
//    Property 'age' does not exist on type 'object'.
// console.log(mergedObject.age);

// 以下の書き方はできるが面倒
// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }

// console.log(merge({ name: 'Max' }, { age: 30 }));
// const mergedObject = merge({ name: 'Max' }, { age: 30 }) as {
//   name: string;
//   age: number;
// };
// console.log(mergedObject.age);

// Generic関数を使った書き方
function merge<T extends {}, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

console.log(merge({ name: 'Max' }, { age: 30 }));
const mergedObject = merge({ name: 'Max' }, { age: 30 });

console.log('age: ', mergedObject.age);
