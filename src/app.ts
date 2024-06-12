class Department {
    name: string;
    // 初期値も設定できる
    // name: string = 'Default'

    // constructorメソッド
    //  予約語。
    constructor(n: string) {
        this.name = n;
    }
}

const accounting = new Department('Accounting');
console.log(accounting)
