// 76. インターフェースの拡張
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
  greet(phrase: string): void {}
}
