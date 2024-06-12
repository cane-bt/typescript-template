// private & public 修飾子
class Department {
    name: string;
    // privateをつけることで外部からアクセスできないようにできる
    private employees: string[] = [];

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Department) {
        console.log('Department: ' + this.name);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('Accounting');

accounting.addEmployee('Max')
accounting.addEmployee('Manu')

// 外部(クラスの外部も含む)から直接変更できてしまう
// accounting.employees[2] = 'Anna'

accounting.describe()
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'dummy', describe: accounting.describe }
// accountingCopy.describe()
