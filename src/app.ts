// 89. オプショナルチェイン
type Admin = {
  name: string;
  priviledges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  priviledges: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add('hello', ' typescript');
result.split(' ');

// ネストされたオブジェクト(確実にjobが渡ってくる)
const fetchedUserData1 = {
  id: 'u1',
  name: 'user1',
  job: { title: 'Developer', description: 'TypeScript' },
};

console.log(fetchedUserData1.job.title);

// 書き方1
// ネストされたオブジェクト(jobが渡ってくるか不確定の場合は以下のように書く)
// const fetchedUserData2 = {
//   id: 'u1',
//   name: 'user1',
//   // job: { title: 'Developer', description: 'TypeScript' },
// };

// console.log(fetchedUserData2.job && fetchedUserData2.job.title);

// 書き方2
// オプショナルチェーン
//    TypeScript3.7以上で使える
const fetchedUserData3 = {
  id: 'u1',
  name: 'user1',
  // job: { title: 'Developer', description: 'TypeScript' },
};

// 暫定的にfetchedUserData3を定義しているためエラーを検知しているが本来はこういう書き方
console.log(fetchedUserData3?.job?.title);
