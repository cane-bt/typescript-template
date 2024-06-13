// // 68. static メソッド & プロパティ
// abstract class Department {
//     static fiscalYear = 2020;

//     protected employees: string[] = [];

//     static createEmployee(name: string) {
//         return { name: name };
//     }

//     constructor(protected readonly id: string, public name: string) {
//         console.log(Department.fiscalYear);
//     }

//     // クラス名にもabstractをつけないと以下のようなエラーが表示される
//     //  Abstract methods can only appear within an abstract class.ts(1244)
//     //  解決するにはclassにabstractをつける
//     // classにabstractをつけるとdescribeに以下のようなエラーが表示される
//     //  Method 'describe' cannot have an implementation because it is marked abstract.ts(1245)
//     //  abstractクラスはメソッドを追加できないということなので以下を行う
//     //      中かっこを削除
//     //      戻り値を指定する
//     // 以下のコードはabstractを付与して以下を強制している
//     //  - メソッド名がdescribeであること
//     //  - thisのオブジェクトはDepartmentクラスかそのサブクラスであること
//     //  - 戻り値がvoidであること
//     abstract describe(this: Department): void;

//     addEmployee(employee: string) {
//         this.employees.push(employee);
//     }

//     printEmployeeInformation() {
//         console.log(this.employees.length);
//         console.log(this.employees);
//     }
// }

// // 上でabstractが使われると以下のエラーが発生する
// //  Non-abstract class 'ITDepartment' does not implement all abstract members of 'Department'ts(18052)
// //  Non-abstract class 'ITDepartment' does not implement inherited abstract member 'describe' from class 'Department'.
// //  abstractクラスで定義されているdescribeメソッドを追加してあげればエラーがなくなる
// class ITDepartment extends Department {
//     admins: string[];
//     constructor(id: string, admins: string[]) {
//         super(id, 'IT')
//         this.admins = admins;
//     }

//     describe() {
//         console.log('IT部門 - ID: ' + this.id);

//     }
// }

// class AccountingDepartment extends Department {
//     private lastReport: string;

//     get mostRecentReport() {
//         if (this.lastReport) {
//             return this.lastReport
//         }

//         throw new Error("レポートが見つかりません。");
//     }

//     set mostRecentReport(value: string) {
//         if (!value) {
//             throw new Error("正しい値を設定してください");
//         }
//         this.addReport(value)
//     }

//     constructor(id: string, private reports: string[]) {
//         super(id, 'Accounting')
//         this.lastReport = reports[0];
//     }

//     describe() {
//         console.log('会計部門 - ID: ' + this.id);
//     }

//     addReport(text: string) {
//         this.reports.push(text)
//         this.lastReport = text;
//     }

//     printReports() {
//         console.log(this.reports);
//     }

//     addEmployee(name: string) {
//         if (name === 'Max') {
//             return
//         }
//         this.employees.push(name);
//     }
// }

// const employee1 = Department.createEmployee('Max')
// console.log(employee1, Department.fiscalYear);


// const it = new ITDepartment('d1', ['Max']);


// it.addEmployee('Max')
// it.addEmployee('Manu')

// it.describe()
// it.printEmployeeInformation();

// console.log(it);

// const accounting = new AccountingDepartment('d2', []);

// accounting.mostRecentReport = 'abc'
// accounting.addReport('Something')
// console.log(accounting.mostRecentReport);
// accounting.printReports()

// accounting.addEmployee('Max')
// accounting.addEmployee('Manu')

// accounting.describe()
// accounting.printEmployeeInformation();
