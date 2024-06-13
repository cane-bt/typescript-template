// 64. readonlyプロパティ
class Department {
    // constructorを使用することで省略できる
    // private id: string
    // name: string;
    // privateをつけることで外部からアクセスできないようにできる
    private employees: string[] = [];

    // constructorに初期値を設定するだけで良い
    constructor(private readonly id: string, public name: string) {
        // 以下も記述する必要がなくなる
        // this.id = id;
        // this.name = name;
    }

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('d1', 'New Game');

accounting.addEmployee('Max')
accounting.addEmployee('Manu')

accounting.describe()
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'dummy', describe: accounting.describe }
// accountingCopy.describe()
