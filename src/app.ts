// 86. 型キャスト
//  TypeScriptでもokがある特定の型であるということをはっきりと明確に推論できない使用する
//  開発者が知っているその特定の型をTypeScriptに伝えることができる
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

// ! を使わない書き方
// const userInputElement = document.getElementById('user-input');

// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = 'こんにちは';
// }

// ! を使う書き方
// const paragraph = document.querySelector('message-output');
// const userInputElement = <HTMLInputElement>(
//   document.getElementById('user-input')!
// );
// userInputElement.value = 'こんにちは';

// react, jsxで見る書き方(TypeScriptでもok)
const userInputElement = document.getElementById(
  'user-input'
)! as HTMLInputElement;
userInputElement.value = 'こんにちは';
