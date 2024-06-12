// class Department {
//     name: string;
//     // 初期値も設定できる
//     // name: string = 'Default'

//     // constructorメソッド
//     //  予約語。
//     constructor(n: string) {
//         this.name = n;
//     }

//     describe() {
//         // 以下の書き方だとクラスの外のグローバル変数を参照するため正しく動作しない
//         // console.log('Department' + name);
//         // クラスのプロパティを参照するにはthisを使用する
//         // ここでのthisはクラスから作成された具体的なプロパティを参照する
//         console.log('Department: ' + this.name);

//     }
// }

// const accounting = new Department('Accounting');

// accounting.describe()

// // describeメソッドをオブジェクトに対して追加しているため期待した動作にならない
// //  オプジェクトリテラルで作られたオブジェクトでありクラスに基づいて作成されたオブジェクトではない
// //      クラスを使わずに単なるダミーオブジェクトとして作られたもの
// //      describeプロパティの値はaccountingオブジェクトのdescribeメソッドを指している
// //      実行はしていないので関数の実行結果の値をdescribeに渡しているのではない
// //  Department: undefined と表示される
// const accountingCopy = { describe: accounting.describe }
// // ここではaccountigCopyのdescribeメソッドを参照しているが、thisプロパティが存在しないため undefined になる
// accountingCopy.describe()


class Department {
    name: string;
    // 初期値も設定できる
    // name: string = 'Default'

    // constructorメソッド
    //  予約語。
    constructor(n: string) {
        this.name = n;
    }

    describe(this: Department) {
        console.log('Department: ' + this.name);
    }
}

const accounting = new Department('Accounting');

accounting.describe()

// describeにthisを追加することでエラーを検知してくれる
// const accountingCopy = { describe: accounting.describe }
// accountingCopy.describe()

// 以下は正しく動作する
//  Departmentと同じようにnameプロパティを持っていて全く同じ構造のため
const accountingCopy = { name: 'dummy', describe: accounting.describe }
accountingCopy.describe()
