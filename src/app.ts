// 98. もうひとつの Generic 関数
function merge<T extends {}, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObject = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });

console.log('mergedObject: ', mergedObject);

// 型があいまいのため`length`でエラーが表示される
// function countAndDescribe<T>(element: T) {
//   let descriptionText = '値がありません';
//   if (element.length > 0) {
//     descriptionText = '値は' + element.length + '個です';
//   }
//   return [element, descriptionText];
// }

interface Lengthy {
  length: number;
}
// 型があいまいのため`length`でエラーが表示される
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = '値がありません';
  if (element.length > 0) {
    descriptionText = '値は' + element.length + '個です';
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('お疲れ様です'));

// 99. "keyof" の制約
//    以下の場合は関数をエラーなく呼び出せてしまうことが問題
// function extractAndConvert(obj: object, key: string) {
//    オブジェクトにkeyがあることは保証されてないのでobj[key]でエラーが表示される
//   return 'value: ' + obj[key];
// }

// extractAndConvert({}, 'name');
// Generic型とkeyofを指定することでkeyがオブジェクトのkeyであることを保証する
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'value: ' + obj[key];
}

extractAndConvert({ name: 'Max' }, 'name');
// 期待通りエラーが検知される
// extractAndConvert({}, 'name');

// Genericクラス
// class DataStorage<T> {
//   private data: T[] = [];

//   addItem(item: T) {
//     this.data.push(item);
//   }

//   removeItem(item: T) {
//     this.data.splice(this.data.indexOf(item), 1);
//   }

//   getItems() {
//     return [...this.data];
//   }
// }

// const textStorage = new DataStorage<string>();
// textStorage.addItem('Data1');
// textStorage.addItem('Data2');
// textStorage.removeItem('Data1');
// console.log(textStorage.getItems());

// const numberStorage = new DataStorage<number>();
// numberStorage.addItem(1);
// numberStorage.addItem(2);
// numberStorage.removeItem(1);
// console.log(numberStorage.getItems());

// プリミティブ型は問題ないがオブジェクト型だと問題あり
// const objectStorage = new DataStorage<object>();
// objectStorage.addItem({ name: 'Max' });
// objectStorage.addItem({ name: 'Manu' });
// objectStorage.removeItem({ name: 'Max' });
// // Maxを削除しているのにMaxが表示される
// console.log(objectStorage.getItems());

// オブジェクト型を許可させないようにクラスを定義する(期待通りの動作)
//   extendsでプリミティブ型のみ許可するように制限する
class DataStorage2<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

// オブジェクト型が許可されなくなる
const objectStorage = new DataStorage2<object>();
objectStorage.addItem({ name: 'Max' });
objectStorage.addItem({ name: 'Manu' });
objectStorage.removeItem({ name: 'Max' });
// Maxを削除しているのにMaxが表示される
console.log(objectStorage.getItems());
