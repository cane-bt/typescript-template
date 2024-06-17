// 77. 関数型としてのインターフェース

// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (n1: number, n2: number): number;
}

let add: AddFn;

// n1をstring型に変えるとエラーが表示される
add = (n1: number, n2: number) => {
  return n1 + n2;
};
interface Named {
  readonly name: string;
}

// interfaceに別のinterfaceを継承する
//  interfaceは複数のinterfaceを継承できる
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;
  constructor(n: string) {
    this.name = n;
  }
  greet(phrase: string): void {
    console.log(phrase + ' ' + this.name);
  }
}

let user1: Greetable;

user1 = new Person('Max');
user1.greet('Hello I am');
console.log(user1);
