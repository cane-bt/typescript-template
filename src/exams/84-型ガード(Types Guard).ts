// 交差型(Intersection Types)
//      https://www.udemy.com/course/understanding-typescript-jp/learn/lecture/20181454#notes
//      https://qiita.com/yamashin0616/items/0e2211491869df01f6d7
// 1. まず、`Admin`という名前の型を定義します。この型は、`name`（文字列）と`privileges`（文字列の配列）という2つのプロパティを持つオブジェクトを表します。

// 2. 次に、`Employee`という名前の型を定義します。この型は、`name`（文字列）と`startDate`（Dateオブジェクト）という2つのプロパティを持つオブジェクトを表します。

// 3. `Admin`と`Employee`の両方の特性を持つ新しい型`ElevatedEmployee`を定義します。これは`Admin`と`Employee`の交差型（`&`演算子を使用）として定義します。

// 4. `ElevatedEmployee`型の新しいオブジェクト`e1`を作成します。このオブジェクトは、`name`に`'Max'`、`privileges`に`['create-server']`、`startDate`に現在の日付（`new Date()`）を持つように初期化します。

// 5. `Combinable`という名前の型を定義します。この型は、文字列または数値（`string | number`）を表します。

// 6. `Numeric`という名前の型を定義します。この型は、数値またはブール値（`number | boolean`）を表します。

// 7. `Combinable`と`Numeric`の両方の特性を持つ新しい型`Universal`を定義します。これは`Combinable`と`Numeric`の交差型（`&`演算子を使用）として定義します。

// 8. `add`という名前の関数を定義します。この関数は、2つの`Combinable`型の引数を取り、それらが文字列であれば連結した結果を、それ以外の場合は加算した結果を返します。

// 9. `Employee`または`Admin`のどちらかの特性を持つ新しい型`UnknownEmployee`を定義します。これは`Employee`と`Admin`の和集合型（`|`演算子を使用）として定義します。

// 10. `printEmployeeInformation`という名前の関数を定義します。この関数は、`UnknownEmployee`型の引数を取り、その`name`プロパティをコンソールに出力します。さらに、引数が`privileges`プロパティを持つ場合と`startDate`プロパティを持つ場合には、それぞれのプロパティをコンソールに出力します。

// 11. `printEmployeeInformation`関数を2回呼び出します。1回目は`e1`を引数に、2回目は`name`に`'Manu'`、`startDate`に現在の日付（`new Date()`）を持つ新しいオブジェクトを引数にします。

// 12. `Car`という名前のクラスを定義します。このクラスは、`drive`という名前のメソッドを持ち、そのメソッドは`'運転中...'`というメッセージをコンソールに出力します。

// 13. `Truck`という名前のクラスを定義します。このクラスは、`drive`という名前のメソッドと`loadCargo`という名前のメソッドを持ちます。`drive`メソッドは`'トラックを運転中...'`というメッセージをコンソールに出力し、`loadCargo`メソッドは引数として数値を取り、その数値を含むメッセージをコンソールに出力します。

// 14. `Car`または`Truck`のどちらかの特性を持つ新しい型`Vehicle`を定義します。これは`Car`と`Truck`の和集合型（`|`演算子を使用）として定義します。

// 15. `Car`クラスと`Truck`クラスの新しいインスタンス`v1`と`v2`を作成します。

// 16. `useVehicle`という名前の関数を定義します。この関数は、`Vehicle`型の引数を取り、その`drive`メソッドを呼び出します。さらに、引数が`Truck`のインスタンスである場合には、その`loadCargo`メソッドを呼び出します。

// 17. `useVehicle`関数を2回呼び出します。1回目は`v1`を引数に、2回目は`v2`を引数にします。

// 以上の手順に従ってコードを作成すると、指定されたコードと全く同じ結果が得られます。😊
