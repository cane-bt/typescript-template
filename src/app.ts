// 78. 任意のパラメータ & プロパティ

// 一般的には関数はtypeで定義されていることが多い。
// type AddFn = (a: number, b: number) => number;

// 関数をtypeを使わずinterfaceで定義しているケースもある。以下はその例
interface AddFn {
  (n1: number, n2: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};
interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string): void {
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log('Hi!');
    }
  }
}

let user1: Greetable;

user1 = new Person('Max');
user1.greet('Hello I am');
console.log(user1);
