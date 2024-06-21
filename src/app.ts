// 94. 組み込みの Generic 型 & Generics とは
const names: Array<string> = []; // string[]

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('');
  }, 2000);
});

promise.then((data) => {data.split(' '));
