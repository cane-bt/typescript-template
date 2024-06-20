// 1. 'Bird'という名前のインターフェースを定義します。このインターフェースは、'type'と'flyingSpeed'という2つのプロパティを持つオブジェクトを表します。
// 'type'は文字列で、値は常に'bird'です。'flyingSpeed'は数値です。

// 2. 'Horse'という名前のインターフェースを定義します。このインターフェースは、'type'と'runningSpeed'という2つのプロパティを持つオブジェクトを表します。
// 'type'は文字列で、値は常に'horse'です。'runningSpeed'は数値です。

// 3. 'Animal'という名前の型を定義します。この型は、'Bird'または'Horse'のどちらかを表します。

// 4. 'moveAnimal'という名前の関数を定義します。この関数は、'Animal'型の引数を取ります。
// 関数内部では、まず'speed'という名前の変数を宣言します。
// 次に、引数の'type'プロパティの値に基づいて、'speed'変数の値を設定します。
// 'type'が'bird'の場合、'speed'は引数の'flyingSpeed'プロパティの値になります。
// 'type'が'horse'の場合、'speed'は引数の'runningSpeed'プロパティの値になります。

// 5. 'moveAnimal'関数を呼び出します。引数は、'type'が'bird'で、'flyingSpeed'が10のオブジェクトです。

// 6. 'user-input'というIDを持つHTML要素を取得し、それを'userInputElement'という名前の変数に代入します。

// 7. 'userInputElement'がnullでないことを確認します。nullでない場合、'userInputElement'をHTMLInputElementとして扱い、その'value'プロパティに'こんにちは'を設定します。

// 以下のコメントアウトされたコードは、型アサーションを使用した別の書き方です。
// この書き方では、'userInputElement'をHTMLInputElementとして扱うことを明示的に指定します。
// また、'!'演算子を使用して、'userInputElement'がnullでないことを明示的に指定します。

// 8. 'user-input'というIDを持つHTML要素を取得し、それをHTMLInputElementとして扱い、その'value'プロパティに'こんにちは'を設定します。
// この操作は、'!'演算子を使用して、取得した要素がnullでないことを明示的に指定します。
