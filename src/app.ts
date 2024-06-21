function merge<T extends {}, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObject = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });

console.log('mergedObject: ', mergedObject);
