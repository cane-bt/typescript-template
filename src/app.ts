// 87. インデックス型
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

const userInputElement = document.getElementById('user-input');

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'こんにちは';
}

interface ErrorContainer {
  // {email:'正しいメールアドレスではありません', username:'ユーザー名に記号を含めることはできません'}
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: '正しいメールアドレスではありません',
  username: 'ユーザー名に記号を含めることはあできません',
};
