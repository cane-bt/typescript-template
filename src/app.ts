// 66.プロパティーのオーバーライド & protected修飾子
class Department {
    protected employees: string[] = [];

    constructor(private readonly id: string, public name: string) { }

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

class ITDepartment extends Department {
    constructor(id: string, private admins: string[]) {
        super(id, 'IT')
        this.admins = admins;
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting')
    }

    addReport(text: string) {
        this.reports.push(text)
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

const it = new ITDepartment('d1', ['Max']);


it.addEmployee('Max')
it.addEmployee('Manu')

it.describe()
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment('d2', []);
accounting.addReport('Something')
accounting.printReports()

accounting.addEmployee('Max')
accounting.addEmployee('Manu')

accounting.describe()
accounting.printEmployeeInformation();
