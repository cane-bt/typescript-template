interface Person {
  name: string;
  age: number;

  // メソッドは構造だけを定義する
  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: 'Max',
  age: 30,
  greet(phrase: string) {
    console.log(phrase + '' + this.name);
  },
};

user1.greet('Hello');
