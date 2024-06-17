// 73. クラスでのインタフェースの実装
interface Greetable {
  name: string;

  greet(phrase: string): void;
}

// 1つのクラスに複数のインターフェースを実装できる
// class Person implements Greetable {
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
