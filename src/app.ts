// 70. シングルトン & private コンストラクタ
abstract class Department {
    static fiscalYear = 2020;

    protected employees: string[] = [];

    static createEmployee(name: string) {
        return { name: name };
    }

    constructor(protected readonly id: string, public name: string) {
        console.log(Department.fiscalYear);
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT')
        this.admins = admins;
    }

    describe() {
        console.log('IT部門 - ID: ' + this.id);

    }
}

class AccountingDepartment extends Department {
    private lastReport: string;

    // インスタンスを保持しておくためのprivateなstaticフィールドを追加する
    //  以下はインスタンスというプロパティ名
    //      このクラス自体が持っているフィールをを表す
    // privateなフィールドなのでこのクラスの中からのみアクセスできる
    //  フィールドの方は、このクラスのオブジェクト
    // getInstanceメソッドで使用する
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport
        }

        throw new Error("レポートが見つかりません。");
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error("正しい値を設定してください");
        }
        this.addReport(value)
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting')
        this.lastReport = reports[0];
    }

    // クラスの内部からしかアクセスできない問題を解決するにはstaticメソッドを使ってオブジェクトを作成する
    //  メソッド名に決まりはない
    //  インスタンスがあるかどうかをチェックするメソッド
    //      インスタンスがあれば既存のインスタンスを返す
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        // 以下でもできる
        // if (AccountingDepartment.instance) {
        //     return this.instance;
        // }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    describe() {
        console.log('会計部門 - ID: ' + this.id);
    }

    addReport(text: string) {
        this.reports.push(text)
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return
        }
        this.employees.push(name);
    }
}

const employee1 = Department.createEmployee('Max')
console.log(employee1, Department.fiscalYear);


const it = new ITDepartment('d1', ['Max']);


it.addEmployee('Max')
it.addEmployee('Manu')

it.describe()
it.printEmployeeInformation();

console.log(it);
// AccountingDepartmentのconstructorにprivateをするとnew AccountingDepartmentで以下のようなエラーが表示される
//  Constructor of class 'AccountingDepartment' is private and only accessible within the class declaration.ts(2673)
// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2);


accounting.mostRecentReport = 'abc'
accounting.addReport('Something')
console.log(accounting.mostRecentReport);
accounting.printReports()

accounting.addEmployee('Max')
accounting.addEmployee('Manu')

accounting.describe()
// accounting.printEmployeeInformation();
