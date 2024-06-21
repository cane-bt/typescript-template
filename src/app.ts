// 97. Generics に制約を追加する
// object型の型制限を追加して30に対してエラー表示させるようにする
function merge<T extends {}, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObject = merge({ name: 'Max', hobbies: ['Sports'] }, 30);

console.log('mergedObject: ', mergedObject);
