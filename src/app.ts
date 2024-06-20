// 85. 判別可能な Union 型
//    https://www.udemy.com/course/understanding-typescript-jp/learn/lecture/20181510#notes

// 書き方1(descriminated Unions)
//  各インターフェースに同じ名前のプロパティを定義する
//      kind, typeなど(自由)
//  以下のコードではtypeは実際の値ではない
//      literal型（stringという一般的な型をより絞り込んだ型）
//  TypeScriptがどの型であるかということを理解できるので
//      自動補完が利用できる
//      誤ったcase文やif文が利用された場合すぐにエラーが発生して気付くことができる
interface Bird {
  type: 'bird';
  flyingSpeed: number;
}
interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }
  console.log('移動速度: ' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });

// 書き方2(type guard)
//      Animalの種類が増えるごとにif文が増えてしまう
//      スペスミスが原因でエラーがわからなくなるかも
//      interfaceを使用しているため instanceof は使えない
// interface Bird {
//   flyingSpeed: number;
// }
// interface Horse {
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   if ('flyingSpeed' in animal) {
//     console.log(animal.flyingSpeed);
//   }
// }
// moveAnimal({ type: 'bird', flyingSpeed: 10 });
