// 65.継承
class Department {
    private employees: string[] = [];

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

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max')
it.addEmployee('Manu')

it.describe()
it.printEmployeeInformation();

console.log(it);
