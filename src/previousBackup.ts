// // 68. static メソッド & プロパティ
// class Department {
//     // 静的プロパティを追加
//     static fiscalYear = 2020;

//     protected employees: string[] = [];

//     // 静的メソッドを追加
//     static createEmployee(name: string) {
//         return { name: name };
//     }

//     // constructorはstaticにすることができない
//     constructor(private readonly id: string, public name: string) {
//         // staticでないところ(static修飾子が付与されていないところ)からはアクセスできない
//         // console.log(this.fiscalYear);
//         // もしアクセスしたいなら以下のように書く
//         // console.log(Department.fiscalYear);
//     }

//     describe(this: Department) {
//         console.log(`Department (${this.id}): ${this.name}`);
//     }

//     addEmployee(employee: string) {
//         this.employees.push(employee);
//     }

//     printEmployeeInformation() {
//         console.log(this.employees.length);
//         console.log(this.employees);
//     }
// }

// class ITDepartment extends Department {
//     constructor(id: string, private admins: string[]) {
//         super(id, 'IT')
//         this.admins = admins;
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
